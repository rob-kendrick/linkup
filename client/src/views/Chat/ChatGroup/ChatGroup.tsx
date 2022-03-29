import React from 'react';
import { useLocation } from 'react-router-dom';
import { io, Socket } from 'socket.io-client';
import HeaderReturn from '../../../components/HeaderReturn/HeaderReturn';
import { LuEvent } from '../../../utilities/types/Event';
import './chatGroup.css';

interface LocationState {
  state: { currentEvent: LuEvent }
}

interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
  emitMsgFromClient: (userId: number, eventId: number, msg: string) => void;
}

export default function ChatGroup() {
  const userId = localStorage.getItem('ud_user');
  const location = useLocation();
  const { state } = location as LocationState;
  const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io('http://localhost:4000');
  socket.on('basicEmit', (sth: any) => {
    console.log(sth);
  });

  const submitHandler = (e: any) => {
    e.preventDefault();
    const msg = e.target.elements.chat.value;

    console.log('chat msg');
    socket.emit('emitMsgFromClient', Number(userId), state.currentEvent.id_event, msg);
  };

  return (
    <article className="cG">
      <HeaderReturn text={state.currentEvent.title} luEvent={state.currentEvent} />
      <div className="cG__mainContainer">
        <div className="cG__chatMsgsContainer">Chat</div>
        <div className="cG__inputContainer">
          <form onSubmit={(e) => submitHandler(e)}>
            <label htmlFor="chat" />
            <input id="chat" name="chat" type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </article>
  );
}
