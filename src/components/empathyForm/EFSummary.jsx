import FormWrapper from "./FormWrapper";
import DivGridSummary from "../DivGridSummary";
import { useEffect } from "react";

export default function EFSummary({ empathyResponse, complaint, feeling, initialFeelings, underlyingFeelings, needs, updateFields }) {
    
    const initialFeeling = feeling
    const selectedInitialFeelings = initialFeelings?.filter(each => each.selected)
    const selectedUnderlyingFeelings = underlyingFeelings.filter(each => each.selected)
    const selectedNeeds = needs.filter(each => each.selected)

    let complaintString = ""
    let feelingString = ""
    
    if (selectedInitialFeelings) {
        // const complaintDataObj = {
        //     "my complaint": complaint,
        //     "my initial feelings": selectedInitialFeelings?.map(each => each.word),
        //     "my underlying feelings": selectedUnderlyingFeelings.map(each => each.word),
        //     "my needs": selectedNeeds.map(each => each.word)
        // }
        complaintString = `They are being ${complaint}. My initial feelings are ${selectedInitialFeelings.map(each => each.word).join(",")}. My underlying feelings are ${selectedUnderlyingFeelings.map(each => each.word).join(",")}. My needs are ${selectedNeeds.map(each => each.word).join(",")}. `
        
    } else {
        // const feelingDataObj = {
        //     "my initial feeling": initialFeeling,
        //     "my underlying feelings": selectedUnderlyingFeelings.map(each => each.word),
        //     "my needs": selectedNeeds.map(each => each.word)
        // }
        feelingString = `I'm feeling ${initialFeeling}. My underlying feelings are ${selectedUnderlyingFeelings.map(each => each.word).join(",")}. My needs are ${selectedNeeds.map(each => each.word).join(",")}. `
    };


    useEffect(() => {
        if (selectedInitialFeelings) {
            console.log(complaintString);
            updateFields({ section: "complaint", empathyString: complaintString });
        } else {
            console.log(feelingString);
            updateFields({ section: "feeling", empathyString: feelingString });
        }
        }, []);

    console.log(selectedUnderlyingFeelings.length)
    
    return (
    <>
        { selectedInitialFeelings && 
        <FormWrapper FormWrapper title = "MY INITIAL FEELINGS" >
            <DivGridSummary words={selectedInitialFeelings} section="initialFeelings" bgColor={'#699F96'}/>
            <div className="text-sm text-center mt-8 mb-5 tracking-wide">MY UNDERLYING FEELINGS</div>
            <DivGridSummary words={selectedUnderlyingFeelings} section="underlyingFeelings" bgColor={'#935A5A'}/>
            <div className="text-sm text-center mt-8 mb-5" tracking-wide>MY NEEDS</div>
            <DivGridSummary words={selectedNeeds} section="needs" bgColor={'#93b1c9'}/>
        </FormWrapper>
    }

        { !selectedInitialFeelings && 
        < FormWrapper FormWraper title = "MY UNDERLYING FEELINGS" >
            <DivGridSummary words={selectedUnderlyingFeelings} section="underlyingFeelings" bgColor={'#935A5A'}/>
            <div className="text-sm text-center mt-8 mb-5" tracking-wide>MY NEEDS</div>
            <DivGridSummary words={selectedNeeds} section="needs" bgColor={'#93b1c9'}/>
        </FormWrapper>
    }
    
        </>
    )
}

