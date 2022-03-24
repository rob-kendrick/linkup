import React from 'react';
import ChatListItem from './ChatListItem.tsx/ChatListItem';
import eventMockData from '../../../utilities/mocks/db-data/events-db-data.json';

const eventData: any[] = eventMockData.data;

function ChatList() {
  return (
    <div className="event-list-delete">
      <h3>ChatList</h3>
      {eventData.map((event) => (
        <ChatListItem
          key={event.id}
          event={event}
        />
      ))}
    </div>
  );
}

export default ChatList;
