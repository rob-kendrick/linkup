// @ts-nocheck
import React, { useState, useContext } from 'react';
import EventCard from '../EventCard/EventCard';
import type { LuEvent } from '../../utilities/types/Event';
import './EventsList.css';

interface eventProps {
  filteredEvents : LuEvent[];
}

function EventList({ filteredEvents } : eventProps) {
  const eventCardList = filteredEvents.map((thisEvent) => (<EventCard event={thisEvent} />));

  return (
    <div className="evl__main-container">
      <div className="evl__inner-container">
        { eventCardList }
      </div>
    </div>

  );
}

export default EventList;
