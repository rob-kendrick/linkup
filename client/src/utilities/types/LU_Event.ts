import type { User } from './User';
import type { Tag } from './Tag';

export interface LU_Event {
  event_id: string | number;
  title: string;
  date_time: string;
  description: string;
  creator: string;
  participants: string[];
  lat: string | number;
  lng: string | number;
  min_participants: string | number;
  max_participants: string | number;
  tags: string[];
  address: string;
}
