import React from 'react';
import ButtonLarge from '../../../components/Form/ButtonLarge/ButtonLarge';
import { InputTextField } from '../../../components/Form/InputTextField/InputTextField';
import './login.css';

function Login() {
  return (
    <div>
      <h3>Login</h3>
      <div className="login__container">
        <InputTextField />
        <InputTextField />
        <ButtonLarge />
      </div>
    </div>
  );
}

export default Login;
