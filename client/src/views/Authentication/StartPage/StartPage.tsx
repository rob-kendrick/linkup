import React from 'react';
import { Link } from 'react-router-dom';
import ButtonLarge from '../../../components/Form/ButtonLarge/ButtonLarge';
import Logo from '../../../components/Logo/Logo';
import './StartPage.css';

function StartPage() {
  return (
    <div className="sp__container">
      <div className="sp__logo">
        <Logo />
      </div>
      <div className="sp__text">
        <h1>Let's get started</h1>
        <text>You are just a few steps away from joining the LinkUp community.</text>
      </div>
      <div className="sp__signup">
        <Link to="/register">
          <ButtonLarge
            type="submit"
            value="Sign up with E-Mail"
            style="fill"
          />
        </Link>
        <ButtonLarge
          type="submit"
          value="Sign up with Google"
          style="black"
        />
      </div>
      <text className="sp__text">
        Already have an account?
      </text>
      <Link to="/login">
        <ButtonLarge
          type="submit"
          value="Log in"
          style="black"
        />
      </Link>
    </div>
  );
}

export default StartPage;
