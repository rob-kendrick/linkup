import React, { useEffect } from 'react';
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
    console.log('USEEFFECT');
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

  const submitHandler = (e: any) => {
    e.preventDefault();
    const msg = e.target.elements.chat.value;
    // createPost(msg);
    // console.log('chat msg');
    socket.emit('emitMsgFromClient', Number(userId), state.currentEvent.id_event, msg);
  };

  return (
    <article className="cG">
      <HeaderReturn text={state.currentEvent.title} luEvent={state.currentEvent} socket={socket} />
      <div className="cG__mainContainer">
        <div id="msgArea" className="cG__chatMsgsContainer">Chat</div>
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
