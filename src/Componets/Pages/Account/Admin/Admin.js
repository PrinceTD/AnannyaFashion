import { Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth'
import Account from '../Account'
import './Admin.css'
import order from '../../../../images/order.png'
import download from '../../../../images/download.svg'
import addAdmin from '../../../../images/add.png'
import admin from '../../../../images/admin.png'

function Admin() {
    const { user } = useAuth();

    return (

        <div>
            <div className='container pt-5 pb-5'>
                <div className='row'>
                    <div className='col-md-3'>
                        <Account></Account>
                    </div>
                    <div className='col-md-9 padding-site'>
                        <div>
                            <p>Your Account <b>{user.email}</b>. It's a admin account, so you can edit all products in this page. </p>
                        </div>
                        <div className="row row-cols-2 row-cols-md-3 g-3 admin-logo">
                            <div className="col">
                                <div className="card h-100">
                                    <Link to='/myaccount/admin'>
                                        <Button sx={{ color: " black" }} variant="text">
                                            <div className='text-center p-2'>
                                                <img src={admin}></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">ADMIN</h5>
                                                </div>
                                            </div>
                                        </Button>
                                    </Link>

                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <Link to='/myaccount/order'>
                                        <Button sx={{ color: " black" }} variant="text">
                                            <div className='text-center p-2'>
                                                <img src={order}></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">ORDER</h5>

                                                </div>
                                            </div>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <Link to='/myaccount/download'>
                                        <Button sx={{ color: " black" }} variant="text">
                                            <div className='text-center p-2'>
                                                <img src={download}></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">DOWNLOADS</h5>
                                                </div>
                                            </div>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <Link to='/myaccount/admin/makeadmin'>
                                        <Button sx={{ color: " black" }} variant="text">
                                            <div className='text-center p-2'>
                                                <img src={addAdmin}></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">ADD ADMIN</h5>
                                                </div>
                                            </div>
                                        </Button>
                                    </Link>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin