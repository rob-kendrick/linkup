import React from 'react';
import Avatar from 'boring-avatars';
import './ProfilePicture.css';

interface UserPicture {
  userPicture? : string;
  userName?: string;
  size?: number;
  alt?: string;
}

function ProfilePicture({
  userPicture, size, alt, userName,
} : UserPicture) {
  return (
    <div className="pp__container">
      {userPicture
        ? (
          <img
            className="pp__picture"
            src={userPicture}
            alt={alt}
            style={{ width: `${size}px`, height: `${size}px` }}
          />
        )
        : (
          <Avatar
            size={size}
            name={userName || String(Math.random())}
            variant="marble"
            colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
          />
        )}
    </div>
  );
}

export default ProfilePicture;
