// @ts-nocheck
import React, { useState, useEffect } from 'react';
import UserListItem from './UserListItem/UserListItem';
import userMockData from '../../../utilities/mocks/db-data/users-db-data.json';
import './UserList.css';
import HeaderReturn from '../../HeaderReturn/HeaderReturn';
import ButtonLarge from '../../Form/ButtonLarge/ButtonLarge';
import { InputTextField } from '../../Form/InputTextField/InputTextField';
import userApi from '../../../utilities/api/user.api';

type props ={
  toggleParticipants: any
  setParticipantsToAdd: any
}

function UserList({ toggleParticipants, setParticipantsToAdd }: props) {
  const [userStagingArr, setUserStagingArr] = useState([]); // for adding participants >>> useRef
  const [userData, setUserData] = useState([]);
  const [finalSearchResult, setFinalSearchResult] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

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

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  useEffect(() => {
    console.log(' : : : STAGING AREA : : : ', userStagingArr);
  }, [userStagingArr]);

  // function for searching userdata and setting state
  const search = (input) => {
    const results = [];
    for (let i = 1; i < userData.length; i += 1) {
      if (userData[i].first_name.toLowerCase().includes(input.toLowerCase())) {
        results.push(userData[i]);
      }
    }
    setFinalSearchResult(results);
  };

  // handling search input
  const handleInput = (e:any) => {
    const userInput = e.target.value;
    if (userInput === '') return setFinalSearchResult(userData);
    // searching...
    return search(userInput);
  };

  const addParticipants = () => {
    // the user ids are stored as strings in staging area
    // so we parse them into ints for for the parent state
    const tempArr = [];
    for (let i = 0; i < userStagingArr.length; i += 1) {
      tempArr.push(userStagingArr[i]);
    }
    setParticipantsToAdd(tempArr);
    toggleParticipants();
  };

  return (

    <div className="user-list-container">
      <HeaderReturn text="Add Participants" resetAvailability passedReturnFunction={toggleParticipants} />
      <div className="ul-main-content">

        <div className="ul-search-container">
          <InputTextField onChange={handleInput} type="text" label="Search..." />
        </div>

        {/* rendering the search results */}
        <div className="ul-result-container">
          {finalSearchResult.map((user, index, array) => {
          // If the user is the same as the current user, remove them from the list
            if (user.id_user === Number(currentUser)) return null;
            // rendering out list of users
            return (
              <UserListItem
                index={index}
                key={user.id_user}
                user={user}
                stagingArray={userStagingArr}
                setStagingArray={setUserStagingArr}
                array={array}
              />
            );
          })}
        </div>
      </div>
      <div className="ul_submitter" onClick={addParticipants}>
        <ButtonLarge type="submit" style="fill" value="Add Participants" />
      </div>

    </div>

  );
}

export default UserList;
