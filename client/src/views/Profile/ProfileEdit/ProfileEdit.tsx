import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { InputTextField, InputTextArea } from '../../../components/Form/InputTextField/InputTextField';
import InputPhoto from '../../../components/Form/InputPhoto/InputPhoto';
import HeaderReturn from '../../../components/HeaderReturn/HeaderReturn';
import './ProfileEdit.css';
import { User } from '../../../utilities/types/User';

function ProfileEdit() {
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
  const navigate = useNavigate();
  return (
    <div>
      <HeaderReturn
        text="Edit Profile"
      />
      <div className="pe__container">
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
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default ProfileEdit;
