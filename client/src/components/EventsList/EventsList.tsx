// @ts-nocheck
import React, { useState, useContext } from 'react';
import EventCard from '../EventCard/EventCard';
import type { LuEvent } from '../../utilities/types/Event';
import './EventsList.css';
import browseEventsContext from '../../contexts/browse-events.context';

function EventList() {
  const {
    filteredEvents,
  } = useContext(browseEventsContext);

  const eventCardList = () => {
    filteredEvents.map((thisEvent) => (<EventCard event={thisEvent} />));
  };

  return (
    <div>
      { eventCardList }
    </div>

  );
}

export default EventList;
