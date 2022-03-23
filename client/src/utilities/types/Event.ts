import type { UserBasicData } from './UserBasicData';

export interface LuEvent {
  id_event: number
  title: string
  description: string
  creator: number
  creator_id: number
  min_participants?: number
  max_participants?: number
  participants: UserBasicData[]
  date: Date
  date_created?:Date
  date_updated?:Date
  lat: number
  lng: number
  street_number: string
  street_name: string
  postcode: string
  city: string
  country : string
}
