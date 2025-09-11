import { getMBDataFromArtistName } from "../services/musicbrainz";
import { fetchEventsFromSetlistfm } from "../clients/setlistfm";
import { Event, EventList } from "@/types/eventList";
import { SFMResponsePage, SFMEvent } from "@/types/setlistfm";
import { MBArtist } from "@/types/musicbrainz";
import { getDb } from "../mongodb";

export async function getEventsFromArtistName(artistName: string) {
  const mbArtist:MBArtist = await getMBDataFromArtistName(artistName);

  let page = 1;
  let sfmResponsePage:SFMResponsePage;

  const eventList:EventList = {
    artistName: mbArtist.name,
    events: []
  };

  // Get collection from MongoDB
  const db = await getDb();
  const eventListStore = db.collection("eventLists");

  // Check if entry is in database store first
  const findOptions = {
    projection: { _id: 0, artistName: 1, events: 1 },
  };

  const dbEventList = await eventListStore.findOne({ artistName: mbArtist.name }, findOptions);
  if (dbEventList)
    return dbEventList;

  // Otherwise, create eventlist from SetlistFM API
  do
  {
    sfmResponsePage = await fetchEventsFromSetlistfm(mbArtist.id, page);

    // Map events
    eventList.events.push(...sfmResponsePage.setlist.map(mapSFMEventToEvent));

    page++;
  } while (sfmResponsePage.itemsPerPage * (page - 1) < sfmResponsePage.total);

  // Add to database store
  eventListStore.insertOne(eventList);
  
  return eventList;
}

function mapSFMEventToEvent(event:SFMEvent) : Event {
  return {
    date: event.eventDate,
    venue: {
      name: event.venue.name,
      city: event.venue.city.name,
      country: event.venue.city.country.name,
      latitude: event.venue.city.coords.lat,
      longitude: event.venue.city.coords.long,
    }
  };
}