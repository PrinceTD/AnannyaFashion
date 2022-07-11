import { Button } from '@mui/material';
import React from 'react'
import useAuth from '../../../../hooks/useAuth';
import Account from '../Account'
import './deshboard.css'

function DeshBoard() {
    const {user, logOut} =useAuth();
    return (
        <div className='container pt-5 pb-5'>
            <div className='row'>
                <div className='col-md-3'>
                    <Account></Account>
                </div>
                <div className='col-md-9 padding-site'>
                Hello, <b>{user.email}</b>  (not <b>{user.email}</b>? <Button onClick={logOut} color="secondary">Logout</Button>)
                </div>
            </div>
        </div>
    )
}

export default DeshBoard