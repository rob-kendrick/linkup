// @ts-nocheck
import React, { useState } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { RootState } from '../../utilities/redux/store';
import TagList from '../TagList/TagList';
import marker from '../../assets/IoLocationSharp.svg';
import time from '../../assets/BiTimeFive.svg';
import ButtonSmall from '../Form/ButtonSmall/ButtonSmall';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import Icon from '../Icon/Icon';
import PopUp from '../PopUp/PopUp';
import './EventCard.css';
import { LuEvent } from '../../utilities/types/Event';

function EventCard({ cardEvent } : LuEvent) {
  const navigate = useNavigate();
  const userId = localStorage.getItem('id_user');
  const [showPopup, setShowPopup] = useState(false);

  const currentEvent = useSelector(
    (state: RootState) => state.eventReducer.allEvents.filter(
      (event) => event.id_event === Number(cardEvent.id_event),
    ),
  )[0];

  const participating = currentEvent.participants.some(
    (participant) => participant.id_user === Number(userId),
  );
  const hosting = (Number(userId) === currentEvent.creator_id);

  return (
    <div key={currentEvent.id_event} className="ec__container">
      <Link
        to={`/events/${currentEvent.id_event}`}
        key={currentEvent.id_event}
      >
        <div className="ec__details-container">
          <div className="ec__tag-container">
            <TagList tags={currentEvent.tags} />
          </div>
          <div className="ec__host-container">
            <ProfilePicture
              userPicture={currentEvent.creator.profile_picture}
              userName={currentEvent.creator.first_name}
              alt={currentEvent.creator.first_name}
              size={52}
            />
            <div className="ec__event-title">
              <h3>{currentEvent.title}</h3>
              <h4>{currentEvent.creator.first_name}</h4>
            </div>
          </div>
          <div className="ec__details">
            <div className="ec__detail">
              <Icon
                icon={marker}
                alt={marker}
              />
              <p>
                {`${currentEvent.street}, ${currentEvent.postcode} ${currentEvent.city}`}
              </p>
            </div>
            <div className="ec__detail">
              <Icon
                icon={time}
                alt={time}
              />
              <p>{moment(currentEvent.date).format('h:mm A')}</p>
            </div>
          </div>
        </div>
      </Link>
      <div className="ec__button-container">

        {/* neither hosting nor participating */}
        {(participating || hosting)
          ? null : (
            <div className="ec__button-container">
              {showPopup && <PopUp currentEvent={currentEvent} useCase="signup" setShowPopup={setShowPopup} />}
              <div role="button" onClick={() => setShowPopup(true)}>
                <ButtonSmall
                  style="fill"
                  value="Link Up"
                  type="button"
                />
              </div>
              <ButtonSmall
                style="grey"
                value={`${currentEvent.participants.length} are going`}
                type="button"
              />
            </div>
          )}

        {/* hosting */}
        {(hosting)
          && (
            <div className="ec__button-container">
              <ButtonSmall
                style="grey"
                value={`${currentEvent.participants.length} are going`}
                type="button"
              />
              {showPopup && <PopUp currentEvent={currentEvent} useCase="cancel" setShowPopup={setShowPopup} />}
              <div role="button" onClick={() => setShowPopup(true)}>
                <ButtonSmall
                  style="stroke"
                  value="Cancel Acvtivity"
                  type="button"
                />
              </div>
            </div>

          )}
        {/* participating */}
        {(participating)
          && (
            <div className="ec__button-container">
              <ButtonSmall
                style="grey"
                value={`${currentEvent.participants.length} are going`}
                type="button"
              />
              {showPopup && <PopUp currentEvent={currentEvent} useCase="leave" setShowPopup={setShowPopup} />}
              <div role="button" onClick={() => setShowPopup(true)}>
                <ButtonSmall
                  style="stroke"
                  value="Leave"
                  type="button"
                />
              </div>
            </div>
          )}
      </div>
    </div>

  );
}

export default EventCard;
