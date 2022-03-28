import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ChatListItem from './ChatListItem.tsx/ChatListItem';
import HeaderMain from '../../../components/HeaderMain/HeaderMain';
import UserProfile from '../../../components/UserProfile/UserProfile';
import { RootState } from '../../../utilities/redux/store';
import './chatList.css';
import userApi from '../../../utilities/api/user.api';
import { User } from '../../../utilities/types/User';
import { LuEvent } from '../../../utilities/types/Event';

function ChatList() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [events, setEvents] = useState<LuEvent[] | null>(null);

  useEffect(() => {
    const userId = Number(localStorage.getItem('id_user'));
    userApi.getUserCreatedEvents(userId)
      .then((response) => setEvents(response.data))
      .catch();
    userApi.getUserParticipatingEvents(userId)
      .then((response) => setEvents(response.data))
      .catch();
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
        {events && events!.map((event) => (
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
