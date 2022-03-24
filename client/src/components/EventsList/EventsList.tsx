import React from 'react';
import EventCard from '../EventCard/EventCard';
import eventMockData from '../../utilities/mocks/db-data/events-db-data.json';

const eventData: any[] = eventMockData.data;

function EventList() {
  return (
    <div className="list-container-delete">
      <h3>EventList</h3>
      {eventData.map((event) => (
        <EventCard
          key={event.id_event}
          event={event}
        />
      ))}
    </div>
  );
}

export default EventList;
