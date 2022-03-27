// @ts-nocheck
import React, { useState, useEffect } from 'react';
import EventsList from '../../components/EventsList/EventsList';
import HeaderMain from '../../components/HeaderMain/HeaderMain';
import MyEventsMenu from './MyEventsMenu/MyEventsMenu';
import mockEventsData from '../../utilities/mocks/db-data/events-db-data.json';
import LuEvent from '../../utilities/types/Event';
import './MyEvents.css';

// interface MyEvents {
//   myEvents : LuEvent[];
// }

function MyEvents() {
  const userId = 3;

  const [allEvents, setAllEvents] = useState<any[]>(mockEventsData.data);
  const [filteredEvents, setFilteredEvents] = useState<any[]>([]);

  useEffect(() => {
    setFilteredEvents(allEvents);
    filterHosted();
  }, []);

  const filterHosted = () => {
    const userHosted = allEvents.filter((event) => {
      if (userId === event.creator_id) {
        return event;
      }
    });
    setFilteredEvents(userHosted);
  };

  const filterAttending = () => {
    const userAttending = allEvents.filter((event) => {
      if (userId in event.participants && userId !== event.creator_id) {
        return event;
      }
    });
    setFilteredEvents(userAttending);
  };

  console.log(filteredEvents);

  return (
    <div className="mev__main-container">
      <HeaderMain
        title="My Events"
      />
      <MyEventsMenu
        filterHosted={filterHosted}
        filterAttending={filterAttending}
      />
      <EventsList filteredEvents={filteredEvents} />
    </div>
  );
}

export default MyEvents;
