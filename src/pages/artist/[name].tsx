import { GetServerSideProps } from "next";
import { getEventsFromArtistName } from "@/lib/services/setlistfm";
import { EventList } from "@/types/eventList"

export default function Artist({ eventList }: { eventList: EventList}) {
  return (
    <main>
      <h2 className="text-xl lg:text-2xl">
        Event History for {eventList.artistName}
      </h2>

      <ul>
        {eventList.events.map((event, i) => (
          <li key={i}>{`${event.venue.name}, ${event.venue.city}, ${event.venue.country}`}</li>
        ))}
      </ul>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = (async (context) => {
  const artistName = decodeURIComponent(context.params?.name as string);
  const eventList:EventList = await getEventsFromArtistName(artistName);

  return { props: { eventList: eventList } };
})