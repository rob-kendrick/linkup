import type { UserBasicData } from './UserBasicData';

export interface LuEvent {
  id_event: number
  title: string
  description: string
  creator: UserBasicData
  creator_id: number
  min_participants?: number | null
  max_participants?: number | null
  participants: UserBasicData[]
  participants_to_add?: number[]
  date: string
  date_created?:string
  date_updated?:string
  lat: number
  lng: number
  street: string,
  postcode: string
  city: string
  country : string
  tags: string[]
}
