import React from 'react';
import { Link } from 'react-router-dom';
import ButtonSmall from '../Form/ButtonSmall/ButtonSmall';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import TagList from '../TagList/TagList';

function EventCard({ event }: {event:any}) {
  return (
    <Link
      to={`/events/${event.id}`}
      key={event.id}
    >
      <div className="event-card-delete">
        <TagList />
        <h3>Event Card</h3>
        {event.title}
        <ProfilePicture />
        <div className="flex-row-delete">
          <ButtonSmall />
          <ButtonSmall />
        </div>
      </div>
    </Link>
  );
}

export default EventCard;
