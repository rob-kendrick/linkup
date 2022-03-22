import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import userApi from '../utilities/api/user.api';
import userActions from '../utilities/redux/actions/user.actions';
import eventApi from '../utilities/api/event.api';
import eventActions from '../utilities/redux/actions/event.actions';
import { RootState } from '../utilities/redux/store';

const data = require('../mock-data/new.user.json');

function Test() {
  // const stateRedux = useSelector((state: RootState) => state);
  // console.log('STATE REDUX', stateRedux);

  const allUsers = useSelector((state: RootState) => state.userReducer.allUsers);

  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    userApi.getAllUsers().then((response) => {
      console.log('get all users');
      dispatch(userActions.getUsersAction(response));
    }).catch();
    // userApi.postUser(data).then((response) => {
    //   dispatch(userActions.postUserByIdAction(response));
    // }).catch();

    // userApi.getUserById(11).then((response) => {
    //   dispatch(userActions.getUserByIdAction(response));
    // }).catch();
  }, []);

  useEffect(() => {
    eventApi.getAllEvents().then((response) => {
      dispatch(eventActions.getEventsAction(response));
    }).catch();

    // eventApi.deleteEvent(10).then((response) => {
    //   dispatch(eventActions.getEventByIdAction(response));
    // }).catch();
    // }, []);

    // const postUserHandler = () => {
    //   console.log('post user');
    //   userApi.postUser(data).then((response) => {
    //     dispatch(userActions.postUserByIdAction(response));
    //   }).catch();
  }, []);

  const deleteUserHandler = () => {
    eventApi.deleteEvent(10).then((response) => {
      dispatch(eventActions.deleteEventAction(response));
    }).catch();
  };

  return (
    <div>
      Users:
      stateRedux
      {allUsers.map((user) => <p>{user.firstName}</p>)}
      <button onClick={deleteUserHandler}>Add user</button>
    </div>
  );
}

export default Test;