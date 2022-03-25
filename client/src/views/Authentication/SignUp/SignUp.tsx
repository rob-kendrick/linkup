import React from 'react';
import { useForm } from 'react-hook-form';
import { InputTextField, InputTextArea } from '../../../components/Form/InputTextField/InputTextField';
import InputPhoto from '../../../components/Form/InputPhoto/InputPhoto';
import HeaderReturn from '../../../components/HeaderReturn/HeaderReturn';

interface User {
  profile_picture: string;
  first_name: string;
  last_name: string;
  email: string;
  bio: string;
  password: string;
}

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: {
      profile_picture: '',
      first_name: '',
      last_name: '',
      bio: '',
      email: '',
      password: '',
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
        <InputTextField
          type="text"
          label="First Name"
          errorMessage={errors.first_name?.message}
          {...register('first_name', { required: 'This field is required' })}
        />
        <InputTextField
          type="text"
          label="Last Name"
          errorMessage={errors.last_name?.message}
          {...register('last_name', { required: 'This field is required' })}
        />

        <InputTextArea
          type="text"
          label="Bio"
          errorMessage={errors.bio?.message}
          rows={3}
          {...register('bio', { required: 'This field is required' })}
        />

        <InputTextField
          type="text"
          label="Email"
          errorMessage={errors.email?.message}
          {...register('email', { required: 'This field is required' })}
        />

        <InputTextField
          type="password"
          label="Password"
          errorMessage={errors.password?.message}
          {...register('password', {
            required: 'This field is required',
            minLength: {
              value: 8,
              message: 'Minimun length is 8 characters',
            },
          })}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default SignUp;
