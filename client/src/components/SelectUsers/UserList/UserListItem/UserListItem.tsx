/* eslint-disable react/require-default-props */
// Imports
import { current } from '@reduxjs/toolkit';
import React from 'react';
import ProfilePicture from '../../../ProfilePicture/ProfilePicture';
// CSS
import './UserListItem.css';

// Defining props
type props = {
  user: any
  stagingArray?: any
  setStagingArray?: any
};

function UserListItem({
  user, stagingArray, setStagingArray,
}: props) {
  // This code toggles users in and out of staging array when checkbox is clicked

  const updateParticipants = () => {
    // Person to remove is an array. If the length > 0, we filter that person out
    const personToRemove = stagingArray.filter((item: number) => item === user.id_user);
    // Removing 'personToRemove' via filtering
    if (personToRemove.length === 0) {
      setStagingArray((previous: any) => [...previous, user.id_user]);
    } else {
      // if there is no person to remove, add them to staging array
      setStagingArray(stagingArray.filter((item: number) => item !== user.id_user));
    }
  };

  // rendering out the users, profile pics, and checkboxes
  return (
    <div className="user-list-item-container">
      <div className="user-list-item">
        <div className="uli_profile-pic-container">

          <ProfilePicture userPicture={user.profile_picture} userName={user.first_name} size={50} alt={user.first_name} />
        </div>

        <p className="user-list-item-name">{user.first_name}</p>

      </div>
      {/* Conditional rendering for checkboxes */}
      <div>
        {stagingArray && <input className="user-list-item-checkbox" type="checkbox" onChange={updateParticipants} name="user-list-item-checkbox" />}
      </div>

    </div>
  );
}

export default UserListItem;
