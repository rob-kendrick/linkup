import type { Event } from './Event';
import type { Rating } from './Rating';

export interface User {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  bio: string;
  profile_picture: string;
  events_created: [Event];
  events_participating: [Event];
  friends: [User];
  rating: [Rating];
}
