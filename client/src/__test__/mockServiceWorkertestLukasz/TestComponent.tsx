import React, { useEffect, useState } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import userApi from '../../utilities/api/user.api';
import userActions from '../../utilities/redux/actions/user.actions';
import { RootState } from '../../utilities/redux/store';
// eslint-disable-next-line import/no-extraneous-dependencies
// import '@testing-library/jest-dom';
import { User } from '../../utilities/types/User';

function Test() {
  const [users, setUsers] = useState<User[]>();
  // const stateRedux = useSelector((state: RootState) => state);
  // console.log('STATE REDUX', stateRedux);

  const allUsers = useSelector((state: RootState) => state.userReducer.allUsers);

  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    userApi.getAllUsers().then((response) => {
      setUsers(response.data);
      dispatch(userActions.getUsersAction(response.data));
    }).catch();
    // userApi.postUser(data).then((response) => {
    //   dispatch(userActions.postUserByIdAction(response));
    // }).catch();

    // userApi.getUserById(11).then((response) => {
    //   dispatch(userActions.getUserByIdAction(response));
    // }).catch();
  }, []);

  // useEffect(() => {
  //   eventApi.getAllEvents().then((response) => {
  //     dispatch(eventActions.getEventsAction(response));
  //   }).catch();

  // eventApi.deleteEvent(10).then((response) => {
  //   dispatch(eventActions.getEventByIdAction(response));
  // }).catch();
  // }, []);

  // const postUserHandler = () => {
  //   console.log('post user');
  //   userApi.postUser(data).then((response) => {
  //     dispatch(userActions.postUserByIdAction(response));
  //   }).catch();
  // }, []);

  // const deleteUserHandler = () => {
  //   eventApi.deleteEvent(10).then((response) => {
  //     dispatch(eventActions.deleteEventAction(response));
  //   }).catch();
  // };

  return (
    <div>
      Users:
      {allUsers.map((user) => <p>{user.first_name}</p>)}
      {/* {users && users.map((user) => <p>{user.first_name}</p>)} */}
      {/* <button onClick={deleteUserHandler}>Add user</button> */}
    </div>
  );
}

export default Test;
