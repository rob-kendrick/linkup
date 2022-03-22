import React from 'react';

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

        <div>
          <button>List</button>
          <button>Map</button>
        </div>

        <div>
          <button>Filters</button>
        </div>

      </div>

    </div>
  );
}

export default FilterMenu;
