import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as HiSearch } from '../../assets/HiSearch.svg';
import { ReactComponent as BiCalendarHeart } from '../../assets/BiCalendarHeart.svg';
import { ReactComponent as HiChat } from '../../assets/HiChat.svg';
import { ReactComponent as FaUser } from '../../assets/FaUser.svg';
import './Navbar.css';

function Navbar() {
  const { pathname } = useLocation();
  return (
    <div className="n__container">

      <Link to="/events">
        <button
          type="button"
          className={`n__button ${pathname === '/events' && 'n__button-active'}`}
        >
          <div className="n__icon-container">
            <HiSearch className="n__icon" />
          </div>
          <p>Browse</p>
        </button>
      </Link>

      <Link to="/myevents">
        <button
          type="button"
          className={`n__button ${pathname === '/myevents' && 'n__button-active'}`}
        >
          <div className="n__icon-container">
            <BiCalendarHeart className="n__icon" />
          </div>
          <p>My Activities</p>
        </button>
      </Link>

      <Link to="/chatlist">
        <button
          type="button"
          className={`n__button ${pathname === '/chatlist' && 'n__button-active'}`}
        >
          <div className="n__icon-container">
            <HiChat className="n__icon" />
          </div>
          <p>Chat</p>
        </button>
      </Link>

      <Link to="/profile">
        <button
          type="button"
          className={`n__button ${pathname === '/profile' && 'n__button-active'}`}
        >
          <div className="n__icon-container">
            <FaUser className="n__icon" />
          </div>
          <p>Profile</p>
        </button>
      </Link>

    </div>
  );
}

export default Navbar;
