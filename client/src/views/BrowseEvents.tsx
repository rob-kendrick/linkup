import React from 'react';
import * as eventsData from '../mock-data/events.json';
import * as userData from '../mock-data/users.json';

function BrowseEvents() {
  const events = eventsData;
  const users = userData;

  console.log(events[0].address);

  return (
    <div>BrowseEvents</div>
  );
}

export default BrowseEvents;
