import React from 'react';
import UserListItem from './UserListItem/UserListItem';
import userMockData from '../../../utilities/mocks/db-data/users-db-data.json';
import './UserList.css';
import HeaderReturn from '../../HeaderReturn/HeaderReturn';

const userData: any[] = userMockData.data;

function UserList({ toggleParticipants }: any) {
  return (
    <div className="user-list-container">
      <HeaderReturn resetAvailability passedReturnFunction={toggleParticipants} />
      <p>UserList</p>
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
