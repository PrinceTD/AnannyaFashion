import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import banner from '../../../images/JB.jpg'

function JewelleryBanner() {
    return (
        <div className='mt-5 mb-5 pt-5'>
            <div className='  bgColor'>
                <div class="container">

                    <div class="pt-4 pb-5 row g-4">
                        <div class="col-md-7">
                            <Link to='/jewellary'> <img src={banner} className="img-fluid rounded" alt="..." width={'100%'} /></Link>
                        </div>
                        <div className="col-md-5 d-flex align-items-center text-center">
                            <div class="card-body">
                                <h2 className="card-title">OUR JEWELLARY</h2>
                                <Link to='/jewellary'><Button variant="outlined">SHOP NOW</Button></Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div >
    )
}

export default JewelleryBanner