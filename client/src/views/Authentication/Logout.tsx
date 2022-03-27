import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

function Logout() {
  useEffect(() => {
    localStorage.removeItem('id_user');
    localStorage.removeItem('accessToken');
  }, []);

  return (
    <Navigate to="/start" />
  );
}

export default Logout;
