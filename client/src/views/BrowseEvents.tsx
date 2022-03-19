import React from 'react';
import * as eventsData from '../mock-data/events.json';
import * as userData from '../mock-data/users.json';
import Map from '../components/Map';

function BrowseEvents() {
  const events = eventsData;
  const users = userData;

  console.log(events[0].address);

  return (
    <div>
      <h1>This is the BrowseEvents View</h1>
      BrowseEvents
      <Map />
    </div>
  );
}

export default BrowseEvents;
