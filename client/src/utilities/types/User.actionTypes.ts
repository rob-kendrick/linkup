import { User } from './User';

export type CurrentUsersState = {
  user: User;
};

export type UsersState = {
    allUsers: User[],
    currentUser:User | null
};

export type SingleUserAction = {
  type: string;
  payload: User;
};

export type MultipleUsersAction = {
  type: string;
  payload: User[];
};

export type UserActions = SingleUserAction | MultipleUsersAction;
