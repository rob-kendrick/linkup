import React from 'react';
import { Link } from 'react-router-dom';
import HeaderReturn from '../../../components/HeaderReturn/HeaderReturn';

function EventsFilters() {
  return (
    <div>
      <HeaderReturn />
      <h3>EventsFilters</h3>
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
