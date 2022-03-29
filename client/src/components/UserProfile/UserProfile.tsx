import React from 'react';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import { LuEvent } from '../../utilities/types/Event';

type Props = {
  event: LuEvent
}

export default function UserProfile({ event }: Props) {
  return (
    <div className="ec__profile">
      <div className="ec__profile-inner-container">
        <div className="ec__profile-picture-container">
          <ProfilePicture
            userPicture={event.creator.profile_picture}
            alt={event.creator.first_name}
            size={52}
          />
        </div>
        <div className="ec__header-info">
          <h4 className="ec__header-text">{event.title}</h4>
          <p className="ec__header-text">{event.creator.first_name}</p>
        </div>
      </div>
    </div>
  );
}
