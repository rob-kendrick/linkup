import React from 'react';
import EventsList from '../../components/EventsList/EventsList';
import HeaderMain from '../../components/HeaderMain/HeaderMain';
import MyEventsMenu from './MyEventsMenu/MyEventsMenu';

function MyEvents() {
  return (
    <div>
      <HeaderMain
        title="My Events"
      />
      <MyEventsMenu />
      {/* <EventsList /> */}
    </div>
  );
}

export default MyEvents;
