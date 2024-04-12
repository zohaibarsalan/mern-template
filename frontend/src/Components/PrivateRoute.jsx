import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = () => {
  const accessToken = localStorage.getItem('accessToken');
  return accessToken ? null : <Navigate to="/login" />;
};
export default PrivateRoute;
