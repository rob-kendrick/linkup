import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HeaderReturn from '../HeaderReturn/HeaderReturn';
import MapSmall from '../MapSmall/MapSmall';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import TagList from '../TagList/TagList';
import ParticipantList from './ParticipantList/ParticipantList';

function EventDetails() {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <HeaderReturn />
      <h3>EventDetails</h3>
      <TagList />
      <div>
        Event Id:
        {' '}
        {params.eventid}
      </div>
      <ProfilePicture />
      <MapSmall />
      <ParticipantList />

      {/* All buttons should be 'ButtonLarge' components */}
      {/* All buttons (but 'Chat' button) should trigger /src/components/Popup */}
      <button type="button" onClick={() => navigate(`/events/${params.eventid}/chat`)}>Chat</button>
      <br />
      <button type="button">Cancel / Leave Activity</button>
    </div>
  );
}

export default EventDetails;
