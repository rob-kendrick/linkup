import React from 'react';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import { LuEvent } from '../../utilities/types/Event';
import './UserProfile.css';

type Props = {
  event: LuEvent
}

export default function UserProfile({ event }: Props) {
  return (
    <div className="up__container">
      <div className="up__profile-inner-container">
        <div className="up__profile-picture-container">
          <ProfilePicture
            userName={event.creator.first_name}
            userPicture={event.creator.profile_picture}
            alt={event.creator.first_name}
            size={52}
          />
        </div>
        <div className="up__header-info">
          <h4 className="up__header-text">{event.title}</h4>
          <p className="up__header-text">{event.creator.first_name}</p>
        </div>
      </div>
    </div>
  );
}
