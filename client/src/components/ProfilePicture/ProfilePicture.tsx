import React from 'react';
import './ProfilePicture.css';

interface UserPicture {
  userPicture?: string;
  size?: string;
  alt?: string;
}

function ProfilePicture({ userPicture, size, alt }: UserPicture) {
  return (
    <div className="pp__container">
      <img
        className="pp__picture"
        src={userPicture}
        alt={alt}
        style={{ width: `${size}` }}
      />
    </div>
  );
}

export default ProfilePicture;
