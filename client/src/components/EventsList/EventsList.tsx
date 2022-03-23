import React from 'react';
import EventCard from '../EventCard/EventCard';
import eventMockData from '../../Mock/event.mock.json';

const eventData: any[] = eventMockData;

function EventList() {
  return (
    <div className="list-container-delete">
      <h3>EventList</h3>
      {eventData.map((event) => (
        <EventCard
          key={event.id}
          event={event}
        />
      ))}
    </div>
  );
}

export default EventList;
