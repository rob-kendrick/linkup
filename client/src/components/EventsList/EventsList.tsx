import React, { useState } from 'react';
import EventCard from '../EventCard/EventCard';
import type { LuEvent } from '../../utilities/types/Event';
import './EventsList.css'

interface eventProps {
  eventList : LuEvent[];
}

function EventList({ eventList }: eventProps) {
  const [events, setEvents] = useState(eventList);

  console.log(events, 'EventList component events');

  return (
    <div className="event-list-container">
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
