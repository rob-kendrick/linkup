// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import EventsList from '../../components/EventsList/EventsList';
import MyEventsMenu from './MyEventsMenu/MyEventsMenu';
import LuEvent from '../../utilities/types/Event';
import './MyEvents.css';

interface MyEvents {
  myEvents : LuEvent[];
}

function MyEvents() {
  const events = useSelector(
    (state: RootState) => state.eventReducer.allEvents,
  )
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  const [filteredEvents, setFilteredEvents] = useState<LuEvent[]>([]);

  const userId = Number(localStorage.getItem('id_user'));

  useEffect(() => {
    filterHosted();
  }, []);

  const filterHosted = () => {
    const userHosted = events.filter((e) => (userId === e.creator_id));
    setFilteredEvents(userHosted);
  };

  const filterAttending = () => {
    const userAttending = events
      .filter((event) => event.participants
        .some((user) => user.id_user === userId));
    setFilteredEvents(userAttending);
  };

  return (
    <div className="be__container">
      <MyEventsMenu
        filterHosted={filterHosted}
        filterAttending={filterAttending}
      />
      <div className="be__container-inner" />
      <EventsList filteredEvents={filteredEvents} />
      <div />
    </div>
  );
}

export default MyEvents;
