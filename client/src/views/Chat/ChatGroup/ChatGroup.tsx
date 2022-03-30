import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { io, Socket } from 'socket.io-client';
import { useForm } from 'react-hook-form';
import { InputTextArea } from '../../../components/Form/InputTextField/InputTextField';
import HeaderReturn from '../../../components/HeaderReturn/HeaderReturn';
import { LuEvent } from '../../../utilities/types/Event';
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

  const sendMessage = (input: any) => {
    socket.emit('emitMsgFromClient', Number(userId), state.currentEvent.id_event, input.message);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <article className="cG">
      <HeaderReturn text={state.currentEvent.title} luEvent={state.currentEvent} socket={socket} />
      <div className="cG__mainContainer">
        <form onSubmit={handleSubmit(sendMessage)}>

          <div id="msgArea" className="cG__chatMsgsContainer">Chat</div>

          <div className="cG__inputContainer">
            <div className="cG__input-field">
              <InputTextArea
                type="text"
                errorMessage={errors.description?.message}
                rows={5}
                {...register('message', {
                  required: 'This field is required',
                  onChange: () => {
                    console.log('hello');
                  },
                })}
              />
            </div>
            <div className="cG__button-container">
              <button className="cG__button" type="submit">S</button>
            </div>
          </div>
        </form>
      </div>
    </article>
  );
}
