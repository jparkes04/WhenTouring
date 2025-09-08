import { getMBIDFromArtistName } from "../services/musicbrainz";
import { fetchEventsFromSetlistfm } from "../clients/setlistfm";

export async function getEventsFromArtistName(artistName: string) {
  const mbid = await getMBIDFromArtistName(artistName);
  let page = 0;
  let res;

  do
  {
    res = await fetchEventsFromSetlistfm(mbid, page);

    // review javascript array operations to find out how to combine setlists from all pages

    page++;
  } while ( res.setlist?.length );

//   if (!json.artists?.length) {
//     throw new Error(`No MBID found for: ${artistName}`);
//   }

  return null;
}