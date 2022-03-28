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
        <div className="pl__participantsContainer">
          <ProfilePicture
            userPicture={participant.profile_picture}
            alt={participant.first_name}
            size="1.8rem"
          />
          <p className="pl__participantName">{participant.first_name}</p>
        </div>
      ))}
    </div>
  );
}

export default ParticipantList;
