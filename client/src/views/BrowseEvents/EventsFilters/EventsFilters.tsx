import React from 'react';
import { Link } from 'react-router-dom';
import HeaderReturn from '../../../components/HeaderReturn/HeaderReturn';
import MenuList from '../../../components/MenuList/MenuList';

function EventsFilters() {
  return (
    <div>
      <HeaderReturn />
      <MenuList />
      <h3>EventsFilters</h3>
      {/* the following links should all be replaced with the 'MenuList' Component */}
      <Link to="/events/filters/title">Title</Link>
      <br />
      <Link to="/events/filters/tags">Tags</Link>
      <br />
      <Link to="/events/filters/hosts">Hosts</Link>
      <br />
      <Link to="/events/filters/participants">Participants</Link>
    </div>
  );
}

export default EventsFilters;
