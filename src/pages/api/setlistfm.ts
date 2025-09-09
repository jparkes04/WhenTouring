// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getEventsFromArtistName } from "@/lib/services/setlistfm";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { artistName } = req.query;
  
  if (!artistName || typeof artistName !== "string") {
    return res.status(400).json({ error: "artistName is required" });
  }

  const setlist = await getEventsFromArtistName(artistName);
  res.status(200).json({ setlist });
}