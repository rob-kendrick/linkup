import React, { useState } from 'react';
import moment from 'moment';
import BrowseEventsMenu from './BrowseEventsMenu/BrowseEventsMenu';
import EventList from '../../components/EventsList/EventsList';
import MapLarge from '../../components/MapLarge/MapLarge';
import mockEventsData from '../../utilities/mocks/db-data/events-db-data.json';
import type { LuEvent } from '../../utilities/types/Event';

function BrowseEvents() {
  const [toggle, setToggle] = useState(true);

  const [events, setEvents] = useState(mockEventsData);
  const [filteredEvents, setFilteredEvents] = useState(events);

  console.log(filteredEvents, 'Filtered events from BrowseEv')
  const toggleOnClick = () => {
    if (toggle === true) {
      setToggle(false);
    } else setToggle(true);
  };

  const printDate = (date:Date) => {
    const eventsByDate : any = [];
    events.data.forEach(((event) => {
      if (moment(new Date(event.date)).format('MMMM Do YYYY') === moment(date).format('MMMM Do YYYY')) {
        eventsByDate.push(event);
      }
      setFilteredEvents(eventsByDate);
    }));
  };

  return (
    <div className="browse-events-container">
      {/* Temporary CSS on the global CSS file */}
      <div className="browse-events-filter-menu">
        {/* <BrowseEventsMenu toggleOnClick={toggleOnClick} printDate={printDate} /> */}
      </div>

      <div className="browse-events-map">
        <MapLarge events={filteredEvents.data} />
        {/* {
          toggle
            ? (<MapLarge events={filteredEvents} />)
            : (<EventList events={filteredEvents} />)
        } */}

      </div>

      {/* <div className="navbar">
        <NavBar />
      </div> */}
    </div>
  );
}

export default BrowseEvents;
