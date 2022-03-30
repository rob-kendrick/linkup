import React from 'react';
import { LuEvent } from '../../utilities/types/Event';
import locationIcon from '../../assets/IoLocationSharp.svg';
import dateSvg from '../../assets/BiTimeFive.svg';
import Icon from '../Icon/Icon';
import { useDateLong } from '../../utilities/helper/useDate';
import './eventField.css';
import ProfilePicture from '../ProfilePicture/ProfilePicture';

type Props = {
  text: string,
  currentEvent: LuEvent
}

function EventField({ text, currentEvent }: Props) {
  if (text === 'Location') {
    return (
      <div className="puf__container">
        <div className="puf__imgContainer">
          <Icon icon={locationIcon} alt="date" />
        </div>
        <div className="puf__txtContainer">
          <p className="puf__p">{text}</p>
          <h4 className="puf__h4">
            {currentEvent.street}
            ,
            {' '}
            {currentEvent.postcode}
            {' '}
            {currentEvent.city}
          </h4>
        </div>
      </div>
    );
  }
  if (text === 'Date') {
    return (
      <div className="puf__container">
        <div className="puf__imgContainer">
          <Icon icon={dateSvg} alt="date" />
        </div>
        <div className="puf__txtContainer">
          <p className="puf__p">{text}</p>
          <h4 className="puf__h4">
            {useDateLong(currentEvent.date)}
          </h4>
        </div>
      </div>
    );
  }
  if (text === 'Host') {
    return (
      <div className="puf__container">
        <div className="puf__imgContainer">
          <ProfilePicture
            userPicture={currentEvent.creator.profile_picture}
            userName={currentEvent.creator.first_name}
            alt={currentEvent.creator.first_name}
            size={30}
          />
        </div>
        <div className="puf__txtContainer">
          <p className="puf__p">{text}</p>
          <h4 className="puf__h4">{currentEvent.creator.first_name}</h4>
        </div>
      </div>
    );
  }
  return <div><p>User not found</p></div>;
}

export default EventField;
