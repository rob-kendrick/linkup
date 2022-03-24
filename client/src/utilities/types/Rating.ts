import type { User } from './User';

export interface Rating {
  ratingId: number;
  timeDate: Date;
  description: string;
  ratee: User;
}
