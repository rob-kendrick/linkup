import React from 'react';
import EventsList from '../../components/EventsList/EventsList';
import MyEventsMenu from './MyEventsMenu/MyEventsMenu';

function MyEvents() {
  return (
    <div>
      <h3>MyEvents</h3>
      <MyEventsMenu />
      {/* <EventsList /> */}
    </div>
  );
}

export default MyEvents;
