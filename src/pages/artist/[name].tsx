import { GetServerSideProps } from "next";
import { getEventsFromArtistName } from "@/lib/services/setlistfm";
import { EventList } from "@/types/eventList"
import EventMap from "@/components/EventMap";


export default function Artist({ eventList }: { eventList: EventList}) {
  return (
    <main>
      <h2 className="text-xl lg:text-3xl text-center">
        {eventList.artistName}
      </h2>
      <h2 className="text-md lg:text-lg text-center">
        Concert History Map
      </h2>

      <EventMap eventList={eventList} />

      <h2 className="text-xl lg:text-3xl text-center">
        Predictions
      </h2>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = (async (context) => {
  const artistName = decodeURIComponent(context.params?.name as string);

  try {
    const eventList: EventList = await getEventsFromArtistName(artistName);
    return { props: { eventList } };
    
  } catch (error) {
    let destination = "/";

    if (error instanceof Error) {
      if (error.message.includes("SetlistFM error: 429")) {
        destination = "/error429";
      } else if (error.message.includes("No MBID found")) {
        destination = "/error404";
      }
    }

    return {
      redirect: {
        destination,
        permanent: false,
      },
    };
  }
})