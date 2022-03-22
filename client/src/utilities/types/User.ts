import type { LU_Event } from './LU_Event';
import type { Rating } from './Rating';

export interface User {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  bio: string;
  profile_picture: string;
  events_created: [LU_Event];
  events_participating: [LU_Event];
  friends: [User];
  rating: [Rating];
}
