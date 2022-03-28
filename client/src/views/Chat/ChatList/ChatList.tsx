import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ChatListItem from './ChatListItem.tsx/ChatListItem';
import HeaderMain from '../../../components/HeaderMain/HeaderMain';
import UserProfile from '../../../components/UserProfile/UserProfile';
import { RootState } from '../../../utilities/redux/store';
import './chatList.css';
import userApi from '../../../utilities/api/user.api';
import { User } from '../../../utilities/types/User';

function ChatList() {
  const events = useSelector(
    (state: RootState) => state.eventReducer.allEvents,
  );
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const userId = Number(localStorage.getItem('id_user'));
    userApi.getUserById(userId)
      .then((response) => setCurrentUser(response.data))
      .catch();
  }, []);

  return (
    <div className="s">
      <HeaderMain
        title="Chat"
      />
      <div className="cl_itemContainer">
        {currentUser?.events_created.length
          ? (
            currentUser?.events_participating.map((event) => (
              <UserProfile
                key={event.id_event}
                event={event}
              />
            )))
          : null}
        {currentUser?.events_participating.map((event) => (
          <UserProfile
            key={event.id_event}
            event={event}
          />
        ))}
      </div>
    </div>
  );
}

export default ChatList;
