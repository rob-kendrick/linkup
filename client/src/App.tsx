import React from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import BrowseEvents from './views/BrowseEvents/BrowseEvents';
import MyEvents from './views/MyEvents/MyEvents';
import ChatList from './views/Chat/ChatList/ChatList';
import Profile from './views/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import ProfileEdit from './views/Profile/ProfileEdit/ProfileEdit';
import Friends from './views/Profile/Friends/Friends';
import ChangePassword from './views/Profile/ChangePassword/ChangePassword';
import EventDetails from './components/EventDetails/EventDetails';

function App() {
  const { pathname } = useLocation();
  return (
    <div className="app-container-delete">
      <Routes>
        <Route path="/" element={<BrowseEvents />} />
        <Route path="events/:eventid" element={<EventDetails />} />
        <Route path="browseevents" element={<BrowseEvents />} />
        <Route path="myevents" element={<MyEvents />} />
        <Route path="chatlist" element={<ChatList />} />
        <Route path="profile" element={<Profile />}>
          <Route path="friends" element={<Friends />} />
          <Route path="profileedit" element={<ProfileEdit />} />
          <Route path="changepassword" element={<ChangePassword />} />
        </Route>
      </Routes>
      {/* TODO: delete path name */}
      <div>
        path name:
        {pathname}
      </div>
      {(pathname === '/'
      || pathname === '/browseevents'
      || pathname === '/myevents'
      || pathname === '/chatlist'
      || pathname === '/profile')
      && <Navbar />}
    </div>
  );
}

export default App;
