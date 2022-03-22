import React from 'react';
import list from '../assets/MdFormatListBulleted.svg';
import map from '../assets/FaRegMap.svg';
import filter from '../assets/BiFilter.svg';

function FilterMenu() {
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
            <button><img src={list} alt="list icon" className="button-icon" /> List</button>
          </div>

          <div>
            <button><img src={map} alt="list icon" className="button-icon"/>Map</button>
          </div>

        </div>

        <div>
          <button><img src={filter} alt="list icon" className="button-icon"/>Filters</button>
        </div>

      </div>

    </div>
  );
}

export default FilterMenu;
