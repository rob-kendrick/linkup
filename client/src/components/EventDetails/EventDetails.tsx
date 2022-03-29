/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { RootState } from '../../utilities/redux/store';
import HeaderReturn from '../HeaderReturn/HeaderReturn';
import MapSmall from '../MapSmall/MapSmall';
// import ProfilePicture from '../ProfilePicture/ProfilePicture';
import TagList from '../TagList/TagList';
import ParticipantList from './ParticipantList/ParticipantList';
import PopUp from '../PopUp/PopUp';
import useDate from '../../utilities/helper/useDate';
import EventField from '../EventField/EventField';
import './eventDetails.css';
import ButtonLarge from '../Form/ButtonLarge/ButtonLarge';

function EventDetails() {
  const navigate = useNavigate();
  const params = useParams();
  const [showPopup, setShowPopup] = useState(false);
  const userId = localStorage.getItem('id_user');
  const hidePopup = () => {
    setShowPopup(false);
  };

  const currentEvent = useSelector(
    (state: RootState) => state.eventReducer.allEvents.filter(
      (event) => event.id_event === Number(params.eventid),
    ),
  )[0];

  const { lat } = currentEvent;
  const { lng } = currentEvent;

  if (currentEvent) {
    const date = useDate(currentEvent.date);
    const participation = currentEvent.participants.some(
      (participant) => participant.id_user === Number(userId),
    );

    return (
      <article style={{ height: '100%' }}>
        <HeaderReturn text="Activity Details" />
        <div className="ed">
          <div className="ed__header">
            <p className="ed__fontSecondary">{date}</p>
            <h3 className="ed__titile">{currentEvent.title}</h3>
            <TagList tags={currentEvent.tags} />
          </div>
          <div className="ed__mainContentContainer">
            <div className="ed__txtContainer">
              <EventField text="Location" currentEvent={currentEvent} />
              <EventField text="Date" currentEvent={currentEvent} />
              <EventField text="Host" currentEvent={currentEvent} />
              <p className="ed__fontSecondary">Description</p>
              <p className="ed__fontRegular">{currentEvent.description}</p>
            </div>
            <div className="ed__map-container">
              <MapSmall lat={lat} lng={lng} />
            </div>
            <ParticipantList currentEvent={currentEvent} />
          </div>
          {participation
            ? (
              <div className="ed__btnContainer">
                <div role="button" onClick={() => navigate(`/events/${params.eventid}/chat`, { state: { currentEvent } })}>
                  <ButtonLarge style="fill" type="submit" value="Chat" />
                </div>
                <div role="button" onClick={() => setShowPopup(true)}>
                  <ButtonLarge style="stroke" type="submit" value="Cancel / Leave Activity" />
                </div>
                {showPopup ? <PopUp currentEvent={currentEvent} useCase="leave" hidePopup={hidePopup} /> : null}
              </div>
            )
            : (
              <div className="ed__btnContainer">
                <div role="button" onClick={() => setShowPopup(true)}>
                  <ButtonLarge style="fill" type="submit" value="LinkUp" />
                </div>
                {showPopup ? <PopUp currentEvent={currentEvent} useCase="signup" hidePopup={hidePopup} /> : null}
              </div>
            )}
        </div>
      </article>
    );
  }
  return <div>Loading</div>;
}

export default EventDetails;
