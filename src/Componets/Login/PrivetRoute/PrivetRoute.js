import { CircularProgress } from '@mui/material';
import React from 'react'
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


export default function PrivetRoute({ children, ...rest }) {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) {
        return <CircularProgress></CircularProgress>
    }
    if (user.email) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} />
}
