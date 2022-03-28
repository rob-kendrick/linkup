import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toPng } from 'html-to-image';
import { InputTextField, InputTextArea } from '../../../components/Form/InputTextField/InputTextField';
import InputPhoto from '../../../components/Form/InputPhoto/InputPhoto';
import HeaderReturn from '../../../components/HeaderReturn/HeaderReturn';
import './SignUp.css';
import { User } from '../../../utilities/types/User';
import ButtonLarge from '../../../components/Form/ButtonLarge/ButtonLarge';
import authApi from '../../../utilities/api/auth.api';

function SignUp() {
  const [errorMessage, setErrorMessage] = useState('');
  const [avatarName, setAvatarName] = useState(String(Math.random()));
  const [imageUrl, setImageUrl] = useState('');
  const [avatarSvg, setAvatarSvg] = useState<HTMLElement | null>(null);
  // const [formData, setFormData] = useState<User | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(imageUrl);
  }, [imageUrl]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      profile_picture: '',
      bio: '',
    },
  });

  async function signUp(formData: User) {
    const userData = formData;
    userData.profile_picture = imageUrl;
    console.log(userData);
    const response = await authApi.register(userData);
    if (response.ok === false) {
      if (response.status === 400) setErrorMessage('Data validation failed on server');
      if (response.status === 404) setErrorMessage('404 not found');
      if (response.status === 409) setErrorMessage('E-Mail already taken');
      if (response.status === 500) setErrorMessage('500 server error');
      if (response.status === 503) setErrorMessage('503 service unavailable');
    } else if (response.data) {
      // navigate('/login');
    }
  }

  function uploadImage(formData: User, imageData: string) {
    const data = new FormData();
    data.append('file', imageData);
    data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET!);
    data.append('cloud_name', process.env.REACT_APP_CLOUDINARY_CLOUD_NAME!);
    fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`, {
      method: 'post',
      body: data,
    })
      .then((resp) => resp.json())
      .then((result) => {
        setImageUrl(result.url);
        signUp(formData);
      })
      .catch(() => setErrorMessage('Photo upload failed'));
  }

  // function convertSvg() {
  //   if (avatarSvg) {
  //     toPng(avatarSvg)
  //       .then((dataUrl) => {
  //         console.log(dataUrl);
  //         // uploadImage(dataUrl);
  //       })
  //       .catch((error) => {
  //         setErrorMessage('Image conversion failed');
  //         console.error(error);
  //       });
  //   }
  // }

  function onSubmit(formData: User) {
    // setFormData(formData);
    if (imageUrl === '') {
      console.log('its a svg');
      const svgSerial = new XMLSerializer().serializeToString(document.getElementsByTagName('svg')[1]);
      const svgBase64 = window.btoa(svgSerial);
      uploadImage(formData, `data:image/png;base64,${svgBase64}`);
    } else {
      console.log('its a real image');
      signUp(formData);
    }
  }

  return (
    <div>
      <HeaderReturn
        text="Signup with E-mail"
      />
      <div className="su__container">
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputPhoto
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            setErrorMessage={setErrorMessage}
            avatarName={avatarName}
            setAvatarSvg={setAvatarSvg}
          />
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
            {...register('last_name', {
              required: 'This field is required',
              onChange: () => {
                setErrorMessage('');
              },
            })}
          />

          <InputTextArea
            type="text"
            label="Bio"
            errorMessage={errors.bio?.message}
            rows={3}
            {...register('bio', {
              required: 'This field is required',
              onChange: () => {
                setErrorMessage('');
              },
            })}
          />

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
              minLength: {
                value: 8,
                message: 'Minimun length 8 characters',
              },
              onChange: () => {
                setErrorMessage('');
              },
            })}
          />
          <ButtonLarge
            type="submit"
            value="Sign up"
            style="fill"
          />
          {(errorMessage !== '')
          && <text>{errorMessage}</text>}
        </form>
      </div>
    </div>
  );
}

export default SignUp;
