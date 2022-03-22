// import {
// Reducer,
// ReducerState
// } from 'react';
// import { PayloadAction } from '@reduxjs/toolkit';
import {
  // MultipleUsersAction,
  UsersState,
  UserActions,
} from '../../types/User.actionTypes';
// import { User } from '../../types/User';
// import {RootReducer}

const initialState: UsersState = {
  currentUser: null,
  allUsers: [],
};

// type ReturnTypeTry = {

// }

// eslint-disable-next-line default-param-last
// const userReducer:Reducer<UsersState, UserActions> = (
// eslint-disable-next-line default-param-last
const userReducer = (
  // eslint-disable-next-line default-param-last
  state = initialState,
  action: UserActions,
): UsersState => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        allUsers: action.payload,
      } as UsersState;
    case 'GET_USER_BY_ID':
      return {
        ...state,
        currentUser: action.payload,
      } as UsersState;
    case 'POST_USER':
      return {
        currentUser: action.payload,
        allUsers: [...state.allUsers, action.payload],
      } as UsersState;
    default:
      return state as UsersState;
  }
};

export default userReducer;
