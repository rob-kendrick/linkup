import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
  return (localStorage.getItem('id_user'))
    ? <Outlet />
    : <Navigate to="/start" />;
}

export default ProtectedRoute;
