import React from 'react';
import EventCard from '../EventCard/EventCard';
import type { LuEvent } from '../../utilities/types/Event';

interface eventProps {
  events : LuEvent[];
}

function EventList({ events }: eventProps) {
  console.log(events, 'EventsList / events');
  return (
    <div className="list-container-delete">
      <h3>EventList</h3>
      {events.map((event) => (
        <EventCard
          key={event.id_event}
          event={event}
        />
      ))}
    </div>
  );
}

export default EventList;
