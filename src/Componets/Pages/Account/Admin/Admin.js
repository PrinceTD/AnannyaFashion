import { Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth'
import Account from '../Account'
import './Admin.css'
import addOrder from '../../../../images/Porder.png'
import manage from '../../../../images/manage.png'
import addAdmin from '../../../../images/add.png'
import manageOrder from '../../../../images/manageOrder.png'
import Navbar from '../../Header/Navbar';
import Footer from '../../Footer/Footer';

function Admin() {
    const { user } = useAuth();

    return (

        <div>
            <Navbar/>
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
                                    <Link to='/myaccount/admin/managevieworder'>
                                        <Button sx={{ color: " black" }} variant="text">
                                            <div className='text-center p-2'>
                                                <img src={manageOrder}></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">MANAGE ORDER</h5>
                                                </div>
                                            </div>
                                        </Button>
                                    </Link>

                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <Link to='/myaccount/admin/manageorder'>
                                        <Button sx={{ color: " black" }} variant="text">
                                            <div className='text-center p-2'>
                                                <img src={addOrder}></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">ADD PRODUCTS</h5>

                                                </div>
                                            </div>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <Link to='/myaccount/admin/manageproduct'>
                                        <Button sx={{ color: " black" }} variant="text">
                                            <div className='text-center p-2'>
                                                <img src={manage}></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">MANAGE PRODUCT</h5>
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
            <Footer/>
        </div>
    )
}

export default Admin