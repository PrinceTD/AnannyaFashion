import React from 'react'
import Account from '../../Account'

import saree from '../../../../../images/saree.png'
import blouse from '../../../../../images/blouse.png'
import sawalar from '../../../../../images/sawalar.png'
import kurti from '../../../../../images/kurti.png'
import orna from '../../../../../images/orna.png'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import Navbar from '../../../Header/Navbar'
import Footer from '../../../Footer/Footer'

function WomenProductAdd() {
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
                                    {/* <Link to='/myaccount/admin/manageorder/womenadd/sareeadd'> */}
                                        <Button disabled sx={{ color: " black" }} variant="text">
                                            <div className='text-center p-2'>
                                                <img src={saree}></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">SAREE ADD</h5>
                                                </div>
                                            </div>
                                        </Button>
                                    {/* </Link> */}

                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <Link to='/myaccount/admin/manageorder/womenadd/kurtiadd'>
                                        <Button sx={{ color: " black" }} variant="text">
                                            <div className='text-center p-2'>
                                                <img src={kurti}></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">KURTI ADD</h5>

                                                </div>
                                            </div>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    {/* <Link to='/myaccount/admin/manageorder/womenadd/salaweradd'> */}
                                        <Button disabled sx={{ color: " black" }} variant="text">
                                            <div className='text-center p-2'>
                                                <img src={sawalar}></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">SALAWER KAMEEZ ADD</h5>
                                                </div>
                                            </div>
                                        </Button>
                                    {/* </Link> */}
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    {/* <Link to='/myaccount/admin/manageorder/womenadd/blouseadd'> */}
                                        <Button disabled sx={{ color: " black" }} variant="text">
                                            <div className='text-center p-2'>
                                                <img src={blouse}></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">BLOUSE ADD</h5>
                                                </div>
                                            </div>
                                        </Button>
                                    {/* </Link> */}
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    {/* <Link to='/myaccount/admin/manageorder/womenadd/ornaadd'> */}
                                        <Button disabled sx={{ color: " black" }} variant="text">
                                            <div className='text-center p-2'>
                                                <img src={orna}></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">ORNA ADD</h5>
                                                </div>
                                            </div>
                                        </Button>
                                    {/* </Link> */}
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

export default WomenProductAdd