import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchField from '../Form/SearchField/SearchField';
import UserList from './UserList/UserList';

function SelectUsers() {
  const navigate = useNavigate();
  return (
    <div>
      <h3>SelectUsers</h3>
      <SearchField />
      <UserList />
      {/* button should be 'ButtonLarge' component */}
      {/* button should trigger /src/components/Popup */}
      <button type="button" onClick={() => navigate(-1)}>Apply</button>
    </div>
  );
}

export default SelectUsers;
