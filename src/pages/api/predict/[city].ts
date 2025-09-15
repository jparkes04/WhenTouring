import type { NextApiRequest, NextApiResponse } from 'next'
import { predictReturn } from '@/lib/services/gemini'
import { EventList } from '@/types/eventList';
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { city } = req.query;

  if (req.method === "POST") {
    const eventList = req.body as EventList
    const response = await predictReturn(eventList, city as string);
    res.status(200).json({ prediction: response })
  }

  res.status(405).end();   
}