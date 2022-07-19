import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Account from '../../../Account'

function JewelleryDel() {
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
                                <Link to='/myaccount/admin/manageproduct/jewellerydel/earringdel'>
                                    <Button sx={{ color: " black" }} variant="text">
                                        <div className='text-center p-2'>
                                            {/* <img src={del}></img> */}
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
                                <Link to='/myaccount/admin/manageorder'>
                                    <Button sx={{ color: " black" }} variant="text">
                                        <div className='text-center p-2'>
                                            {/* <img src={manage}></img> */}
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
                                <Link to='/myaccount/download'>
                                    <Button sx={{ color: " black" }} variant="text">
                                        <div className='text-center p-2'>
                                            {/* <img src={download}></img> */}
                                            <div className="card-body">
                                                <h5 className="card-title">SET DELETE</h5>
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

export default JewelleryDel