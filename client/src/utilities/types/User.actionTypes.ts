import { User } from './User';

export type CurrentUsersState = {
  user: User;
};

export type UsersState = {
  users: User[];
};

export type SingleUserAction = {
  type: string;
  payload: User;
};

export type MultipleUsersAction = {
  type: string;
  payload: User[];
};
