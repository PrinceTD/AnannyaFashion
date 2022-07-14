import { CircularProgress } from '@mui/material';
import React from 'react'
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


export default function AdminRoute({ children, ...rest }) {
    const { user, admin, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) {
        return <CircularProgress></CircularProgress>
    }
    if (user.email && admin) {
        return children;
    }
    return <Navigate to='*' state={{ from: location }} />
}
