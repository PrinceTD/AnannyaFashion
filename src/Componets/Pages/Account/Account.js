import { Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './account.css'

function Account() {
    const {user, logOut} = useAuth();
    return (
        <div className='container'>
            <div className=''>
                <div className='border-account'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col"><h4>MY ACCOUNT</h4></th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className='color-link' scope="row"><Link to="/myaccount/admin">Admin</Link></th>
                            </tr>
                            <tr>
                                <th className='color-link active' scope="row"><Link to="/myaccount">Deshboard</Link></th>
                            </tr>
                            <tr>
                                <th className='color-link' scope="row"><Link to='/myaccount/order'>Order</Link></th>
                            </tr>
                            <tr>
                                <th className='color-link active' scope="row"><Link to="/myaccount/download">Downloads</Link></th>
                            </tr>
                            <tr>
                                <th className='color-link active' scope="row"><Link to="/myaccount/address">Address</Link></th>
                            </tr>
                            <tr>
                                <th scope="row"><Button 
                                        onClick={logOut}
                                        type='button'
                                        sx={{ color: " black" }}
                                         variant="text">
                                            Logout
                                            </Button>
                                         </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Account