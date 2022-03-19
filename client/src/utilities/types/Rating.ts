import type { User } from './User';

export interface Rating {
  rating_id: number;
  time_date: Date;
  description: string;
  ratee: User;
}
