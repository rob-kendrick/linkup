import React from 'react';
import eventMockData from '../../Mock/event.mock.json';
import EventCard from '../EventCard/EventCard';

const eventData: any[] = eventMockData;

function EventList() {
  return (
    <div className="event-list-delete">
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
