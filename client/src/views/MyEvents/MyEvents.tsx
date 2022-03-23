import React from 'react';
import EventList from '../../components/EventList/EventList';
import MyEventsMenu from './MyEventsMenu/MyEventsMenu';

function MyEvents() {
  return (
    <div>
      <h3>MyEvents</h3>
      <MyEventsMenu />
      <EventList />
    </div>
  );
}

export default MyEvents;
