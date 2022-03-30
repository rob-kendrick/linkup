import React from 'react';
import { useParams } from 'react-router-dom';
import HeaderReturn from '../../../../components/HeaderReturn/HeaderReturn';
import ProfilePicture from '../../../../components/ProfilePicture/ProfilePicture';

function UserDetails() {
  const params = useParams();
  return (
    <div>
      <HeaderReturn />
      <h3>UserDetails</h3>
      <div>
        User Id:
        {' '}
        {params.userid}
        <ProfilePicture
          userPicture="empty"
          userName="empty"
          alt="empty"
          size={30}
        />
      </div>
    </div>
  );
}

export default UserDetails;
