import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';
import { DotLoader } from 'react-spinners';

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return (
      <div className="flex h-full justify-center items-center">
        <DotLoader color="#65A15A" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth/login" state={location.pathname}></Navigate>;
  }

  return children;
};

export default PrivetRoute;
