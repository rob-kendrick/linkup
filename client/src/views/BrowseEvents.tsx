import React, { useState } from 'react';
import moment from 'moment';
import mockEventsData from '../mock-data/events';
import * as userData from '../mock-data/users';
import Map from '../components/Map';
import FilterMenu from '../components/FilterMenu';
import NavBar from '../components/NavBar';
import EventList from '../components/EventList';

function BrowseEvents() {
  const [toggle, setToggle] = useState(true);

  const [events, setEvents] = useState(mockEventsData);
  const [filteredEvents, setFilteredEvents] = useState(events);

  const toggleOnClick = () => {
    if (toggle === true) {
      setToggle(false);
    } else setToggle(true);
  };

  const printDate = (date:Date) => {
    const eventsByDate : any = [];
    events.forEach(((event) => {
      if (moment(new Date(event.date_time)).format('MMMM Do YYYY') === moment(date).format('MMMM Do YYYY')) {
        eventsByDate.push(event);
        console.log('/-----> Event match found!');
      }
      // console.log(event.date_time);
      // console.log(date);
      // console.log(eventsByDate);
      console.log('/-----> No match found on events...');
      setFilteredEvents(eventsByDate);
    }));
  };

  return (
    <div className="browse-events-container">
      {/* Temporary CSS on the global CSS file */}
      <div className="browse-events-filter-menu">
        <FilterMenu toggleOnClick={toggleOnClick} printDate={printDate} />
      </div>

      <div className="browse-events-map">
        {
          toggle
            ? (<Map events={filteredEvents} />)
            : (<EventList events={filteredEvents} />)
        }

      </div>

      <div className="navbar">
        <NavBar />
      </div>
    </div>
  );
}

export default BrowseEvents;
