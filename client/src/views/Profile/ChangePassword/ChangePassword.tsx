import React from 'react';
import { useForm } from 'react-hook-form';
import { InputTextField } from '../../../components/Form/InputTextField/InputTextField';
import HeaderReturn from '../../../components/HeaderReturn/HeaderReturn';
import { User } from '../../../utilities/types/User';
import './ChangePassword.css';

function ChangePassword() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: {
      password: '',
    },
  });

  const onSubmit = (data: User) => {
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
            label="Password"
            errorMessage={errors.password?.message}
            {...register('password', {
              required: 'This field is required',
              minLength: {
                value: 8,
                message: 'Minimun length 8 characters',
              },
            })}
          />
          <InputTextField
            type="password"
            label="Confirm Password"
            errorMessage={errors.password?.message}
            {...register('password', {
              required: 'This field is required',
              minLength: {
                value: 8,
                message: 'Minimun length 8 characters',
              },
            })}
          />
          <input type="submit" />
          <input type="reset" />
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
