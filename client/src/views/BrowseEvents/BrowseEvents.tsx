// @ts-nocheck

import React, {
  useEffect, useMemo, useState, MouseEventHandler,
} from 'react';
import browseEventsContext from '../../contexts/browse-events.context';
import BrowseEventsMenu from './BrowseEventsMenu/BrowseEventsMenu';
import EventsList from '../../components/EventsList/EventsList';
import MapLarge from '../../components/MapLarge/MapLarge';
import mockEventsData from '../../utilities/mocks/db-data/events-db-data.json';
import './BrowseEvents.css';

const dayMatch = (date1:string, date2:string) => {
  const date3 = new Date(date1);
  const date4 = new Date(date2);
  if (
    date3.getFullYear() === date4.getFullYear()
  && date3.getMonth() === date4.getMonth()
  && date3.getDate() === date4.getDate()
  ) {
    return true;
  }
  return false;
};

function BrowseEvents() {
  const [mapView, setMapView] = useState(true);
  const [allEvents, setAllEvents] = useState<any[]>(mockEventsData.data);
  const [dateFilter, setDateFilter] = useState<any[]>(mockEventsData.data);
  const [filteredEvents, setFilteredEvents] = useState<any[]>([]);

  // merge all filtered lists
  useEffect(() => {
    setFilteredEvents(dateFilter);
  }, [dateFilter]);

  // for testing purposes
  useEffect(() => {
  }, [filteredEvents]);

  // list/map toggle
  const toggleMapList:MouseEventHandler = () => {
    setMapView(!mapView);
  };

  // filter events by date
  const filterByDate = (thisDate) => {
    if (thisDate === null) return setDateFilter(allEvents);
    const newEvents = allEvents.filter(
      (event) => {
        if (dayMatch(event.date, thisDate)) return event;
      },
    );
    return setDateFilter(newEvents);
  };

  const context = useMemo(() => ({
    filteredEvents,
    mapView,
    filterByDate,
    toggleMapList,
  }), [
    filteredEvents,
    mapView,
  ]);

  return (
    <browseEventsContext.Provider value={context}>
      <div className="be__container">
        <BrowseEventsMenu />
        <div className="be__container-inner">
          {mapView && (<MapLarge filteredEvents={filteredEvents} />)}
          {!mapView && (<EventsList filteredEvents={filteredEvents} />)}
        </div>
      </div>
    </browseEventsContext.Provider>

  );
}

export default BrowseEvents;
