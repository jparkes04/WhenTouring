import { GeminiContext } from "@/types/gemini";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});
const maxRetries = 3;

export async function queryGemini(context : GeminiContext) : Promise<string> {
  let response;
  let delay = 300;

  for (let i = 0; i < maxRetries; i++) {
    try {
      response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `*Historical* JSON concert data for artist ${context.artistName}. 
        Predict when they might return to or near ${context.subjectCity} based on this. 
        1 sentence response with prediction and reason. 
        Date/Time of this request: ${new Date().toISOString().slice(0, 10)}.
        Specify if City not recognised or ambiguous.
        Do not include mark-up.
        ${JSON.stringify(context.events)}`,
      });

      if (response.text)
        return response.text;
    } catch {
      if (i < maxRetries - 1) {
        await new Promise(r => setTimeout(r, delay));
        delay *= 2;
      }
    }
  }  
  
  throw new Error("Gemini API Error");
}