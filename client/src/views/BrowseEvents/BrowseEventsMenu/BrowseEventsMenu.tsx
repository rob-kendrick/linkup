import React from 'react';
import { useNavigate } from 'react-router-dom';
import DateList from './DateList/DateList';

function BrowseEventsMenu() {
  const navigate = useNavigate();
  return (
    <div>
      <h3>BrowseEventsMenu</h3>
      <DateList />
      <div className="flex-row-delete">
        <button type="button">List</button>
        {/* find large map component in '../../../components/MapLarge/MapLarge' */}
        <button type="button">Map</button>
        <button type="button" onClick={() => navigate('/events/filters')}>Filters</button>
      </div>
    </div>
  );
}

export default BrowseEventsMenu;
