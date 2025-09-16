import Bottleneck from "bottleneck";

const limiter = new Bottleneck({
  maxConcurrent: 1,
  minTime: 25
});

export async function searchMusicBrainzArtists(artistName: string) {
  const res = await limiter.schedule( () =>
    fetch(`https://musicbrainz.org/ws/2/artist?query=${encodeURIComponent(artistName)}~&limit=1`, {
      headers: {
          "User-Agent":  `${process.env.APP_NAME}/${process.env.APP_VERSION} (${process.env.CONTACT_ADDRESS})`,
          "Accept": "application/json"
      },
    })
  );

  if (!res.ok) throw new Error(`Find MBID error: ${res.status}`);
  
  return res.json();
}