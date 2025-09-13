import { GeminiContext } from "@/types/gemini";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

export async function queryGemini(context : GeminiContext) : Promise<string> {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `This JSON contains the concert history for artist ${context.artistName}.
               Predict when they might next perform in or near the city of ${context.subjectCity} based on the patterns in this data.
               Please keep your response brief highlighting the final prediction and basic reaosn as a full sentence.
               This could be a date, range, or season for example.
               Do not include accuracy disclaimers, they are elsewhere on my site.
               Current date at time of requets is ${Date.now()}
               ${JSON.stringify(context.events)}`,
  });

  if (response.text)
    return response.text;
  return "Unable to make a prediction at this time.";
}