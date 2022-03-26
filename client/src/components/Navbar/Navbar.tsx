import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <HiSearch className="n__icon" />
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
