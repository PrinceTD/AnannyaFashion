import React from 'react'
import Account from '../../Account'

import earRing from '../../../../../images/ear.png'
import necklace from '../../../../../images/necklace.png'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'


function Jewellary() {
    return (
        <div className='container pt-5 pb-5'>
            <div className='row'>
                <div className='col-md-3'>
                    <Account></Account>
                </div>
                <div className='col-md-9 padding-site'>
                    <div className="row row-cols-2 row-cols-md-3 g-3 admin-logo">
                        <div className="col">
                            <div className="card h-100">
                                <Link to='/myaccount/admin/manageorder/jewellery/earring'>
                                    <Button sx={{ color: " black" }} variant="text">
                                        <div className='text-center p-2'>
                                            <img src={earRing}></img>
                                            <div className="card-body">
                                                <h5 className="card-title">ADD EAR RING</h5>
                                            </div>
                                        </div>
                                    </Button>
                                </Link>

                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <Link to='/myaccount/admin/manageorder/jewellery/necklace'>
                                    <Button sx={{ color: " black" }} variant="text">
                                        <div className='text-center p-2'>
                                            <img src={necklace}></img>
                                            <div className="card-body">
                                                <h5 className="card-title">ADD NECKLECES</h5>

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
                                                <h5 className="card-title">DOWNLOADS</h5>
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
    )
}

export default Jewellary