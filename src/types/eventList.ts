export interface EventList {
    artistName: string,
    events: Event[]
}

export interface Event {
    date: Date,
    venue: Venue
}

export interface Venue {
    name: string,
    city: string,
    country: string,
    latitude: number,
    longitude: number
}