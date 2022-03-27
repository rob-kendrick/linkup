import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PublicRoute() {
  return (localStorage.getItem('id_user'))
    ? <Navigate to="/events" />
    : <Outlet />;
}

export default PublicRoute;
