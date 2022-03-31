/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { RootState } from '../../utilities/redux/store';
import HeaderReturn from '../HeaderReturn/HeaderReturn';
import MapSmall from '../MapSmall/MapSmall';
import TagList from '../TagList/TagList';
import ParticipantList from './ParticipantList/ParticipantList';
import PopUp from '../PopUp/PopUp';
import { useDateLong } from '../../utilities/helper/useDate';
import EventField from '../EventField/EventField';
import './eventDetails.css';
import ButtonLarge from '../Form/ButtonLarge/ButtonLarge';

function EventDetails() {
  const navigate = useNavigate();
  const params = useParams();
  const [showPopup, setShowPopup] = useState(false);
  const userId = localStorage.getItem('id_user');

  const currentEvent = useSelector(
    (state: RootState) => state.eventReducer.allEvents.filter(
      (event) => event.id_event === Number(params.eventid),
    ),
  )[0];

  const { lat } = currentEvent;
  const { lng } = currentEvent;

  const date = useDateLong(currentEvent.date);
  const participating = currentEvent.participants.some(

    (participant) => participant.id_user === Number(userId),
  );
  const hosting = (Number(userId) === currentEvent.creator_id);

  return (
    <div className="ed">
      <HeaderReturn text="Activity Details" />
      <div className="ed__container">
        <div className="ed__header ed__indent">
          <TagList tags={currentEvent.tags} />
          <h2>{date}</h2>
          <h1>{currentEvent.title}</h1>
        </div>
        <article className="ed__article">
          <div className="ed__indent">
            <EventField text="Location" currentEvent={currentEvent} />
            <EventField text="Date" currentEvent={currentEvent} />
            <EventField text="Host" currentEvent={currentEvent} />
            <h3>Description</h3>
            <p>{currentEvent.description}</p>
            <h3>Location</h3>
          </div>
          <div className="ed__map-container">
            <MapSmall lat={lat} lng={lng} />
          </div>
          <div className="ed__indent">
            <h3>Participants</h3>
            <ParticipantList currentEvent={currentEvent} />
          </div>
        </article>
        <div className="ed__btn-container">
          {(participating || hosting)
            ? (
              <div>
                <div role="button" onClick={() => navigate(`/events/${params.eventid}/chat`, { state: { currentEvent } })}>
                  <ButtonLarge style="fill" type="submit" value="Chat" />
                </div>
              </div>
            )
            : (
              <div>
                <div role="button" onClick={() => setShowPopup(true)}>
                  <ButtonLarge style="fill" type="submit" value="LinkUp" />
                </div>
                {showPopup ? <PopUp currentEvent={currentEvent} useCase="signup" setShowPopup={setShowPopup} /> : null}
              </div>
            )}
          {(hosting)
            && (
              <div>
                <div role="button" onClick={() => setShowPopup(true)}>
                  <ButtonLarge style="stroke" type="submit" value="Cancel Activity" />
                </div>
                {showPopup ? <PopUp currentEvent={currentEvent} useCase="cancel" setShowPopup={setShowPopup} /> : null}
              </div>
            )}
          {
            (participating) && (
              <div>
                <div role="button" onClick={() => setShowPopup(true)}>
                  <ButtonLarge style="stroke" type="submit" value="Leave Activity" />
                </div>
                {showPopup ? <PopUp currentEvent={currentEvent} useCase="leave" setShowPopup={setShowPopup} /> : null}
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
