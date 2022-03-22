import { Dispatch } from 'redux';
import { User } from '../../types/User';
import { MultipleUsersAction, SingleUserAction } from '../../types/User.actionTypes';

const userActions = {
  getUsersAction: (payload: User[]) => (dispatch: Dispatch<MultipleUsersAction>) => {
    dispatch({ type: 'GET_USERS', payload });
  },
  getUserByIdAction: (payload: User) => (dispatch: Dispatch<SingleUserAction>) => {
    dispatch({ type: 'GET_USER_BY_ID', payload });
  },
};

export default userActions;
