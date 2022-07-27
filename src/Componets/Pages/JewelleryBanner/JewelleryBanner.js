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
                        <img src={banner} class="img-fluid rounded-start" alt="..." width={'100%'} />
                    </div>
                    <div class="col-md-5 d-flex align-items-center text-center">
                        <div class="card-body">
                            <h2 class="card-title">OUR JEWELLARY</h2>
                            <Link to='/jewellary'><Button>SHOP NOW</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default JewelleryBanner