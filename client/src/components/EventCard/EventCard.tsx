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

      <div key={event.id_event} className="ac_main-container">
        <div className="tl_component-container">
          <TagList tags={event.tags} />
        </div>
        <div className="ac_profile">
          <div className="ac_profile-inner-container">
            <div className="ac_profile-picture-container">
              <div><img src={event.creator.profile_picture} alt="event creator" className="ac_profile-picture" /></div>
            </div>
            <div className="ac_header-info">
              <h4>{event.title}</h4>
              <p>{event.creator.first_name}</p>
            </div>
          </div>
        </div>
        <div className="ac_details">
          <div className="ac_details-inner-container">
            <div className="ac_icon-container">
              <div className="ac_details-icon"><img src={marker} alt="marker pin" /></div>
            </div>
            <div className="ac_details-text">
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
        <div className="ac_details">
          <div className="ac_details-inner-container">
            <div className="ac_icon-container">
              <div className="ac_details-icon"><img src={marker} alt="marker pin" /></div>
            </div>
            <div className="ac_details-text">
              <p>{moment(event.date).format('h:mm')}</p>
            </div>
          </div>
        </div>
        <div className="ac_button-container">
          <ButtonEventsMenu name="LinkUp" />
          <ButtonEventsMenu name={`${event.participants.length} participants`} />
        </div>
      </div>

    </Link>
  );
}

export default EventCard;
