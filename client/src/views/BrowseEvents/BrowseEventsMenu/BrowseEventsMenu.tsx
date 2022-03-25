import React, { useState, useEffect, MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import list from '../../../assets/MdFormatListBulleted.svg';
import map from '../../../assets/FaRegMap.svg';
import filter from '../../../assets/BiFilter.svg';
import './BrowseEventsMenu.css';
import HeaderMain from '../../../components/HeaderMain/HeaderMain';

interface toogleInt {
  mapClick: MouseEventHandler;
  listClick: MouseEventHandler;
  printDate : Function;
}

function BrowseEventsMenu({ listClick, mapClick, printDate } : toogleInt) {
  const navigate = useNavigate();
  const [dates, setDates] = useState<Date[]>([]);

  useEffect(() => {
    const dateArr = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i <= 31; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dateArr.push(date);
    }
    setDates(dateArr);
  }, []);

  return (
    <div className="filter-menu-container">
      <div className="filter-menu-calendar">
        <HeaderMain
          title="Browse Events"
        />
      </div>
      <div className="filter-menu-calendar">
        {dates.map((date) => (
          <button type="button" className="date-picker-selector" key={date.toString()} onClick={() => printDate(date)}>
            <div>
              <p className="date-picker-details">{moment(date).format('ddd')}</p>
              <p className="date-picker-details">{moment(date).format('DD')}</p>
            </div>
          </button>
        ))}

      </div>

      <div className="filter-menu-button-container">

        <div className="filter-menu-button-left-section">
          <div>
            <button className="small-button" type="button" onClick={listClick}>
              <img src={list} alt="list icon" className="button-icon" />
              {' '}
              List
            </button>
          </div>

          <div>
            <button className="small-button" type="button" onClick={mapClick}>
              <img src={map} alt="list icon" className="button-icon" />
              Map
            </button>
          </div>

        </div>

        <div>
          <button className="small-button" type="button" onClick={() => navigate('/events/filters')}>
            <img src={filter} alt="list icon" className="button-icon" />
            Filters
          </button>
        </div>

      </div>

    </div>
  );
}

export default BrowseEventsMenu;
