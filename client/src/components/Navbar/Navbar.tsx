import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as HiSearch } from '../../assets/HiSearch.svg';
import { ReactComponent as BiCalendarHeart } from '../../assets/BiCalendarHeart.svg';
import { ReactComponent as HiChat } from '../../assets/HiChat.svg';
import { ReactComponent as FaUser } from '../../assets/FaUser.svg';
import './Navbar.css';

function Navbar() {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className="n__container">
      <Link to="/events">
        <div className={`n__button ${(pathname === '/events') && 'n__button--select'}`}>
          <div className="n__icon-container">
            {/* <HiSearch id="clip" className="n__icon" /> */}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 20 20"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <clipPath id="clip">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </clipPath>
            </svg>
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
