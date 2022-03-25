import React, { useState } from 'react';
import moment from 'moment';
import BrowseEventsMenu from './BrowseEventsMenu/BrowseEventsMenu';
import EventsList from '../../components/EventsList/EventsList';
import MapLarge from '../../components/MapLarge/MapLarge';
import * as mockEventsData from '../../utilities/mocks/db-data/events-db-data.json';
import './BrowseEvents.css';

function BrowseEvents() {
  const [mapView, setMapView] = useState(true);
  const [listView, setListView] = useState(false);

  const [events, setEvents] = useState(mockEventsData);
  const [filteredEvents, setFilteredEvents] = useState(events);

  const mapClick = () => {
    setMapView(true);
    setListView(false);
  };

  const listClick = () => {
    setListView(true);
    setMapView(false);
  };

  const printDate = (date:Date) => {
    const eventsByDate : any = [];
    events.data.forEach(((event) => {
      console.log(date, '/////------> date');
      console.log(event.date);
      // if (moment(new Date(event.date)).format('MMMM Do YYYY') === moment(date).format('MMMM Do YYYY')) {
      //   eventsByDate.push(event);
      // }
    }));
    setFilteredEvents(eventsByDate);
  };

  return (
    <div>
      {/* Temporary CSS on the global CSS file */}
      <div className="be__filter-menu">
        <BrowseEventsMenu listClick={listClick} mapClick={mapClick} printDate={printDate} />
      </div>

      <div>
        {
          mapView
            ? (<MapLarge eventList={filteredEvents.data} />)
            : (<EventsList eventList={filteredEvents.data} />)
        }

      </div>
    </div>
  );
}

export default BrowseEvents;
