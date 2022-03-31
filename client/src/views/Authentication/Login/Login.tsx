import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import ButtonLarge from '../../../components/Form/ButtonLarge/ButtonLarge';
import HeaderReturn from '../../../components/HeaderReturn/HeaderReturn';
import { InputTextField } from '../../../components/Form/InputTextField/InputTextField';
import { User } from '../../../utilities/types/User';
import authApi from '../../../utilities/api/auth.api';
import './Login.css';

function Login() {
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // if (watch('email')) setWrongCredentialsErr(false);

  const onSubmit = async (formData: User) => {
    const response = await authApi.login(formData);
    if (response.ok === false) {
      if (response.status === 400) setErrorMessage('Wrong e-mail or password');
      if (response.status === 404) setErrorMessage('404 not found');
      if (response.status === 500) setErrorMessage('500 server error');
      if (response.status === 503) setErrorMessage('503 service unavailable');
    } else if (response.data.accessToken) {
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('id_user', response.data.user.id_user);
      navigate('/events');
      // props.setIsAuthenticated(true);
    }
  };
  return (
    <div className="login__main-container">
      <HeaderReturn
        text="Log in"
      />

      <div className="login__container">
        <form
          className="login__form-container"
          onSubmit={handleSubmit(onSubmit)}
        >

          <div className="login__input-container">
            <InputTextField
              type="text"
              label="Email"
              errorMessage={errors.email?.message}
              {...register('email', {
                required: 'This field is required',
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'Please enter valid E-mail',
                },
                onChange: () => {
                  setErrorMessage('');
                },
              })}
            />
            <InputTextField
              type="password"
              label="Password"
              errorMessage={errors.password?.message}
              {...register('password', {
                required: 'This field is required',
                onChange: () => {
                  setErrorMessage('');
                },
              })}
            />
          </div>

          <div className="login__button">
            <ButtonLarge
              type="submit"
              value="Log in"
              style="fill"
            />
            {(errorMessage !== '')
          && <text>{errorMessage}</text>}
          </div>

        </form>
      </div>
    </div>
  );
}

export default Login;
