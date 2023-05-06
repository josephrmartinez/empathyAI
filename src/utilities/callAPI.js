import openai, { Configuration, OpenAIApi } from "openai";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

export default async function callAPI(prompt) {
    const configuration = new Configuration({
            apiKey: apiKey,
            headers: {
                "User-Agent": "NVCempathyAI"
            }
    });         
        
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
        });
    
    
    const generatedText = completion.data.choices[0].message.content;

    return generatedText

}