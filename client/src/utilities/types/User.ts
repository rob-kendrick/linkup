import type { LuEvent } from './Event';
import type { Rating } from './Rating';

export interface User {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
  profilePicture: string;
  eventsCreated: [LuEvent];
  eventsParticipating: [LuEvent];
  friends: [User];
  rating: [Rating];
  password: string;
}
