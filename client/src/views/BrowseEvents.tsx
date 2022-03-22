import React, { useState } from 'react';
import mockEventsData from '../mock-data/events';
import * as userData from '../mock-data/users';
import Map from '../components/Map';
import FilterMenu from '../components/FilterMenu';
import NavBar from '../components/NavBar';
import EventList from '../components/EventList';

function BrowseEvents() {
  const [toggle, setToggle] = useState(true);

  const events = mockEventsData;
  const users = userData;

  const toggleOnClick = () => {
    console.log('click');
    if (toggle === true) {
      setToggle(false);
    } else setToggle(true);
  };

  return (
    <div className="browse-events-container">
      {/* Temporary CSS on the global CSS file */}
      <div className="browse-events-filter-menu">
        <FilterMenu toggleOnClick={toggleOnClick} />
      </div>

      <div className="browse-events-map">
        {
          toggle
            ? (<Map events={events} />)
            : (<EventList events={events} />)
        }

      </div>

      <div className="navbar">
        <NavBar />
      </div>
    </div>
  );
}

export default BrowseEvents;
