import React from 'react';
import FriendsListItem from './FriendsListItem/FriendsListItem';
import userMockData from '../../../../utilities/mocks/db-data/users-db-data.json';

const userData: any[] = userMockData.data;

function FriendsList() {
  return (
    <div>
      <h3>FriendsList</h3>
      {userData.map((user) => (
        <FriendsListItem
          key={user.id_user}
          user={user}
        />
      ))}
    </div>
  );
}

export default FriendsList;
