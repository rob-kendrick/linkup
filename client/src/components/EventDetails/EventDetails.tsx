import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { RootState } from '../../utilities/redux/store';
import HeaderReturn from '../HeaderReturn/HeaderReturn';
import MapSmall from '../MapSmall/MapSmall';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import TagList from '../TagList/TagList';
import ParticipantList from './ParticipantList/ParticipantList';
import PopUp from '../PopUp/PopUp';
import useDate from '../../utilities/hooks/useDate';

function EventDetails() {
  const navigate = useNavigate();
  const params = useParams();

  const [showPopup, setShowPopup] = useState(false);

  const currentEvent = useSelector(
    (state: RootState) => state.eventReducer.allEvents.filter(
      (event) => event.id_event === Number(params.eventid),
    ),
  )[0];

  const date = useDate(currentEvent.date);

  // TEMPORARY DUE TO LACK OF AUTH
  // eslint-disable-next-line camelcase
  const user_id = useSelector((state: RootState) => state.userReducer.currentUser?.id_user);

  const participation = currentEvent.participants.some(
    (participant) => participant.id_user === Number(user_id),
  );

  const hidePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <HeaderReturn text="Activity Details" />
      <div>
        {date}
        {/* <TagList /> */}
        <h3>{currentEvent.title}</h3>
      </div>
      <div>
        <ProfilePicture />
        {/* <MapSmall /> */}
        {participation ? <ParticipantList /> : null}
      </div>
      {participation
        ? (
          <div>
            <button type="button" onClick={() => navigate(`/events/${params.eventid}/chat`)}>Chat</button>
            <button type="button" onClick={() => setShowPopup(true)}>Cancel / Leave Activity</button>
            {showPopup ? <PopUp currentEvent={currentEvent} useCase="leave" hidePopup={hidePopup} /> : null}
          </div>
        )
        : (
          <div>
            <button type="button" onClick={() => setShowPopup(true)}>Linkup</button>
            {showPopup ? <PopUp currentEvent={currentEvent} useCase="signup" hidePopup={hidePopup} /> : null}
          </div>
        )}
    </div>
  );
}

export default EventDetails;
