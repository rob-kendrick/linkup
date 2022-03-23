import React from 'react';
import BrowseEventsMenu from './BrowseEventsMenu/BrowseEventsMenu';
import EventList from '../../components/EventsList/EventsList';

function BrowseEvents() {
  return (
    <div>
      <h3>BrowseEvents</h3>
      <BrowseEventsMenu />
      <EventList />
    </div>
  );
}

export default BrowseEvents;
