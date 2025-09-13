import type { NextApiRequest, NextApiResponse } from 'next'
import { getEventsFromArtistName } from "@/lib/services/setlistfm";
import { predictReturn } from '@/lib/services/gemini'
import { EventList } from '@/types/eventList';
 
type ResponseData = {
  message: string
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    const eventList: EventList = await getEventsFromArtistName("The Strokes");
    const response = await predictReturn(eventList, "New York");

    res.status(200).json({ message: response })
}