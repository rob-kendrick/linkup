import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { RootState } from '../../utilities/redux/store';
import HeaderReturn from '../HeaderReturn/HeaderReturn';
import MapSmall from '../MapSmall/MapSmall';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import TagList from '../TagList/TagList';
import ParticipantList from './ParticipantList/ParticipantList';
import type { LuEvent } from '../../utilities/types/Event';
import userApi from '../../utilities/api/user.api';

function EventDetails() {
  const [selectedEvent, setSelectedEvent] = useState<LuEvent>();
  // const [];
  const user_id = 1;
  const params = useParams();
  const navigate = useNavigate();
  const { eventid } = params;
  const currentEvent = useSelector(
    (state: RootState) => state.eventReducer.allEvents.filter(
      (event) => event.id_event === Number(eventid),
    ),
  )[0];

  dayjs.extend(advancedFormat);
  const date = dayjs(currentEvent.date).format('dddd, Do MMMM, H:MM');

  const participation = currentEvent.participants.some(
    (participant) => participant.id_user === Number(user_id),
  );

  const showPopup = () => {

  };

  return (
    <div>
      <HeaderReturn text="Activity Details" />
      <div>
        {date}
        <TagList />
        <h3>{currentEvent.title}</h3>
      </div>
      <div>
        <ProfilePicture />
        <MapSmall />
        {participation ? <ParticipantList /> : null}
      </div>
      {participation
        ? (
          <div>
            <button type="button" onClick={() => navigate(`/events/${params.eventid}/chat`)}>Chat</button>
            <button type="button">Cancel / Leave Activity</button>
          </div>
        )
        : (
          <div>
            <button type="button" onClick={showPopup}>Linkup</button>
          </div>
        )}
      <div className="ed__popup">
        POPUP
      </div>
    </div>
  );
}

export default EventDetails;
