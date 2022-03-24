import React from 'react';
import FriendsListItem from './FriendsListItem/FriendsListItem';
import userMockData from '../../../../mock-data/user.mock.delete.json';

const userData: any[] = userMockData;

function FriendsList() {
  return (
    <div>
      <h3>FriendsList</h3>
      {userData.map((user) => (
        <FriendsListItem
          key={user.id}
          user={user}
        />
      ))}
    </div>
  );
}

export default FriendsList;
