import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { InputTextField } from '../../../components/Form/InputTextField/InputTextField';
import HeaderReturn from '../../../components/HeaderReturn/HeaderReturn';
import ButtonLarge from '../../../components/Form/ButtonLarge/ButtonLarge';
import './ChangePassword.css';

interface PasswordChange {
  password_old: string,
  password_new: string,
  password_confirm: string,
}

function ChangePassword() {
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordChange>({
    defaultValues: {
      password_old: '',
      password_new: '',
      password_confirm: '',
    },
  });

  const onSubmit = (data: PasswordChange) => {
    console.log(data);
  };

  return (
    <div>
      <HeaderReturn
        text="Change Password"
      />
      <div className="cp__container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputTextField
            type="password"
            label="Current password"
            errorMessage={errors.password_old?.message}
            {...register('password_old', {
              required: 'This field is required',
            })}
          />
          <br />
          <br />
          <InputTextField
            type="password"
            label="New password"
            errorMessage={errors.password_new?.message}
            {...register('password_new', {
              required: 'This field is required',
              minLength: {
                value: 8,
                message: 'Minimun length 8 characters',
              },
            })}
          />
          <InputTextField
            type="password"
            label="Confirm new password"
            errorMessage={errors.password_confirm?.message}
            {...register('password_confirm', {
              required: 'This field is required',
              minLength: {
                value: 8,
                message: 'Minimun length 8 characters',
              },
            })}
          />
          <ButtonLarge
            type="submit"
            value="Save Changes"
            style="fill"
          />
          {(errorMessage !== '')
          && <text>{errorMessage}</text>}
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
