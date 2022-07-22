import { Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar';
import './account.css'



function Account() {
    const { user, logOut, admin } = useAuth();
    return (
        <div className=''>
          
            <div className='container'>
                <div className='border-account'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"><h4>MY ACCOUNT</h4></th>

                            </tr>
                        </thead>
                        <tbody>
                            {admin &&
                                <tr>
                                    <th className='color-link' scope="row"><Link to="/myaccount/admin">Admin</Link></th>
                                </tr>}
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