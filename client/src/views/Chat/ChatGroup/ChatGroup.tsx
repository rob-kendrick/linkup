import React from 'react';
import { useLocation } from 'react-router-dom';
import HeaderReturn from '../../../components/HeaderReturn/HeaderReturn';
import { LuEvent } from '../../../utilities/types/Event';
import './chatGroup.css';

interface LocationState {
  state: { currentEvent: LuEvent }
}

export default function ChatGroup() {
  const location = useLocation();
  const { state } = location as LocationState;
  console.log(state);

  return (
    <article className="cG">
      <HeaderReturn text={state.currentEvent.title} luEvent={state.currentEvent} />
      <div className="cG__mainContainer">
        <div className="cG__chatMsgsContainer">Chat</div>
        <div className="cG__inputContainer">Input</div>
      </div>
    </article>
  );
}
