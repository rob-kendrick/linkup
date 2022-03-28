import type { EventBasicData } from './EventBasicData';

export interface User {
  id_user: number;
  first_name: string;
  last_name: string;
  bio: string;
  email: string;
  profile_picture: string;
  events_created: EventBasicData[];
  events_participating: EventBasicData[]
  password: string;
  date_created: Date;
}
