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
  eventList : LuEvent[];
}

function EventCard({ event, eventList }: Events) {
  return (
    <Link
      to={`/events/${event.id_event}`}
      key={event.id_event}
    >
      {event}

      <div key={event.id_event} className="ec_main-container">
        <div className="ec_tag-component-container">
          <TagList tags={event.tags} />
        </div>
        <div className="ec_profile">
          <div className="ec_profile-inner-container">
            <div className="ec_profile-picture-container">
              <div><img src={event.creator.profile_picture} alt="event creator" className="ec_profile-picture" /></div>
            </div>
            <div className="ec_header-info">
              <h4>{event.title}</h4>
              <p>{event.creator.first_name}</p>
            </div>
          </div>
        </div>
        <div className="ec_details">
          <div className="ec_details-inner-container">
            <div className="ec_icon-container">
              <div className="ec_details-icon"><img src={marker} alt="marker pin" /></div>
            </div>
            <div className="ec_details-text">
              <p>
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
        <div className="ec_details">
          <div className="ec_details-inner-container">
            <div className="ec_icon-container">
              <div className="ec_details-icon"><img src={marker} alt="marker pin" /></div>
            </div>
            <div className="ec_details-text">
              <p>{moment(event.date).format('h:mm')}</p>
            </div>
          </div>
        </div>
        <div className="ec_button-container">
          <ButtonEventsMenu name="LinkUp" />
          <ButtonEventsMenu name={`${event.participants.length} participants`} />
        </div>
      </div>

    </Link>
  );
}

export default EventCard;
