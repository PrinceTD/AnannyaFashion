import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Account from '../Account'
import del from '../../../../images/delete.png'
import delF from '../../../../images/delete-file.png'
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'

function ManageAllProduct() {

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

                                <Link to='/myaccount/admin/manageproduct/jewellerydel'>
                                    <div className="card h-100">
                                        <Button sx={{ color: " black" }} variant="text">
                                            <div className='text-center p-2'>
                                                <img src={delF}></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">JEWELLARY DELETE</h5>
                                                </div>
                                            </div>
                                        </Button>
                                    </div>
                                </Link>


                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <Link to='/myaccount/admin/manageproduct/womendel'>
                                        <Button sx={{ color: " black" }} variant="text">
                                            <div className='text-center p-2'>
                                                <img src={delF}></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">WOMEN PRODUCT DELETE </h5>

                                                </div>
                                            </div>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">

                                <Link to='/myaccount/admin/manageproduct/mendel'>
                                    <div className="card h-100">
                                        <Button sx={{ color: " black" }} variant="text">
                                            <div className='text-center p-2'>
                                                <img src={delF}></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">MEN PRODUCT DELETE</h5>
                                                </div>
                                            </div>
                                        </Button>
                                    </div>
                                </Link>

                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <Link to='/myaccount/admin/manageproduct/homepmdel'>
                                        <Button sx={{ color: " black" }} variant="text">
                                            <div className='text-center p-2'>
                                                <img src={delF}></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">HOME PAGE MANAGE DELETE</h5>
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

export default ManageAllProduct