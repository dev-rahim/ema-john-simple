import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const PrivateRoute = () => {
    const { user } = useAuth()
    const location = useLocation()
    return (
        user.displayName ? <Outlet /> : <Navigate to='/login' replace state={{ from: location }} />
    );
};

export default PrivateRoute;