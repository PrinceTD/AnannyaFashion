
import { Alert } from '@mui/material'
import React from 'react'
import Footer from '../../../Footer/Footer'
import Navbar from '../../../Header/Navbar'
import banner from '../../../../../images/bannerT.jpg'

function Panjabi() {
    return (
        <div>
            <Navbar />
            <div>
                <div class="card mb-3 border-0">
                    <img src={banner} class="card-img" alt="..." />
                    <div class="card-img-overlay d-flex justify-content-center align-items-center">
                        <h1 class="fw-bold fs-1 banner-text card-title">PANJABI</h1>
                    </div>
                </div>
            </div>
            <div className='container mt-5 mb-5'>
                <div className=' pt-5 pb-5'>
                    <Alert sx={{ backgroundColor: '#fcb900' }} variant="filled" severity="error">
                        No products were found matching your selection.
                    </Alert>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Panjabi