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

function EventDetails() {
  const [selectedEvent, setSelectedEvent] = useState<LuEvent>();
  const [role, setRole] = useState<string>();

  const params = useParams();
  const navigate = useNavigate();
  const { eventid } = params;
  const currentEvent = useSelector(
    (state:RootState) => state.eventReducer.allEvents.filter(
      (event) => event.id_event === Number(eventid),
    ),
  )[0];
  dayjs.extend(advancedFormat);
  const date = dayjs(currentEvent.date).format('dddd, Do MMMM, H:MM');

  // setSelectedEvent(currentEvent);
  // set role depending if current user participates in the event

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
        <ParticipantList />
        {/* All buttons should be 'ButtonLarge' components */}
        {/* All buttons (but 'Chat' button) should trigger /src/components/Popup */}
      </div>
      <div>
        <button type="button" onClick={() => navigate(`/events/${params.eventid}/chat`)}>Chat</button>
        <button type="button">Cancel / Leave Activity</button>
      </div>
    </div>
  );
}

export default EventDetails;
