import React from 'react';
import MenuList from '../../components/MenuList/MenuList';
import FaUsers from '../../assets/FaUsers.svg';
import FaUser from '../../assets/FaUser.svg';
import HiLockClosed from '../../assets/HiLockClosed.svg';
import ImExit from '../../assets/ImExit.svg';

const profileListData = [
  {
    link: 'profile/friends',
    text: 'Friends',
    svgLogo: FaUsers,
  },
  {
    link: '/profile/profileedit',
    text: 'Edit Profile',
    svgLogo: FaUser,
  },
  {
    link: '/profile/changepassword',
    text: 'Change Password',
    svgLogo: HiLockClosed,
  },
  {
    link: '/profile',
    text: 'Logout',
    svgLogo: ImExit,
  },
];

function Profile() {
  return (
    <div>
      <h3>Profile</h3>
      <MenuList data={profileListData} />
    </div>
  );
}

export default Profile;
