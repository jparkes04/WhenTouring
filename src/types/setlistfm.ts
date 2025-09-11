export interface SFMEvent {
  eventDate: Date,
  artist: { name: string },
  venue: {
    name: string,
    city: { 
      name:string, 
      coords: {
        lat:number,
        long:number
      },
      country: { name:string } 
    },
  }
}

export interface SFMResponsePage {
  itemsPerPage: number,
  total: number,
  setlist: SFMEvent[]
}