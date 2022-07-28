import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar';
import NewIns from './NewIns';
import banner from '../../../images/bannerT.jpg'

function NewIn() {
    const [service, setService] = useState([]);
    useEffect(() => {
        const url = "https://powerful-wildwood-87881.herokuapp.com/newin"
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    return (
        <div>
            <Navbar />
            <div class="card mb-3 border-0">
                <img src={banner} class="card-img" alt="..." />
                <div class="card-img-overlay d-flex justify-content-center align-items-center">
                    <h1 class="fw-bold fs-1 banner-text card-title">NEW PRODUCT</h1>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div className='text-center pb-3'>
                    <div>
                        {
                            service.length === 0 ? <CircularProgress />
                                :
                                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-4">
                                    {
                                        service.map(service => <NewIns
                                            key={service._id}
                                            service={service}
                                        ></NewIns>)
                                    }

                                </div>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NewIn;