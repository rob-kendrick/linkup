import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import ButtonLarge from '../../../components/Form/ButtonLarge/ButtonLarge';
import InputFieldSimple from '../../../components/Form/InputFieldSimple/InputFieldSimple';
import InputFieldTitle from '../../../components/Form/InputFieldTitle/InputFieldTitle';
import InputPhoto from '../../../components/Form/InputPhoto/InputPhoto';
import HeaderReturn from '../../../components/HeaderReturn/HeaderReturn';

interface User {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  bio: string;
  profile_picture: string;
}

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      profile_picture: '',
    },
  });

  const onSubmit = (data: User) => {
    console.log(data);
  };

  return (
    <div>
      <HeaderReturn />
      <h3>SignUp</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputPhoto />
        <InputFieldTitle
          type="text"
          label="First Name"
          errorMessage={errors.first_name?.message}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('first_name', { required: 'This field is required' })}
        />
        <InputFieldTitle
          type="text"
          label="Last Name"
          errorMessage={errors.last_name?.message}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('last_name', { required: 'This field is required' })}
        />

        <InputFieldTitle
          type="text"
          label="Email"
          errorMessage={errors.email?.message}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('email', { required: 'This field is required' })}
        />

        <InputFieldTitle
          type="password"
          label="Password"
          errorMessage={errors.password?.message}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('password', {
            required: 'This field is required',
            minLength: {
              value: 8,
              message: 'Min length is 8',
            },
          })}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default SignUp;
