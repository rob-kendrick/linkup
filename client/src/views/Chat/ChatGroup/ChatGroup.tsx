import React from 'react';
import { useLocation } from 'react-router-dom';
import HeaderReturn from '../../../components/HeaderReturn/HeaderReturn';
import { LuEvent } from '../../../utilities/types/Event';

interface LocationState {
  state: { currentEvent: LuEvent }
}

export default function ChatGroup() {
  const location = useLocation();
  const { state } = location as LocationState;
  console.log(state);

  return (
    <div>
      <HeaderReturn text={state.currentEvent.title} luEvent={state.currentEvent} />
    </div>
  );
}
