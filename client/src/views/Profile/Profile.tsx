import React from 'react';
import { Link } from 'react-router-dom';
import MenuList from '../../components/MenuList/MenuList';

function Profile() {
  return (
    <div>
      <MenuList />
      <h3>Profile</h3>
      {/* the following links should all be replaced with the 'MenuList' Component */}
      <Link to="/profile/friends">Friends</Link>
      <br />
      <Link to="/profile/profileedit">Edit Profile</Link>
      <br />
      <Link to="/profile/changepassword">Change Password</Link>
      <br />
      {/* 'Logout' should trigger /src/components/PopUp component */}
      <Link to="/profile">Logout</Link>
    </div>
  );
}

export default Profile;
