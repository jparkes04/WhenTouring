export interface MBResponse {
  count: number,
  artists: MBArtist[]
}

export interface MBArtist {
  id: string,
  name: string,
}