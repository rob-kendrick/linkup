import React from 'react';
import ChatListItem from './ChatListItem.tsx/ChatListItem';
import eventMockData from '../../../Mock/event.mock.json';

const eventData: any[] = eventMockData;

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
