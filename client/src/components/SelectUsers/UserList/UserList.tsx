import React from 'react';
import UserListItem from './UserListItem/UserListItem';
import userMockData from '../../../Mock/user.mock.json';

const userData: any[] = userMockData;

function UserList() {
  return (
    <div>
      <h3>UserList</h3>
      {userData.map((user) => (
        <UserListItem
          key={user.id}
          user={user}
        />
      ))}
    </div>
  );
}

export default UserList;
