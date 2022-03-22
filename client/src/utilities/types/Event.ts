import type { User } from './User';
import type { Tag } from './Tag';

export interface LuEvent {
  eventId: number;
  date: string;
  title: string;
  description: string;
  creator: User;
  participants: [User];
  location: [number, number];
  tags: [Tag];
  minParticipants: number;
  maxParticipants: number;
  address: string;
}
