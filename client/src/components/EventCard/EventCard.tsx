import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import ButtonEventsMenu from '../Form/ButtonEventsMenu/ButtonEventsMenu';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import TagList from '../TagList/TagList';
import marker from '../../assets/IoLocationSharp.svg';
import time from '../../assets/BiTimeFive.svg';
import './EventCard.css';
import { LuEvent } from '../../utilities/types/Event';
import Icon from '../Icon/Icon';
import ButtonSmall from '../Form/ButtonSmall/ButtonSmall';
import '../Form/ButtonSmall/ButtonSmall.css';

interface Events {
  event: LuEvent
}

function EventCard({ event }: Events) {
  return (
    <Link
      to={`/events/${event.id_event}`}
      key={event.id_event}
    >

      <div key={event.id_event} className="ec__main-container">
        <div className="ec__tag-component-container">
          <TagList tags={event.tags} />
        </div>
        <div className="ec__profile">
          <div className="ec__profile-inner-container">
            <div className="ec__profile-picture-container">
              <ProfilePicture
                userPicture={event.creator.profile_picture}
                userName={event.creator.first_name}
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
        <div className="ec__details">
          <div className="ec__details-inner-container">
            <div className="ec__icon-container">
              <Icon
                icon={marker}
                alt={marker}
              />
            </div>
            <div className="ec__details-text">
              <p className="ec__header-text">
                {event.street}
                {', '}
                {event.postcode}
                {' '}
                {event.city}
              </p>
            </div>
          </div>
        </div>
        <div className="ec__details">
          <div className="ec__details-inner-container">
            <div className="ec__icon-container">
              <Icon
                icon={time}
                alt={time}
              />
            </div>
            <div className="ec__details-text">
              <p className="ec__header-text">{moment(event.date).format('h:mm A')}</p>
            </div>
          </div>
        </div>
        <div className="ec__button-container">
          <div className="ec__button-bn-left">
            <ButtonSmall
              style="fill"
              value="Link Up"
              type="button"
            />
          </div>
          <div className="ec__button-bn-rigth">
            <ButtonSmall
              style="grey"
              value={`${event.participants.length} are going`}
              type="button"
            />
          </div>
        </div>
      </div>

    </Link>
  );
}

export default EventCard;
