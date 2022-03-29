import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();

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

  const handleClick = (luEvent: LuEvent) => {
    console.log('handleClck', luEvent);

    navigate(`/events/${luEvent.id_event}/chat`, { state: { currentEvent: luEvent } });
  };

  return (
    <div className="s">
      <HeaderMain
        title="Chat"
      />
      <div className="cl_itemContainer">
        {events && events!.map((luEvent) => (
          <div role="button" onClick={() => handleClick(luEvent)} onKeyDown={(e) => (e.key === 'Enter' ? handleClick(luEvent) : null)} tabIndex={0}>
            <UserProfile
              key={luEvent.id_event}
              event={luEvent}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatList;
