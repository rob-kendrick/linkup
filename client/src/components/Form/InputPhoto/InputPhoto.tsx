import React from 'react';
import ProfilePicture from '../../ProfilePicture/ProfilePicture';
import './InputPhoto.css';

function InputPhoto({ imageUrl, setImageUrl }: {imageUrl:string, setImageUrl: Function}) {
  const uploadImage = (file: any) => {
    const image = file.target.files[0];
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'linkup');
    data.append('cloud_name', 'rafik2');
    fetch('  https://api.cloudinary.com/v1_1/rafik2/image/upload', {
      method: 'post',
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.url);
        setImageUrl(data.url);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="ip__container">
      <ProfilePicture
        userPicture={imageUrl}
        size="200px"
        alt="user profile"
      />
      <input
        className="ip__input"
        type="file"
        onChange={(file) => uploadImage(file)}
      />
    </div>
  );
}

export default InputPhoto;
