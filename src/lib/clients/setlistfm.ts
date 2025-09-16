import Bottleneck from "bottleneck";

const maxRetries = 3;
const limiter = new Bottleneck({
  maxConcurrent: 1,
  minTime: 600
});

export async function fetchEventsFromSetlistfm(mbid: string, page: number) {
  let res;
  let delay = 300;
  
  for (let i = 0; i < maxRetries; i++) {
    res = await limiter.schedule( () => 
      fetch(`https://api.setlist.fm/rest/1.0/artist/${mbid}/setlists?p=${page}`, {
        headers: {
            "x-api-key": process.env.SETLISTFM_API_KEY!,
            "Accept": "application/json"
        },
      })
    );

    if (res.ok)
      return res.json();

    if (i < maxRetries - 1) {
      await new Promise(r => setTimeout(r, delay));
      delay *= 2;
    }
  }

  throw new Error(`Fetch from SetlistFM error: ${res?.status}`);
}