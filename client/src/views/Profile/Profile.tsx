import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Profile() {
  return (
    <div>
      <h3>Profile</h3>
      <Link to="/friends">Friends</Link>
      <br />
      <Link to="/editprofile">Edit Profile</Link>
      <br />
      <Link to="/changepassword">Change Password</Link>
      <Outlet />
    </div>
  );
}

export default Profile;
