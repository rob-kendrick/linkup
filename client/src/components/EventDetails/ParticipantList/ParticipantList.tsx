import React from 'react';
import ProfilePicture from '../../ProfilePicture/ProfilePicture';
import { LuEvent } from '../../../utilities/types/Event';
import './participantList.css';

type Props = {
  currentEvent: LuEvent;
}

function ParticipantList({ currentEvent }: Props) {
  return (
    <div className="pl">
      {currentEvent.participants.map((participant) => (
        <div className="pl__userContainer">
          {/* <ProfilePicture /> */}
          <img style={{ width: '35px', height: '35px' }} src={participant.profile_picture} alt="userPhoto" />
          <p>{participant.first_name}</p>
        </div>
      ))}
    </div>
  );
}

export default ParticipantList;
