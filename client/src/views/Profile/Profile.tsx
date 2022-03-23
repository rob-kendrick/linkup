import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Profile() {
  return (
    <div>
      <h3>Profile</h3>
      <Link to="/profile/friends">Friends</Link>
      <br />
      <Link to="/profile/profileedit">Edit Profile</Link>
      <br />
      <Link to="/profile/changepassword">Change Password</Link>
      <Outlet />
    </div>
  );
}

export default Profile;
