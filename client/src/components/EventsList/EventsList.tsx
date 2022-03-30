// @ts-nocheck
import React from 'react';
import EventCard from '../EventCard/EventCard';
import type { LuEvent } from '../../utilities/types/Event';
import './EventsList.css';

interface eventProps {
  filteredEvents : LuEvent[];
}

function EventList({ filteredEvents } : eventProps) {
  const eventCardList = filteredEvents.map((thisEvent) => (<EventCard cardEvent={thisEvent} />));

  return (
    <div className="evl__container">
      { eventCardList }
    </div>
  );
}

export default EventList;
