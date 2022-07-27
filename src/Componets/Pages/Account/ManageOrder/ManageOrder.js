import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Account from '../Account'

import jewellary from '../../../../images/jewelry.png'
import girl from '../../../../images/girl.png'
import HomePageManage from '../../../../images/property.png'
import surprise from '../../../../images/surprise.png'
import man from '../../../../images/man.png'
import Navbar from '../../Header/Navbar';
import Footer from '../../Footer/Footer'
function ManageOrder() {
    return (
        <div>
            <Navbar />
            <div className='container pt-5 pb-5'>
                <div className='row'>
                    <div className='col-md-3'>
                        <Account></Account>
                    </div>
                    <div className='col-md-9 padding-site'>
                        <div className="row row-cols-2 row-cols-md-3 g-3 admin-logo">
                            <div className="col">
                                <div className="card h-100">
                                    <Link to='/myaccount/admin/manageorder/jewellery'>
                                        <Button sx={{ color: " black" }} variant="text">
                                            <div className='text-center p-2'>
                                                <img src={jewellary}></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">JEWELLARY ADD</h5>
                                                </div>
                                            </div>
                                        </Button>
                                    </Link>

                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <Link to='/myaccount/admin/manageorder/homepage'>
                                        <Button sx={{ color: " black" }} variant="text">
                                            <div className='text-center p-2'>
                                                <img src={HomePageManage}></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">Home Page Manage</h5>

                                                </div>
                                            </div>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <Link to='/myaccount/admin/manageorder/womenadd'>
                                        <Button sx={{ color: " black" }} variant="text">
                                            <div className='text-center p-2'>
                                                <img src={girl}></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">WOMEN ADD</h5>

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
                                                <img src={man}></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">Man ADD</h5>
                                                </div>
                                            </div>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <Link to='/myaccount/admin/manageorder/packageadd'>
                                        <Button sx={{ color: " black" }} variant="text">
                                            <div className='text-center p-2'>
                                                <img src={surprise}></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">SURPRISE PACKAGE</h5>
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
            <Footer />
        </div>
    )
}

export default ManageOrder