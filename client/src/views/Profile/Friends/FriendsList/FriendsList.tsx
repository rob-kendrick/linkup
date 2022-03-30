// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FriendsListItem from './FriendsListItem/FriendsListItem';
import userMockData from '../../../../utilities/mocks/db-data/users-db-data.json';
import userApi from '../../../../utilities/api/user.api';
import { InputTextField } from '../../../../components/Form/InputTextField/InputTextField';
import { User } from '../../../../utilities/types/User';
import './FriendsList.css';
import HeaderReturn from '../../../../components/HeaderReturn/HeaderReturn';
import UserListItem from '../../../../components/SelectUsers/UserList/UserListItem/UserListItem';

function FriendsList() {
  const [userData, setUserData] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState< string | null>(null);
  const [finalSearchResult, setFinalSearchResult] = useState<User[]>([]);

  useEffect(() => {
    // Grabbing user id from local storage
    const uid = localStorage.getItem('id_user');
    setCurrentUser(uid);
    // Calling api to populate userData and final search result. We map from search result later
    userApi.getAllUsers().then((res) => {
      setUserData(res.data);
      setFinalSearchResult(res.data);
    });
  }, []);

  const search = (input) => {
    const results = [];
    for (let i = 1; i < userData.length; i += 1) {
      if (userData[i].first_name.toLowerCase().includes(input.toLowerCase())) {
        results.push(userData[i]);
      }
    }
    setFinalSearchResult(results);
  };

  const handleInput = (e: any) => {
    const userInput = e.target.value;
    if (userInput === '') return setFinalSearchResult(userData);
    return search(userInput);
  };

  return (
    <div className="fl__friends-list-container">
      <HeaderReturn text="Friends" />
      <div className="fl__search-container">
        <InputTextField onChange={handleInput} type="text" label="Search..." />
      </div>

      <div className="fl__results-container">
        {finalSearchResult.map((user) => {
          if (user.id_user === Number(currentUser)) return null;
          return (
            <Link to={`/users/${user.id_user}`}>
              <UserListItem
                key={user.id_user}
                user={user}
              />
            </Link>
          );
        })}
      </div>
    </div>

  );
}

export default FriendsList;
