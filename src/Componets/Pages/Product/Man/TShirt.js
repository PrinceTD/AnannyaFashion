import { Alert } from '@mui/material'
import React from 'react'
import Footer from '../../Footer/Footer'
import Navbar from '../../Header/Navbar'
import banner from '../../../../images/bannerT.jpg'

function TShirt() {
    return (
        <div>
            <Navbar />
            <div>
                <div>
                    <div className="card mb-3 border-0">
                        <img src={banner} className="card-img" alt="..." />
                        <div className="card-img-overlay d-flex justify-content-center align-items-center">
                            <h1 className="fw-bold fs-1 banner-text card-title">SHIRT</h1>
                        </div>
                    </div>
                </div>

                <div className='container mt-5 mb-5'>
                    <div className=' pt-5 pb-5'>
                        <Alert sx={{backgroundColor: '#e0b252', padding: " 25px 10px"}} variant="filled" severity="error">
                        No products were found matching your selection.
                        </Alert>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default TShirt