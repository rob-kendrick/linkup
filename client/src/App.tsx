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
import BrowseEventsFilters from './views/BrowseEvents/EventsFilters/EventsFilters';
import FilterTitle from './views/BrowseEvents/EventsFilters/Filters/FilterTitle';
import FilterTags from './views/BrowseEvents/EventsFilters/Filters/FilterTags/FilterTags';
import FilterHosts from './views/BrowseEvents/EventsFilters/Filters/FilterHosts';
import FilterParticipants from './views/BrowseEvents/EventsFilters/Filters/FilterParticipants';
import CreateEvent from './views/MyEvents/CreateEvent/CreateEvent';
import AddParticipants from './views/MyEvents/CreateEvent/AddParticipants/AddParticipants';
import ChatGroup from './views/Chat/ChatGroup/ChatGroup';
import UserDetails from './views/Profile/Friends/UserDetails/UserDetails';

function App() {
  const { pathname } = useLocation();
  return (
    <div className="app-container-delete">
      <Routes>
        <Route path="/" element={<BrowseEvents />} />
        <Route path="events/:eventid" element={<EventDetails />} />
        <Route path="events/:eventid/chat" element={<ChatGroup />} />
        <Route path="events" element={<BrowseEvents />} />
        <Route path="events/filters" element={<BrowseEventsFilters />} />
        <Route path="events/filters/title" element={<FilterTitle />} />
        <Route path="events/filters/tags" element={<FilterTags />} />
        <Route path="events/filters/hosts" element={<FilterHosts />} />
        <Route path="events/filters/participants" element={<FilterParticipants />} />
        <Route path="myevents" element={<MyEvents />} />
        <Route path="myevents/create" element={<CreateEvent />} />
        <Route path="myevents/create/participants" element={<AddParticipants />} />
        <Route path="chatlist" element={<ChatList />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/friends" element={<Friends />} />
        <Route path="users/:userid" element={<UserDetails />} />
        <Route path="profile/profileedit" element={<ProfileEdit />} />
        <Route path="profile/changepassword" element={<ChangePassword />} />
      </Routes>
      {(pathname === '/'
      || pathname === '/events'
      || pathname === '/myevents'
      || pathname === '/chatlist'
      || pathname === '/profile')
      && <Navbar />}
    </div>
  );
}

export default App;
