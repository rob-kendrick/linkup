import React from 'react';
import { useParams } from 'react-router-dom';
import ButtonLarge from '../Form/ButtonLarge/ButtonLarge';
import HeaderReturn from '../HeaderReturn/HeaderReturn';
import MapSmall from '../MapSmall/MapSmall';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import TagList from '../TagList/TagList';
import ParticipantList from './ParticipantList/ParticipantList';

function EventDetails() {
  const params = useParams();
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
      <ButtonLarge />
    </div>
  );
}

export default EventDetails;
