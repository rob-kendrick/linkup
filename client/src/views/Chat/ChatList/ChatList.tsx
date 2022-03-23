import React from 'react';
import eventMockData from '../../../Mock/event.mock.json';
import ChatListItem from './ChatListItem.tsx/ChatListItem';

const eventData: any[] = eventMockData;

function ChatList() {
  return (
    <div>
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
