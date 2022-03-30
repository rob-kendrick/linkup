// @ts-nocheck
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import TagList from '../TagList/TagList';
import marker from '../../assets/IoLocationSharp.svg';
import time from '../../assets/BiTimeFive.svg';
import './EventCard.css';
import { LuEvent } from '../../utilities/types/Event';
import Icon from '../Icon/Icon';
import ButtonSmall from '../Form/ButtonSmall/ButtonSmall';
import '../Form/ButtonSmall/ButtonSmall.css';
import PopUp from '../PopUp/PopUp';

interface Events {
  event: LuEvent
}

function EventCard({ event }: Events) {
  const [showPopup, setShowPopup] = useState(false);

  const userId = localStorage.getItem('id_user');
  return (
    <Link
      to={`/events/${event.id_event}`}
      key={event.id_event}
    >

      <div key={event.id_event} className="ec__container">
        <div className="ec__details-container">

          <div className="ec__tag-container">
            <TagList tags={event.tags} />
          </div>
          <div className="ec__host-container">
            <ProfilePicture
              userPicture={event.creator.profile_picture}
              userName={event.creator.first_name}
              alt={event.creator.first_name}
              size={52}
            />
            <div className="ec__event-title">
              <h3>{event.title}</h3>
              <h4>{event.creator.first_name}</h4>
            </div>
          </div>
          <div className="ec__details">
            <div className="ec__detail">
              <Icon
                icon={marker}
                alt={marker}
              />
              <p>
                {`${event.street}, ${event.postcode} ${event.city}`}
              </p>
            </div>
            <div className="ec__detail">
              <Icon
                icon={time}
                alt={time}
              />
              <p>{moment(event.date).format('h:mm A')}</p>
            </div>
          </div>
        </div>

        <div className="ec__button-container">

          {/* neither hosting nor participating */}
          {(userId in event.participants === false) && (userId !== event.creator_id.toString())
            ? (
              <div className="ec__button-container">
                <ButtonSmall
                  style="fill"
                  value="Link Up"
                  type="button"
                />
                <ButtonSmall
                  style="grey"
                  value={`${event.participants.length} are going`}
                  type="button"
                />
                {showPopup ? <PopUp currentEvent={currentEvent} useCase="signup" setShowPopup={setShowPopup} /> : null}
              </div>
            ) : (false)}

          {/* hosting */}
          {userId === event.creator_id.toString()
            && (
              <div className="ec__button-container">
                <ButtonSmall
                  style="grey"
                  value={`${event.participants.length} are going`}
                  type="button"
                />
                <ButtonSmall
                  style="stroke"
                  value="Cancel Acvtivity"
                  type="button"
                />
              </div>

            )}
          {/* participating */}
          {(userId !== event.creator_id.toString()) && (userId in event.participants)
            && (
              <div className="ec__button-container">
                <ButtonSmall
                  style="grey"
                  value={`${event.participants.length} are going`}
                  type="button"
                />
                <ButtonSmall
                  style="stroke"
                  value="Leave"
                  type="button"
                />
              </div>
            )}

        </div>
      </div>

    </Link>
  );
}

export default EventCard;
