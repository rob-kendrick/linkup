import React from 'react';
import luLogo from '../../assets/luLogo.png';
import './Logo.css';

function Logo() {
  return (
    <div className="l__container">
      <img src={luLogo} alt="LinkUp Logo" />
    </div>
  );
}

export default Logo;
