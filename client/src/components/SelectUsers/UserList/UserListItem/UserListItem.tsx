import React from 'react';
import './UserListItem.css';

function UserListItem({ user }: {user:any}) {
  return (
    <div className="user-list-item-container">
      <div className="user-list-item">
        <div
          className="user-list-item-profile-picture"
          style={{ background: `url(${user.profile_picture})`, backgroundSize: 'cover' }}
        />
        <p className="user-list-item-name">{user.first_name}</p>
      </div>
      <input className="user-list-item-checkbox" type="checkbox" name="user-list-item-checkbox" />
      <div className="check" />
    </div>
  );
}

export default UserListItem;
