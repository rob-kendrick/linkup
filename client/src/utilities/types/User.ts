import type { Event } from './Event';
import type { Rating } from './Rating';

export interface User {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
  profilePicture: string;
  eventsCreated: [Event];
  eventsParticipating: [Event];
  friends: [User];
  rating: [Rating];
  password: string;
}
