import React from 'react';
import select from '../assets/HiSearch.svg';
import calendar from '../assets/BiCalendarHeart.svg';
import chat from '../assets/HiChat.svg';
import profile from '../assets/FaUser.svg';

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-item">
        <div><img src={select} alt="search icon" className="navbar-icon" /></div>
        <div>Browse</div>
      </div>

      <div className="navbar-item">
        <div><img src={calendar} alt="search icon" className="navbar-icon" /></div>
        <div>My Activities</div>
      </div>

      <div className="navbar-item">
        <div><img src={chat} alt="search icon" className="navbar-icon" /></div>
        <div>Chat</div>
      </div>

      <div className="navbar-item">
        <div><img src={profile} alt="search icon" className="navbar-icon" /></div>
        <div>Profile</div>
      </div>

    </div>
  );
}

export default NavBar;
