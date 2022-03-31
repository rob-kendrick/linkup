/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as SvgArrow } from '../../assets/IoIosArrowBack.svg';
import { LuEvent } from '../../utilities/types/Event';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import './headerReturn.css';

interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
}

interface ClientToServerEvents {
  leaveRoom: (userId: number, eventId: number) => void;
}

type props = {
  resetAvailability?: boolean;
  text?: string;
  passedResetFunction?: (args: boolean) => boolean;
  passedReturnFunction?: (args: void) => any
  luEvent?: LuEvent
  socket?: Socket<ServerToClientEvents, ClientToServerEvents>
};

function HeaderReturn({
  resetAvailability, text, passedResetFunction, passedReturnFunction, luEvent, socket,
}: props) {
  const navigate = useNavigate();
  const userId = localStorage.getItem('id_user');

  const returnFunction = () => {
    if (socket) socket.emit('leaveRoom', Number(userId), luEvent!.id_event);
    if (passedReturnFunction) {
      passedReturnFunction();
    } else navigate(-1);
  };

  return (
    <div className="hr__main">
      <div className="hr__container">
        <button className="hr__btn" type="button" onClick={returnFunction}>
          <SvgArrow />
        </button>
        {luEvent ? <div style={{ marginRight: '1rem' }}><ProfilePicture userName={luEvent.creator.first_name} userPicture={luEvent.creator.profile_picture} size={50} alt={luEvent.title} /></div> : null}
        <div className="hr__txt">{text}</div>
      </div>
      <div className="hr__option" data-testid="hr__option">
        {passedResetFunction && resetAvailability ? <button className="hr__btnReset" type="button" onClick={() => passedResetFunction && passedResetFunction(true)}>Reset</button> : null}
      </div>
    </div>
  );
}

export default React.memo(HeaderReturn);
