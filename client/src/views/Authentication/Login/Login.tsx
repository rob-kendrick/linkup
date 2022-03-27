import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ButtonLarge from '../../../components/Form/ButtonLarge/ButtonLarge';
import HeaderReturn from '../../../components/HeaderReturn/HeaderReturn';
import { InputTextField } from '../../../components/Form/InputTextField/InputTextField';
import { User } from '../../../utilities/types/User';
import authApi from '../../../utilities/api/auth.api';
import './Login.css';

function Login() {
  const [wrongCredentialsErr, setWrongCredentialsErr] = useState(false);
  const [serverErr, setServerErr] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
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
    if (response.error) {
      if (response.message === 'Failed to fetch') setServerErr(true);
      else setWrongCredentialsErr(true);
    } else {
      localStorage.setItem('accessToken', response.data.accessToken);
    }
  };
  return (
    <div>
      <HeaderReturn
        text="Log in"
      />
      <div className="login__container">
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
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
                setWrongCredentialsErr(false);
                setServerErr(false);
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
                setWrongCredentialsErr(false);
                setServerErr(false);
              },
            })}
          />
          <ButtonLarge
            type="submit"
            value="Log in"
            style="fill"
          />
          {wrongCredentialsErr
          && <text>Wrong e-mail or password</text>}
          {serverErr
          && <text>Server error</text>}
        </form>
      </div>
    </div>
  );
}

export default Login;
