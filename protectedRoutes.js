import { Outlet, Navigate } from "react-router-dom";
import React from 'react';

const ProtectedRoutes = () => {
    let auth = {'token': localStorage.getItem('token')} // Retrieving token from localStorage

    return (
        auth.token ? <Outlet /> : <Navigate to="/" />
    );
}

export default ProtectedRoutes;
