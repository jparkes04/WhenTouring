import { searchMusicBrainzArtists } from "../clients/musicbrainz";

export async function getMBIDFromArtistName(artistName: string) {
  const json = await searchMusicBrainzArtists(artistName);

  if (!json.artists?.length) {
    throw new Error(`No MBID found for: ${artistName}`);
  }

  return json.artists[0].id;
}