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
  );
  const [filteredEvents, setFilteredEvents] = useState<LuEvent[]>([]);

  const userId = Number(localStorage.getItem('id_user'));

  useEffect(() => {
    filterHosted();
  }, []);

  const filterHosted = () => {
    const userHosted = events.filter((e) => (userId === e.creator_id));
    setFilteredEvents(userHosted);
    console.log(userHosted, 'User Hosting event');
  };

  const filterAttending = () => {
    const userAttending = events.filter((event) => event.participants.some((user) => user.id_user === userId));
    setFilteredEvents(userAttending);
    console.log(userAttending, 'User Attending event');
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
