import React from 'react';
import { Link } from 'react-router-dom';

function EventCard({ event }: {event:any}) {
  return (
    <Link
      to={`/events/${event.id}`}
      key={event.id}
    >
      <div className="event-card-delete">
        <h3>Event</h3>
        {event.title}
      </div>
    </Link>
  );
}

export default EventCard;
