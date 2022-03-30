import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePicture from '../../../../components/ProfilePicture/ProfilePicture';

function ChatListItem({ event }: {event:any}) {
  return (
    <Link
      to={`/events/${event.id}/chat`}
      key={event.id}
    >
      <div className="list-item-delete">
        <h3>ChatListItem</h3>
        {event.title}
        <ProfilePicture
          userPicture="empty"
          userName="empty"
          alt="empty"
          size={30}
        />
      </div>
    </Link>
  );
}

export default ChatListItem;
