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
  date: string
  date_created?:string
  date_updated?:string
  lat: number
  lng: number
  street_number: string
  street_name: string
  postcode: string
  city: string
  country : string
}
