import React from 'react';
import { LuEvent } from '../../../utilities/types/Event';
import { ReactComponent as LocationIcon } from '../../../assets/IoLocationSharp.svg';
import { ReactComponent as TimeIcon } from '../../../assets/BiTimeFive.svg';
import useDate from '../../../utilities/hooks/useDate';

type Props = {
  text: string,
  currentEvent: LuEvent
}

function PopUpField({ text, currentEvent }: Props) {
  if (text === 'location') {
    return (
      <div>
        <LocationIcon />
        <div>
          <p>{text}</p>
          <h4>
            {currentEvent.street_name}
            {currentEvent.street_number}
            ,
            {currentEvent.postcode}
            {currentEvent.city}
          </h4>
        </div>
      </div>
    );
  }
  if (text === 'date') {
    return (
      <div>
        <TimeIcon />
        <div>
          <p>{text}</p>
          <h4>
            {useDate(currentEvent.date)}
          </h4>
        </div>
      </div>
    );
  }
  if (text === 'host') {
    return (
      <div>
        <img src={currentEvent.creator.profile_picture} alt="" />
        <div>
          <p>{text}</p>
          <h4>{currentEvent.creator.first_name}</h4>
        </div>
      </div>
    );
  }
  return <div><p>User not found</p></div>;
}

export default PopUpField;
