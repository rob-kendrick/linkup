import React from 'react';
import { LuEvent } from '../../../utilities/types/Event';
import { ReactComponent as LocationIcon } from '../../../assets/IoLocationSharp.svg';
import { ReactComponent as TimeIcon } from '../../../assets/BiTimeFive.svg';
import useDate from '../../../utilities/hooks/useDate';
import './popUpField.css';

type Props = {
  text: string,
  currentEvent: LuEvent
}

function PopUpField({ text, currentEvent }: Props) {
  if (text === 'Location') {
    return (
      <div className="puf__container">
        <div className="puf__imgContainer">
          <LocationIcon style={{ width: '100%', height: '1.8rem' }} />
        </div>
        <div className="puf__txtContainer">
          <p className="puf__p">{text}</p>
          <h4 className="puf__h4">
            {currentEvent.street_name}
            {' '}
            {currentEvent.street_number}
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
          <TimeIcon style={{ width: '100%', height: '1.8rem' }} />
        </div>
        <div className="puf__txtContainer">
          <p className="puf__p">{text}</p>
          <h4 className="puf__h4">
            {useDate(currentEvent.date)}
          </h4>
        </div>
      </div>
    );
  }
  if (text === 'Host') {
    return (
      <div className="puf__container">
        {/* waiting for the component -  temporary placeholder */}
        {/* also pass userName={event.creator.first_name} to ProfilePicture for the Avatar image! */}
        <div className="puf__imgContainer">
          <img style={{ width: '35px', height: '35px' }} src={currentEvent.creator.profile_picture} alt="" />
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

export default PopUpField;
