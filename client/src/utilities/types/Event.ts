import type { User } from './User';
import type { Tag } from './Tag';

export interface Event {
  event_id: number;
  date_time: string;
  title: string;
  description: string;
  creator: User;
  participants: [User];
  lat: number;
  lng: number;
  minParticipants: number;
  maxParticipants: number;
  tags: [Tag];
  address: string;
}
