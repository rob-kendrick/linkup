import React from 'react';
import { Link } from 'react-router-dom';
import ButtonLarge from '../../../components/Form/ButtonLarge/ButtonLarge';
import Logo from '../../../components/Logo/Logo';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="lp__container">
      <div className="lp__logo-container">
        <Logo />
      </div>
      <div className="lp__button-container">
        <Link
          className="lp__button"
          to="/start"
        >
          <ButtonLarge
            type="reset"
            value="Get started"
            style="fill"
          />
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
