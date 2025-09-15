import { GetServerSideProps } from "next";
import { getEventsFromArtistName } from "@/lib/services/setlistfm";
import { EventList } from "@/types/eventList"
import { useState } from "react";
import EventMap from "@/components/EventMap";
import SearchBar from "@/components/SearchBar";
import LoadingBar from "@/components/LoadingBar";
import Prediction from "@/components/Prediction";

export default function Artist({ eventList }: { eventList: EventList}) {
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState("");
  
  async function handleSearch(city: string) {
    setIsLoading(true);

    const response = await fetch(`/api/predict/${encodeURIComponent(city)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventList)
    })

    if(response.ok) {
      const responseJson: { prediction: string } = await response.json();
      setPrediction(responseJson.prediction);
    }
      
    setIsLoading(false);
  }

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

      {/* <div className="flex justify-center">
        <span className="bg-orange-100 text-orange-600 text-sm me-2 px-2.5 py-0.5 mt-2 rounded-sm">AI</span>
      </div> */}

      <p className="lg:text-xl my-8">
        Predict when {eventList.artistName} might return to your city.
      </p> 

      <SearchBar handleSearch={handleSearch} placeholder="London, UK"/>

      {isLoading && <LoadingBar />}

      {prediction && <Prediction prediction={prediction}/>}

      <div className="mb-10"></div>
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