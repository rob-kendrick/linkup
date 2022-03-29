import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { InputTextField, InputTextArea } from '../../../components/Form/InputTextField/InputTextField';
import InputPhoto from '../../../components/Form/InputPhoto/InputPhoto';
import HeaderReturn from '../../../components/HeaderReturn/HeaderReturn';
import { User } from '../../../utilities/types/User';
import ButtonLarge from '../../../components/Form/ButtonLarge/ButtonLarge';
import './ProfileEdit.css';
import userApi from '../../../utilities/api/user.api';

function ProfileEdit() {
  const [errorMessage, setErrorMessage] = useState('');
  const [avatarName, setAvatarName] = useState(String(Math.random()));
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const {
    register,
    reset,
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

  useEffect(() => {
    const currentUserId = Number(localStorage.getItem('id_user'));
    userApi.getUserById(currentUserId)
      .then((result) => {
        reset(result.data);
        setAvatarName(result.data.first_name);
        setImageUrl(result.data.profile_picture);
      });
  }, [reset]);

  const onSubmit = (data: User) => {
    console.log(data);
  };

  return (
    <div>
      <HeaderReturn
        text="Edit Profile"
      />
      <div className="pe__container">
        <form onSubmit={handleSubmit(onSubmit)}>
          {imageUrl
          && (
          <InputPhoto
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            setErrorMessage={setErrorMessage}
            avatarName={avatarName}
          />
          )}
          <InputTextField
            type="text"
            label="First Name"
            errorMessage={errors.first_name?.message}
            {...register('first_name', {
              required: 'This field is required',
              onChange: (e) => {
                setErrorMessage('');
                setAvatarName(e.target.value);
              },
            })}
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

export default ProfileEdit;
