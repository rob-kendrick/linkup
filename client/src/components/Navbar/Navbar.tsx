<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
=======
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
>>>>>>> 4233f27b3c06cc6211fbe1bfb0c483f6b35587c7
import { ReactComponent as HiSearch } from '../../assets/HiSearch.svg';
import { ReactComponent as BiCalendarHeart } from '../../assets/BiCalendarHeart.svg';
import { ReactComponent as HiChat } from '../../assets/HiChat.svg';
import { ReactComponent as FaUser } from '../../assets/FaUser.svg';
import './Navbar.css';

function Navbar() {
  const [currentPage, setCurrentPage] = useState(0);
  const handleClick = (el:number) => {
    setCurrentPage(el);
  };
  return (
    <div className="n__container">

      <Link to="/events">
        <button
          type="button"
          className={`n__button ${currentPage === 1 ? 'n__button-active' : ''}`}
          onClick={() => handleClick(1)}
        >
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
        </button>
      </Link>

      <Link to="/myevents">
        <button
          type="button"
          className={`n__button ${currentPage === 2 ? 'n__button-active' : ''}`}
          onClick={() => handleClick(2)}
        >
          <div className="n__icon-container">
            <BiCalendarHeart className="n__icon" />
          </div>
          <div>My Activities</div>
        </button>
      </Link>

      <Link to="/chatlist">
        <button
          type="button"
          className={`n__button ${currentPage === 3 ? 'n__button-active' : ''}`}
          onClick={() => handleClick(3)}
        >
          <div className="n__icon-container">
            <HiChat className="n__icon" />
          </div>
          <div>Chat</div>
        </button>
      </Link>

      <Link to="/profile">
        <button
          type="button"
          className={`n__button ${currentPage === 4 ? 'n__button-active' : ''}`}
          onClick={() => handleClick(4)}
        >
          <div className="n__icon-container">
            <FaUser className="n__icon n__icon-small" />
          </div>
          <div>Profile</div>
        </button>
      </Link>

    </div>
  );
}

export default Navbar;
