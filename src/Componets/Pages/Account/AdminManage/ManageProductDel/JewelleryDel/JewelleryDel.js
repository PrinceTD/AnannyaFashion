import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../../../Footer/Footer'
import Navbar from '../../../../Header/Navbar'
import Account from '../../../Account';
import del from '../../../../../../images/deleteP.png';

function JewelleryDel() {
    return (
        <div>
            <Navbar/>
            <div className='container pt-5 pb-5'>
            <div className='row'>
                <div className='col-md-3'>
                    <Account></Account>
                </div>
                <div className='col-md-9 padding-site'>
                    <div className="row row-cols-2 row-cols-md-3 g-3 admin-logo">
                        <div className="col">
                            <div className="card h-100">
                                <Link to='/myaccount/admin/manageproduct/jewellerydel/earringdel'>
                                    <Button sx={{ color: " black" }} variant="text">
                                        <div className='text-center p-2'>
                                            <img src={del}></img>
                                            <div className="card-body">
                                                <h5 className="card-title">EAR RING DELETE</h5>
                                            </div>
                                        </div>
                                    </Button>
                                </Link>

                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <Link to='/myaccount/admin/manageproduct/jewellerydel/nacklacedel'>
                                    <Button sx={{ color: " black" }} variant="text">
                                        <div className='text-center p-2'>
                                            <img src={del}></img>
                                            <div className="card-body">
                                                <h5 className="card-title">NACKLACES DELETE</h5>

                                            </div>
                                        </div>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <Link to='/myaccount/admin/manageproduct/jewellerydel/cokerdel'>
                                    <Button sx={{ color: " black" }} variant="text">
                                        <div className='text-center p-2'>
                                            <img src={del}></img>
                                            <div className="card-body">
                                                <h5 className="card-title">COKER DELETE</h5>

                                            </div>
                                        </div>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <Link to='/myaccount/admin/manageproduct/jewellerydel/otherdel'>
                                    <Button sx={{ color: " black" }} variant="text">
                                        <div className='text-center p-2'>
                                            <img src={del}></img>
                                            <div className="card-body">
                                                <h5 className="card-title">OTHERS DELETE</h5>

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

export default JewelleryDel