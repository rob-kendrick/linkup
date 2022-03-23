import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar-delete">
      <div><h3>Navbar</h3></div>
      <Link to="/events">Browse Activities</Link>
      {' '}
      |
      {' '}
      <Link to="/myevents">My Activities</Link>
      {' '}
      |
      {' '}
      <Link to="/chatlist">Chat</Link>
      {' '}
      |
      {' '}
      <Link to="/profile">Profile</Link>
    </div>
  );
}

export default Navbar;
