import { getMBIDFromArtistName } from "../services/musicbrainz";
import { fetchEventsFromSetlistfm } from "../clients/setlistfm";

export async function getEventsFromArtistName(artistName: string) {
  const mbid = await getMBIDFromArtistName(artistName);

  let page = 1;
  let resPage = [];
  const setlist = [];

  do
  {
    resPage = await fetchEventsFromSetlistfm(mbid, page);
    setlist.push(...(resPage.setlist ?? []));
    page++;

  } while (resPage.itemsPerPage * (page - 1) < resPage.total);

  return setlist;
}