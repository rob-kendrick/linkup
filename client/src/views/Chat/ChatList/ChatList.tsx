import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderMain from '../../../components/HeaderMain/HeaderMain';
import UserProfile from '../../../components/UserProfile/UserProfile';
import './chatList.css';
import userApi from '../../../utilities/api/user.api';
import { LuEvent } from '../../../utilities/types/Event';

function ChatList() {
  const [events, setEvents] = useState<LuEvent[] | null>(null);

  const navigate = useNavigate();

  const fetchData = async () => {
    const userId = Number(localStorage.getItem('id_user'));
    const createdEvents = await userApi.getUserCreatedEvents(userId)
      .then((response) => response.data)
      .catch();

    const participatingEvents = await userApi.getUserParticipatingEvents(userId)
      .then((response) => response.data)
      .catch();

    if (events && events.length > 0) {
      setEvents([...events, ...createdEvents, ...participatingEvents]);
    } setEvents([...createdEvents, ...participatingEvents]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (luEvent: LuEvent) => {
    navigate(`/events/${luEvent.id_event}/chat`, { state: { currentEvent: luEvent } });
  };

  return (
    <div className="s">
      <HeaderMain
        title="Chat"
      />
      <div className="cl_itemContainer">
        {events && events!.map((luEvent) => (
          <div key={luEvent.id_event} role="button" onClick={() => handleClick(luEvent)} onKeyDown={(e) => (e.key === 'Enter' ? handleClick(luEvent) : null)} tabIndex={0}>
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
