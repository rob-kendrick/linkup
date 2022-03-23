import React from 'react';
import SearchField from '../Form/SearchField/SearchField';
import UserList from './UserList/UserList';

function SelectUsers() {
  return (
    <div>
      <h3>SelectUsers</h3>
      <SearchField />
      <UserList />
    </div>
  );
}

export default SelectUsers;
