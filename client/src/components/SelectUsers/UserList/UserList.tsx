import React from 'react';
import UserListItem from './UserListItem/UserListItem';
import userMockData from '../../../utilities/mocks/db-data/users-db-data.json';

const userData: any[] = userMockData.data;

function UserList() {
  return (
    <div>
      <h3>UserList</h3>
      {userData.map((user) => (
        <UserListItem
          key={user.id_user}
          user={user}
        />
      ))}
    </div>
  );
}

export default UserList;
