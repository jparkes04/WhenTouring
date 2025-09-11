import { getMBDataFromArtistName } from "../services/musicbrainz";
import { fetchEventsFromSetlistfm } from "../clients/setlistfm";
import { EventList } from "@/types/eventList";
import { SFMResponsePage, SFMEvent } from "@/types/setlistfm";
import { MBArtist } from "@/types/musicbrainz";

export async function getEventsFromArtistName(artistName: string) {
  const mbArtist:MBArtist = await getMBDataFromArtistName(artistName);

  let page = 1;
  let sfmResponsePage:SFMResponsePage;

  const eventList:EventList = {
    artistName: mbArtist.name,
    events: []
  };

  do
  {
    sfmResponsePage = await fetchEventsFromSetlistfm(mbArtist.id, page);

    // Map events
    eventList.events.push(... (
      sfmResponsePage.setlist.map((event:SFMEvent) => {
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
      })
    ));

    page++;
  } while (sfmResponsePage.itemsPerPage * (page - 1) < sfmResponsePage.total);

  return eventList;
}