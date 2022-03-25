import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HiSearch } from '../../assets/HiSearch.svg';
import { ReactComponent as BiCalendarHeart } from '../../assets/BiCalendarHeart.svg';
import { ReactComponent as HiChat } from '../../assets/HiChat.svg';
import { ReactComponent as FaUser } from '../../assets/FaUser.svg';
import './Navbar.css';

function Navbar() {
  return (
    <div className="n__container">
      <Link to="/events">
        <div className="n__button">
          <div className="n__icon-container">
            <HiSearch className="n__icon" />
          </div>
          <div>Browse</div>
        </div>
      </Link>
      <Link to="/myevents">
        <div className="n__button">
          <div className="n__icon-container">
            <BiCalendarHeart className="n__icon" />
          </div>
          <div>My Activities</div>
        </div>
      </Link>
      <Link to="/chatlist">
        <div className="n__button">
          <div className="n__icon-container">
            <HiChat className="n__icon" />
          </div>
          <div>Chat</div>
        </div>
      </Link>
      <Link to="/profile">
        <div className="n__button">
          <div className="n__icon-container">
            <FaUser className="n__icon n__icon-small" />
          </div>
          <div>Profile</div>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
