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

      <div key={event.id_event} className="activity-card">

        <div>
          {event.tags}
        </div>

        <div className="activity-card-profile">
          <div>
            <div><img src={event.creator.profile_picture} alt="event creator" className="activity-card-picture" /></div>
          </div>
          <div className="activity-card-header-info">
            <h4 id="activity-card-title">{event.title}</h4>
            <p id="activity-card-user">{event.creator.first_name}</p>
          </div>
        </div>
        <div className="activity-card-details">
          <div className="activity-card-details-icon"><img src={marker} alt="marker pin" /></div>
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
        <div className="activity-card-details">
          <div className="activity-card-details-icon"><img src={marker} alt="marker pin" /></div>
          <p>{moment(event.date).format('h:mm')}</p>
        </div>
        <div className="activity-card-button-container">
          <ButtonEventsMenu name="LinkUp" />
          <ButtonEventsMenu name={`${event.participants.length} participants`} />
        </div>
      </div>

    </Link>
  );
}

export default EventCard;
