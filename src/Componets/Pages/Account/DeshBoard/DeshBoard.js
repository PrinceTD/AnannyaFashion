import { Button } from '@mui/material';
import React from 'react'
import useAuth from '../../../../hooks/useAuth';
import Account from '../Account'
import './deshboard.css'
import order from '../../../../images/order.png'
import download from '../../../../images/download.png'
import address from '../../../../images/location.png'
import logout from '../../../../images/logout.png'
import adminLogo from '../../../../images/admin.png'
import { Link } from 'react-router-dom';
import Navbar from '../../Header/Navbar';
import Footer from '../../Footer/Footer';


function DeshBoard() {
    const { user, logOut, admin } = useAuth();
    return (
        <div>
            <Navbar />
            <div className='container pt-5 pb-5'>
                <div className='row'>
                    <div className='col-md-3'>
                        <Account></Account>
                    </div>
                    <div className='col-md-9 padding-site'>
                        <div>
                            <div>
                                Hello, <b>{user.email}</b>  (not <b>{user.email}</b>? <Button onClick={logOut} sx={{ color: " black" }}>Logout</Button>)
                            </div>
                            <div className='pt-3'>
                                <div className="row row-cols-2 row-cols-md-3 g-3 pictuire-logo">


                                    {
                                        admin &&
                                        <div className="col">
                                            <div className="card h-100">
                                                <Link to='/myaccount/admin'>
                                                    <Button sx={{ color: " black" }} variant="text">
                                                        <div className='text-center p-2'>
                                                            <img src={adminLogo}></img>
                                                            <div className="card-body">
                                                                <h5 className="card-title">ADMIN</h5>
                                                            </div>
                                                        </div>
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    }



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
                                            <Link to='/myaccount/address'>
                                                <Button sx={{ color: " black" }} variant="text">
                                                    <div className='text-center p-2'>
                                                        <img src={address}></img>
                                                        <div className="card-body">
                                                            <h5 className="card-title">ADDRESS</h5>
                                                        </div>
                                                    </div>
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card h-100">
                                            <Button
                                                onClick={logOut}
                                                type='button'
                                                sx={{ color: " black" }}
                                                variant="text">
                                                <div className='text-center p-2'>
                                                    <img src={logout}></img>
                                                    <div className="card-body">
                                                        <h5 className="card-title">LOGOUT</h5>
                                                    </div>
                                                </div>
                                            </Button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DeshBoard