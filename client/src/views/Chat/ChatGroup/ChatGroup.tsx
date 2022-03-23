import React from 'react';
import { useParams } from 'react-router-dom';
import HeaderReturn from '../../../components/HeaderReturn/HeaderReturn';
import ProfilePicture from '../../../components/ProfilePicture/ProfilePicture';

function ChatGroup() {
  const params = useParams();
  return (
    <div>
      <HeaderReturn />
      <h3>ChatGroup</h3>
      <ProfilePicture />
      <div>
        Event Id:
        {' '}
        {params.eventid}
      </div>
    </div>
  );
}

export default ChatGroup;
