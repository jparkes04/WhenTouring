import { searchMusicBrainzArtists } from "../clients/musicbrainz";
import { MBResponse } from "@/types/musicbrainz";

export async function getMBDataFromArtistName(artistName: string) {
  const mbResponse:MBResponse = await searchMusicBrainzArtists(artistName);

  if (!mbResponse.count) {
    throw new Error(`No MBID found for: ${artistName}`);
  }

  return mbResponse.artists[0];
}