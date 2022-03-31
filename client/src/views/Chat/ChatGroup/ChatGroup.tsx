import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { io, Socket } from 'socket.io-client';
import HeaderReturn from '../../../components/HeaderReturn/HeaderReturn';
import userApi from '../../../utilities/api/user.api';
import { LuEvent } from '../../../utilities/types/Event';
import './chatGroup.css';
import { User } from '../../../utilities/types/User';
import './msg.css';

interface LocationState {
  state: { currentEvent: LuEvent }
}
interface Message {
  userName: string,
  userPhoto: string,
  userId: number,
  message: string,
  currentUserFlag: boolean,
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
  const [messagesState, setMessagesState] = useState<Message[] | null>(null);
  const userId = localStorage.getItem('id_user');
  const location = useLocation();
  const { state } = location as LocationState;
  const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io('http://localhost:4000');

  useEffect(() => {
    socket.emit('joinRoom', Number(userId), state.currentEvent.id_event);
  }, []);

  const createPost = ({
    userName, userPhoto, userId, message, currentUserFlag,
  }: Message) => {
    const containerMain = document.createElement('div');
    const containerSecondary = document.createElement('div');
    const containerTxt = document.createElement('div');
    const userNameEl = document.createElement('p');
    const userPhotoEl = document.createElement('img');
    const msgContentEl = document.createElement('p');
    const containerClass = `m__containerMain--${currentUserFlag}`;
    containerMain.classList.add('m__containerMain');
    containerMain.classList.add(containerClass);
    containerSecondary.classList.add('m__containerSecondary');
    containerTxt.classList.add('m__containerTxt');
    userNameEl.classList.add('m__userName');
    userPhotoEl.classList.add('m__userPhoto');
    msgContentEl.classList.add('m__content');
    containerMain.appendChild(containerSecondary);
    if (!currentUserFlag) {
      containerSecondary.appendChild(userPhotoEl);
    }
    userPhotoEl.setAttribute('src', userPhoto);
    userPhotoEl.setAttribute('alt', userName);
    containerSecondary.appendChild(containerTxt);
    if (!currentUserFlag) {
      containerTxt.appendChild(userNameEl);
    }
    containerTxt.appendChild(msgContentEl);
    msgContentEl.appendChild(document.createTextNode(message));
    userNameEl.appendChild(document.createTextNode(`${userName} `));
    document.getElementById('msgArea')!.appendChild(containerMain);
  };

  const fetchUser = (id: number) => userApi.getUserById(id).then((result) => result.data).catch();

  socket.on('basicEmit', async (userId, eventId, msg) => {
    const fetchedUser: User = await fetchUser(userId);
    const currentUserFlag: boolean = fetchedUser.id_user.toString() === localStorage.getItem('id_user');

    const message: Message = {
      userName: fetchedUser.first_name,
      userPhoto: fetchedUser.profile_picture,
      userId: fetchedUser.id_user,
      message: msg.toString(),
      currentUserFlag,
    };
    if (messagesState?.length) {
      setMessagesState([...messagesState, message]);
    } setMessagesState([message]);
    createPost(message);
  });

  const submitHandler = (e: any) => {
    e.preventDefault();
    const msg = e.target.elements.chat.value;
    socket.emit('emitMsgFromClient', Number(userId), state.currentEvent.id_event, msg);
  };

  return (
    <article className="cG">
      <HeaderReturn text={state.currentEvent.title} luEvent={state.currentEvent} socket={socket} />
      <div className="cG__mainContainer">
        <div id="msgArea" className="cG__chatMsgsContainer" />
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
