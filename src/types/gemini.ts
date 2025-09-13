export interface GeminiContext {
    artistName: string,
    subjectCity: string,
    events: GeminiEvent[]
}

export interface GeminiEvent {
    date: Date,
    city: string,
    country: string
}