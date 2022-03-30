// @ts-nocheck

import React, {
  useEffect, useState, MouseEventHandler,
} from 'react';
import { useSelector, RootState } from 'react-redux';
import BrowseEventsMenu from './BrowseEventsMenu/BrowseEventsMenu';
import EventsList from '../../components/EventsList/EventsList';
import MapLarge from '../../components/MapLarge/MapLarge';
import './BrowseEvents.css';
import { LuEvent } from '../../utilities/types/Event';

// helper functions
// return true if two dates are on the same day
const checkDatesSameDay = (date1:string, date2:string) => {
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
// returns common elements of 2 arrays
const getArraysIntersection = (a1, a2) => a1.filter((el) => a2.includes(el));
// return true if date is in the future
const checDateInFuture = (date: string) => (new Date(date) >= new Date());

function BrowseEvents() {
  const events = useSelector(
    (state: RootState) => state.eventReducer.allEvents,
  );

  const [mapView, setMapView] = useState(true);
  const [allEvents, setAllEvents] = useState<LuEvent[]>([]);
  const [dateFilter, setDateFilter] = useState<LuEvent[]>([]);
  const [titleFilter, setTitleFilter] = useState<LuEvent[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<LuEvent[]>([]);

  // on first load, filter events from redux store removing past events
  useEffect(() => {
    const fe = events
      .filter((el) => checDateInFuture(el.date))
      .sort((a, b) => new Date(a.date) - new Date(b.date));
    setAllEvents(fe);
    setDateFilter(fe);
    setTitleFilter(fe);
  }, []);

  // list/map toggle
  const toggleMapList:MouseEventHandler = () => {
    setMapView(!mapView);
  };

  // filter events by date
  const filterByDate = (thisDate:string|null) => {
    if (thisDate === null) return setDateFilter(allEvents);
    const newEvents = allEvents.filter(
      (event) => {
        if (checkDatesSameDay(event.date, thisDate)) return event;
        return null;
      },
    );
    return setDateFilter(newEvents);
  };

  // filter events by title
  const filterByTitle = (input) => {
    if (!input) return setTitleFilter(allEvents);
    const newEvents = allEvents.filter(
      (event) => {
        if (event.title.toLowerCase().includes(input)) return event;
        return null;
      },
    );
    return setTitleFilter(newEvents);
  };

  // merge all filtered lists everytime a filter is applied
  useEffect(() => {
    const tempFilter = getArraysIntersection(dateFilter, titleFilter);
    setFilteredEvents(tempFilter);
  }, [dateFilter, titleFilter]);

  return (
    <div className="be__container">
      <BrowseEventsMenu props={{
        mapView,
        filterByTitle,
        toggleMapList,
        filterByDate,
      }}
      />
      <div className="be__container-inner">
        {mapView && (<MapLarge filteredEvents={filteredEvents} />)}
        {!mapView && (<EventsList filteredEvents={filteredEvents} />)}
      </div>
    </div>

  );
}

export default BrowseEvents;
