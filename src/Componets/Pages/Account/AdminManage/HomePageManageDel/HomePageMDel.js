import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../../Footer/Footer'
import Navbar from '../../../Header/Navbar'
import Account from '../../Account'
import delF from '../../../../../images/deleteP.png'

function HomePageMDel() {
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
                                <Link to='/myaccount/admin/manageproduct/homepmdel/bannerdel'>
                                    <div className="card h-100">
                                        <Button sx={{ color: " black" }} variant="text">
                                            <div className='text-center p-2'>
                                                <img src={delF}></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">BANNER DELETE</h5>
                                                </div>
                                            </div>
                                        </Button>
                                    </div>
                                </Link>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <Link to='/myaccount/admin/manageproduct/homepmdel/bestspdel'>
                                        <Button sx={{ color: " black" }} variant="text">
                                            <div className='text-center p-2'>
                                                <img src={delF}></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">BEST PRODUCT DELETE </h5>
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

export default HomePageMDel