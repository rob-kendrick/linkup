import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import ButtonEventsMenu from '../Form/ButtonEventsMenu/ButtonEventsMenu';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import TagList from '../TagList/TagList';
import marker from '../../assets/IoLocationSharp.svg';
import './EventCard.css';
import { LuEvent } from '../../utilities/types/Event';

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
                alt={event.creator.first_name}
                size="52px"
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
              <div className="ec__details-icon"><img src={marker} alt="marker pin" /></div>
            </div>
            <div className="ec__details-text">
              <p className="ec__header-text">
                {event.street_name}
                {' '}
                {event.street_number}
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
              <div className="ec__details-icon"><img src={marker} alt="marker pin" /></div>
            </div>
            <div className="ec__details-text">
              <p className="ec__header-text">{moment(event.date).format('h:mm')}</p>
            </div>
          </div>
        </div>
        <div className="ec__button-container">
          <ButtonEventsMenu name="LinkUp" />
          <ButtonEventsMenu name={`${event.participants.length} participants`} />
        </div>
      </div>

    </Link>
  );
}

export default EventCard;
