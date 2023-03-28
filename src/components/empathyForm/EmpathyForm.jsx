import { useState } from "react"
import useMultistepForm from "../../utilities/useMultistepForm"
import EFInitialFeelings from "./EFInitialFeelings"
import EFUnderlyingFeelings from "./EFUnderlyingFeelings"
import EFNeeds from "./EFNeeds"
import EFSummary from "./EFSummary"
import EFEmpathyAI from "./EFEmpathyAI"
import Select from 'react-select'
import { ReactComponent as RightIcon } from '../../assets/icons/angle-right-solid.svg'
import { ReactComponent as LeftIcon } from '../../assets/icons/angle-left-solid.svg'
import openai, { Configuration, OpenAIApi } from "openai";
import { db } from "../../firebase"
// import { docSnap } from "../../firebase"
import { getDoc, doc } from "firebase/firestore"


const docRef = doc(db, 'api-keys', 'openai-api-key')
const docSnap = await getDoc(docRef)
const key = docSnap.data()
export const openaiKey = key.key

const AIListeners = [
    { value: "Charles", label: "Charles" },
    { value: "Fannie", label: "Fannie" },
    { value: "Tom", label: "Tom" },
    { value: "Wallace", label: "Wallace" }
    ]

const generateText = async (empathyString, AIpersona, updateFields, openaiKey) => {
    updateFields({ empathyResponse: "Listening..." });

    let style;
    switch (AIpersona) {
        case "Charles":
            style = "Charles Bukowski"
            break;
        case "Fannie":
            style = "Fannie Flagg"
            break;
        case "Tom":
            style = "Tom Robbins"
            break;
        case "Wallace":
            style = "David Foster Wallace"
            break;
    }

    const configuration = new Configuration({
        apiKey: openaiKey,
        headers: {
            "User-Agent": "NVCempathyAI"
        }
    });         
    const openai = new OpenAIApi(configuration);
    const prompt = `${empathyString} Provide an empathetic response in the style of ${style}`;
    const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
        });
    
    console.log(completion.data);
    const generatedText = completion.data.choices[0].message.content;
    updateFields({ empathyResponse: generatedText });
}


export default function EmpathyForm(props) {
    const [data, setData] = useState(props.content)

    function handleSelectAI(value) {
        const AIpersona = value.value
        const empathyString = JSON.stringify(data.empathyString)
        generateText(empathyString, AIpersona, updateFields, openaiKey );
    }

    function updateFields(fields) {
        setData(prevData => {
            return { ...prevData, ...fields }
        })
    }

    let steps = [];
    if (data['initialFeelings']) {
        steps.push(<EFInitialFeelings {...data} formPage="EFInitialFeelings" updateFields={updateFields} handleDivClick={handleDivClick} />);
    }
    steps.push(
        <EFUnderlyingFeelings {...data} formPage="EFUnderlyingFeelings" updateFields={updateFields} handleDivClick={handleDivClick} />,
        <EFNeeds {...data} formPage="EFNeeds" updateFields={updateFields} handleDivClick={handleDivClick} />,
        <EFSummary {...data} formPage="EFSummary" updateFields={updateFields} />,
        <EFEmpathyAI {...data} formPage="EFEmpathyAI" />
    );

    const { currentStepIndex, step, isLastStep, back, next } =
        useMultistepForm(steps);

    const formPage = step.props.formPage

    function handleDivClick(section, index) {
        setData(prevData => {
            const updatedSection = prevData[section].map((item, i) => {
                if (i === index) {
                    return { ...item, selected: !item.selected };
                }
                return item;
            });
            return { ...prevData, [section]: updatedSection };
        });
    }

    function onSubmit(e) {
        e.preventDefault();
        if (!isLastStep) return next()

    };
    
    return (
        <div className='container empathy'>
            {!isLastStep && <div>
                <div className='text-sm'>{props.params.section == "feelings" ? "I'M FEELING" : "THEY'RE BEING"}</div>
                <div className={`listDiv ${props.params.section}`} style={{ cursor: "default" }}>{props.params.word}</div>
            </div>}
            {isLastStep && <div>
                <div className='text-sm mb-4 tracking-wide'>RECEIVE EMPATHY</div>
                <div className='my-4 w-[180px]'><Select options={AIListeners} placeholder={"from..."} onChange={handleSelectAI} isSearchable={false} /></div>
            </div>}
            <div className="h-full w-full max-w-screen-sm grid grid-rows-[60px,1fr,80px]">
                {step}
            {formPage !== "empathyAI" && <div className="flex flex-row justify-between items-center text-sm mx-4">
                {currentStepIndex === 0 && <div className=""></div>}
                {currentStepIndex !== 0 &&
                    <button type="button" className="flex flex-row items-center" style={{ color: "#888888" }} onClick={back}><LeftIcon className="mx-2 opacity-40" width={12} />
                        {formPage === "EFUnderlyingFeelings" && "initial feelings"}
                        {formPage === "EFNeeds" && "underlying feelings"}
                        {formPage === "EFSummary" && "needs"}
                        {formPage === "EFEmpathyAI" && "summary"}
                    </button>}
                
                {!isLastStep && <button className="flex flex-row items-center" type="button" style={{ color: "#888888" }} onClick={next}>
                {formPage === "EFInitialFeelings" && "underlying feelings"}
                {formPage === "EFUnderlyingFeelings" && "needs"}
                {formPage === "EFNeeds" && "summary"}
                {formPage === "EFSummary" && "receive empathy"}
                <RightIcon className="mx-2 opacity-40" width={12} />
            </button>}
            </div>}
            </div>
        </div>
    )
}



