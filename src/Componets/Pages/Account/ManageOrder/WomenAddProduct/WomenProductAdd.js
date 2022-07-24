import React from 'react'
import Account from '../../Account'

import saree from '../../../../../images/saree.png'
import kurti from '../../../../../images/kurti.png'
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
                                    <Link to='/myaccount/admin/manageorder/womenadd/sareeadd'>
                                        <Button sx={{ color: " black" }} variant="text">
                                            <div className='text-center p-2'>
                                                <img src={saree}></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">SAREE</h5>
                                                </div>
                                            </div>
                                        </Button>
                                    </Link>

                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <Link to='/myaccount/admin/manageorder/womenadd/kurtiadd'>
                                        <Button sx={{ color: " black" }} variant="text">
                                            <div className='text-center p-2'>
                                                <img src={kurti}></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">KURTI</h5>

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
                                                {/* <img src={download}></img> */}
                                                <div className="card-body">
                                                    <h5 className="card-title">jj</h5>
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

export default WomenProductAdd