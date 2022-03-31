import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { io, Socket } from 'socket.io-client';
import { useForm } from 'react-hook-form';
import { InputTextArea } from '../../../components/Form/InputTextField/InputTextField';
import HeaderReturn from '../../../components/HeaderReturn/HeaderReturn';
import { LuEvent } from '../../../utilities/types/Event';
import { ReactComponent as IoPaperPlane } from '../../../assets/IoPaperPlane.svg';

import './chatGroup.css';

interface LocationState {
  state: { currentEvent: LuEvent }
}

interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
}

interface ClientToServerEvents {
  emitMsgFromClient: (userId: number, eventId: number, msg: string) => void;
  joinRoom: (userId: number, eventId: number) => void;
}

export default function ChatGroup() {
  const [textareaheight, setTextareaheight] = useState(1);

  const userId = localStorage.getItem('id_user');
  const location = useLocation();
  const { state } = location as LocationState;
  const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io('http://localhost:4000');

  useEffect(() => {
    socket.emit('joinRoom', Number(userId), state.currentEvent.id_event);
  }, []);

  const createPost = (userId: any, eventId: any, msg: any) => {
    const p = document.createElement('p');
    const content = document.createTextNode(`User: ${userId} event: ${eventId} msg: ${msg}`);
    p.appendChild(content);
    document.getElementById('msgArea')!.appendChild(p);
  };

  socket.on('basicEmit', (userId, eventId, msg) => {
    createPost(userId, eventId, msg);
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendMessage = (input: any) => {
    setTextareaheight(1);
    reset();
    socket.emit('emitMsgFromClient', Number(userId), state.currentEvent.id_event, input.message);
  };

  function changeTextAreaHeight(event: any) {
    const height = event.target.scrollHeight;
    const rowHeight = 23;
    const trows = Math.ceil(height / rowHeight) - 2;
    if (textareaheight < 5) {
      setTextareaheight(trows);
    }
  }

  return (
    <div className="cG">
      <HeaderReturn text={state.currentEvent.title} luEvent={state.currentEvent} socket={socket} />
      <div className="cG__main-container">
        <form onSubmit={handleSubmit(sendMessage)}>
          <div id="msgArea" className="cG__messages-container">Chat</div>
          <div className="cG__input-container">
            <div className="cG__input-textarea">
              <InputTextArea
                type="text"
                errorMessage={errors.description?.message}
                rows={textareaheight}
                id="itf__chat"
                className="itf__chat-container"
                {...register('message', {
                  required: 'This field is required',
                  onChange: (e) => changeTextAreaHeight(e),
                })}
              />
            </div>
            <button className="cG__button" type="submit">
              <IoPaperPlane className="cG__icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
