import React from 'react';
import SearchField from '../../../components/Form/SearchField/SearchField';
import HeaderReturn from '../../../components/HeaderReturn/HeaderReturn';
import FriendsList from './FriendsList/FriendsList';

function Friends() {
  return (
    <div>
      <HeaderReturn />
      <h3>Friends</h3>
      <SearchField />
      <FriendsList />
    </div>
  );
}

export default Friends;
