// @ts-nocheck
import React, { useState } from 'react';
import UserListItem from './UserListItem/UserListItem';
import userMockData from '../../../utilities/mocks/db-data/users-db-data.json';
import './UserList.css';
import HeaderReturn from '../../HeaderReturn/HeaderReturn';
import { InputTextField } from '../../Form/InputTextField/InputTextField';

const userData: any[] = userMockData.data;

function UserList({ toggleParticipants }: any) {
  const [finalSearchResult, setFinalSearchResult] = useState(userData);

  const search = (input) => {
    const results = [];
    for (let i = 1; i < userData.length; i += 1) {
      if (userData[i].first_name.toLowerCase().includes(input.toLowerCase())) {
        results.push(userData[i]);
      }
    }
    setFinalSearchResult(results);
  };

  const handleInput = (e:any) => {
    const userInput = e.target.value;
    if (userInput === '') return setFinalSearchResult(userData);
    return search(userInput);
  };

  return (
    <div className="user-list-container">
      <HeaderReturn text="userList" resetAvailability passedReturnFunction={toggleParticipants} />
      <InputTextField onChange={handleInput} type="text" label="Search participants..." />
      <p>UserList</p>
      {finalSearchResult.map((user) => (
        <UserListItem
          key={user.id_user}
          user={user}
        />
      ))}
    </div>
  );
}

export default UserList;
