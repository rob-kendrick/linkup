import React, { useEffect } from 'react';
import Avatar from 'boring-avatars';
import ProfilePicture from '../../ProfilePicture/ProfilePicture';
import { ReactComponent as FaPlus } from '../../../assets/FaPlus.svg';
import './InputPhoto.css';

function InputPhoto({
  imageUrl, setImageUrl, setErrorMessage, avatarName,
}:
  { imageUrl: string,
    setImageUrl: Function,
    setErrorMessage: Function,
    avatarName: string,
  }) {
    
  const uploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const image = event.target.files[0];
      const data = new FormData();
      data.append('file', image);
      data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET!);
      data.append('cloud_name', process.env.REACT_APP_CLOUDINARY_CLOUD_NAME!);
      fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: 'post',
        body: data,
      })
        .then((resp) => resp.json())
        .then(async (result) => {
          if (result.url) await setImageUrl(result.url);
          else setErrorMessage('Photo upload failed');
        })
        .catch(() => setErrorMessage('Photo upload failed'));
    }
  };

  return (
    <div className="ip__container">
      <div
        className="ip__pp-container"
      >
        {(imageUrl)
          ? (
            <ProfilePicture
              userPicture={imageUrl}
              size="180px"
              alt="user profile"
            />
          )
          : (
            <Avatar
              size={180}
              name={avatarName}
              variant="marble"
              colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
            />
          )}
        <label
          className="ip__button"
          htmlFor="files"
        >
          <FaPlus />
          <input
            id="files"
            type="file"
            onChange={uploadImage}
            style={{ display: 'none' }}
          />
        </label>
      </div>
    </div>
  );
}

export default InputPhoto;
