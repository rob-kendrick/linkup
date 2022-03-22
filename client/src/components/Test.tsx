import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import userApi from '../utilities/api/user.api';
import userActions from '../utilities/redux/actions/user.actions';
import eventApi from '../utilities/api/event.api';
import eventActions from '../utilities/redux/actions/event.actions';

function Test() {
  const stateRedux = useSelector((state) => state);
  console.log('STATE REDUX', stateRedux);

  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    console.log('useEffect users');

    userApi.getAllUsers().then((response) => {
      dispatch(userActions.getUsersAction(response));
    }).catch();

    userApi.getUserById(11).then((response) => {
      dispatch(userActions.getUserByIdAction(response));
    }).catch();
  }, []);

  useEffect(() => {
    eventApi.getAllEvents().then((response) => {
      dispatch(eventActions.getEventsAction(response));
    }).catch();

    eventApi.getEventById(10).then((response) => {
      dispatch(eventActions.getEventByIdAction(response));
    }).catch();
  }, []);

  return (
    <div>
      Users:
      stateRedux
    </div>
  );
}

export default Test;
