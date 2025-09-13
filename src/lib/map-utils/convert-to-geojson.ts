import type { FeatureCollection } from 'geojson';
import { EventList } from "@/types/eventList";

export function convertToGeoJson(eventList : EventList) : FeatureCollection {
    return {
        type: 'FeatureCollection',
        features: eventList.events.map((event) => {
                return {
                    type: "Feature",
                    geometry: {
                        coordinates: [
                            event.venue.longitude,
                            event.venue.latitude
                        ],
                        type: "Point"
                    },
                    properties: []
                }
            }
        )
    }
}