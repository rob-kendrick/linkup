// @ts-nocheck

import React, {
  useEffect, useMemo, useState, MouseEventHandler, ChangeEvent,
} from 'react';
import { ChangeHandler } from 'react-hook-form';

import browseEventsContext from '../../contexts/browse-events.context';
import BrowseEventsMenu from './BrowseEventsMenu/BrowseEventsMenu';
import EventsList from '../../components/EventsList/EventsList';
import MapLarge from '../../components/MapLarge/MapLarge';
import mockEventsData from '../../utilities/mocks/db-data/events-db-data.json';
import './BrowseEvents.css';
import { LuEvent } from '../../utilities/types/Event';

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

const getArraysIntersection = (a1, a2) => a1.filter((el) => a2.includes(el));

function BrowseEvents() {
  const [mapView, setMapView] = useState(true);
  const [allEvents, setAllEvents] = useState<LuEvent[]|null>(mockEventsData.data);
  const [dateFilter, setDateFilter] = useState<LuEvent[]>(mockEventsData.data);
  const [titleFilter, setTitleFilter] = useState<LuEvent[]>(mockEventsData.data);

  const [filteredEvents, setFilteredEvents] = useState<LuEvent[]>([]);

  // merge all filtered lists
  useEffect(() => {
    const tempFilter = getArraysIntersection(dateFilter, titleFilter);
    setFilteredEvents(tempFilter);
  }, [dateFilter, titleFilter]);


  // for testing purposes
  useEffect(() => {
  }, [filteredEvents]);

  // list/map toggle
  const toggleMapList:MouseEventHandler = () => {
    setMapView(!mapView);
  };

  // filter events by date
  const filterByDate = (thisDate:string|null) => {
    if (thisDate === null) return setDateFilter(allEvents);
    const newEvents = allEvents.filter(
      (event) => {
        if (dayMatch(event.date, thisDate)) return event;
        return null;
      },
    );
    return setDateFilter(newEvents);
  };

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
