import React from 'react';
import mockEventsData from '../mock-data/events';
import * as userData from '../mock-data/users.json';
import Map from '../components/Map';
import FilterMenu from '../components/FilterMenu';
import NavBar from '../components/NavBar';

function BrowseEvents() {
  const events = mockEventsData;
  const users = userData;

  return (
    <div className="browse-events-container">
      {/* Temporary CSS on the global CSS file */}
      <div className="browse-events-filter-menu">
        <FilterMenu />
      </div>

      <div className="browse-events-map">
        <Map events={events} />
      </div>

      <div className="navbar">
        <NavBar />
      </div>
    </div>
  );
}

export default BrowseEvents;
