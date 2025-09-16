import { EventList } from "@/types/eventList";
import { queryGemini } from "../clients/gemini";
import { GeminiContext } from "@/types/gemini";

export async function predictReturn (eventList: EventList, subjectCity: string) : Promise<string> {
    try {
        const geminiContext:GeminiContext = {
            artistName: eventList.artistName,
            subjectCity: subjectCity,
            events: eventList.events.map((event) => {
                return {
                    date: event.date,
                    city: event.venue.city,
                    country: event.venue.country
                }
            })
        }

        const response = await queryGemini(geminiContext);
        return response;
        
    } catch (error) {
        console.error(error);
        return "Unable to make a prediction at this time, please try again later.";
    }
}