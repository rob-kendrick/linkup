import React, { useState, useEffect } from 'react';
import list from '../assets/MdFormatListBulleted.svg';
import map from '../assets/FaRegMap.svg';
import filter from '../assets/BiFilter.svg';

interface toogleInt {
  toggleOnClick: () => void;
}

function FilterMenu({ toggleOnClick } : toogleInt) {
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

  console.log(dates, '/////------> the dates');

  return (
    <div className="filter-menu-container">
      <div className="filter-menu-calendar">
        <h3>Browse Activities</h3>
      </div>
      <div className="filter-menu-calendar">

        <h1>Calendar date picker</h1>
      </div>

      <div className="filter-menu-button-container">

        <div className="filter-menu-button-left-section">
          <div>
            <button type="button" onClick={toggleOnClick}>
              <img src={list} alt="list icon" className="button-icon" />
              {' '}
              List
            </button>
          </div>

          <div>
            <button type="button" onClick={toggleOnClick}>
              <img src={map} alt="list icon" className="button-icon" />
              Map
            </button>
          </div>

        </div>

        <div>
          <button type="button">
            <img src={filter} alt="list icon" className="button-icon" />
            Filters
          </button>
        </div>

      </div>

    </div>
  );
}

export default FilterMenu;
