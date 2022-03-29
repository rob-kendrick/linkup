import { current } from '@reduxjs/toolkit';
import React, { useState, useEffect } from 'react';
import './UserListItem.css';

type props = {
  user: any
  index: any
  userStagingArr: any
  setUserStagingArr: any
  array: any
};

function UserListItem({
  user, userStagingArr, setUserStagingArr, index, array,
}: props) {
  // This code kinda sucks, but it will update and remove user ids to staging array
  // when the user checks the checkboxes

  const updateParticipants = () => {
    // Person to remove is an array. If the length > 0, we filter that person out
    const personToRemove = userStagingArr.filter((item: number) => item === user.id_user);
    // Removing 'personToRemove' via filtering
    if (personToRemove.length === 0) {
      setUserStagingArr((previous: any) => [...previous, user.id_user]);
    } else {
      // if there is no person to remove, add them to staging array
      setUserStagingArr(userStagingArr.filter((item: number) => item !== user.id_user));
    }
  };

  // rendering out the users, profile pics, and checkboxes
  return (
    <div className="user-list-item-container">
      <div className="user-list-item">
        <div
          className="user-list-item-profile-picture"
          style={{ background: `url(${user.profile_picture})`, backgroundSize: 'cover' }}
        />
        <p className="user-list-item-name">{user.first_name}</p>

      </div>
      <input className="user-list-item-checkbox" type="checkbox" onChange={updateParticipants} name="user-list-item-checkbox" />
      <div className="check" />
    </div>
  );
}

export default UserListItem;
