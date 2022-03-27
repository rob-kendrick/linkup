import React from 'react';
import { LuEvent } from '../../../utilities/types/Event';
import { ReactComponent as LocationIcon } from '../../../assets/BiCurrentLocation.svg';
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
        <div>
          <p>{text}</p>
          <h4>{ }</h4>
        </div>
      </div>
    );
  }
}

export default PopUpField;
