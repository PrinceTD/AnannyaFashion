
import { Alert } from '@mui/material'
import React from 'react'
import Footer from '../../../Footer/Footer'
import Navbar from '../../../Header/Navbar'

function Panjabi() {
    return (
        <div>
            <Navbar />
            <div className='container'>
                <Alert variant="outlined" severity="error">
                    This is an error alert — check it out!
                </Alert>
            </div>
            <Footer />
        </div>
    )
}

export default Panjabi