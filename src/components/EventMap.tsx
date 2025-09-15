import Map, { Source, Layer } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { clusterLayer, clusterCountLayer, unclusteredPointLayer } from "@/lib/map-utils/layers";
import { convertToGeoJson } from "@/lib/map-utils/convert-to-geojson";
import { EventList } from '@/types/eventList';

export default function EventMap( { eventList } : { eventList : EventList } ) {
  const key = process.env.MAPTILER_KEY!
  return (
      <div className="my-8 h-120 md:h-150">
        <div className="absolute
        left-0 right-0 h-120
        md:left-1/12 md:right-1/12 md:h-150
        lg:left-1/10 lg:right-1/10
        xl:left-1/7 xl:right-1/7 
        2xl:left-1/5 2xl:right-1/5
        ">
          <Map
            initialViewState={{
              longitude: 0,
              latitude: 25,
              zoom: 1
            }}
            mapStyle={`https://api.maptiler.com/maps/streets-v2/style.json?key=${key}`}
              // https://docs.maptiler.com/guides/maps-apis/maps-platform/how-to-protect-your-map-key/         
          >
            <Source
              id="events"
              type="geojson"
              data={convertToGeoJson(eventList)}
              cluster={true}
              clusterMaxZoom={20}
              clusterRadius={50}
            >
              <Layer {...clusterLayer} />
              <Layer {...clusterCountLayer} />
              <Layer {...unclusteredPointLayer} />
            </Source>
          </Map>

        </div>   
      </div>

      
  )
}