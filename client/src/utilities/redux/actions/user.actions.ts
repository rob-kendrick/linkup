import { Dispatch } from 'redux';
import { User } from '../../types/User';
import { MultipleUsersAction } from '../../types/User.actionTypes';

const userActions = {
  getUsersAction: (payload: User[]) => (dispatch: Dispatch<MultipleUsersAction>) => {
    dispatch({ type: 'GET_USERS', payload });
  },
};

export default userActions;
