import React from 'react';
import UserListItem from './UserListItem/UserListItem';
import userMockData from '../../../Mock/user.mock.json';
import ButtonLarge from '../../Form/ButtonLarge/ButtonLarge';

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
      <ButtonLarge />
    </div>
  );
}

export default UserList;
