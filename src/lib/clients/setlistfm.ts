import Bottleneck from "bottleneck";

const limiter = new Bottleneck({
  maxConcurrent: 1,
  minTime: 850
});

export async function fetchEventsFromSetlistfm(mbid: string, page: number) {
  const res = await limiter.schedule( () => 
    fetch(`https://api.setlist.fm/rest/1.0/artist/${mbid}/setlists?p=${page}`, {
      headers: {
          "x-api-key": process.env.SETLISTFM_API_KEY!,
          "Accept": "application/json"
      },
    })
  );

  if (!res.ok) throw new Error(`Fetch from SetlistFM error: ${res.status}`);

  return res.json();
}