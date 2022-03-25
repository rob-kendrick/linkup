import React from 'react';
import { Link } from 'react-router-dom';
import select from '../../assets/HiSearch.svg';
import calendar from '../../assets/BiCalendarHeart.svg';
import chat from '../../assets/HiChat.svg';
import profile from '../../assets/FaUser.svg';
import './Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/events">
        <div className="navbar-item">
          <div><img src={select} alt="search icon" className="navbar-icon" /></div>
          <div>Browse</div>
        </div>
      </Link>

      {' '}
      |

      <Link to="/myevents">
        <div className="navbar-item">
          <div><img src={calendar} alt="search icon" className="navbar-icon" /></div>
          <div>My Activities</div>
        </div>
      </Link>

      {' '}
      |

      <Link to="/chatlist">
        <div className="navbar-item">
          <div><img src={chat} alt="search icon" className="navbar-icon" /></div>
          <div>Chat</div>
        </div>
      </Link>

      {' '}
      |

      <Link to="/profile">
        <div className="navbar-item">
          <div><img src={profile} alt="search icon" className="navbar-icon" /></div>
          <div>Profile</div>
        </div>
      </Link>

    </div>
  );
}

export default Navbar;
