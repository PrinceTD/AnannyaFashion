import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Footer from '../../../Footer/Footer';
import Navbar from '../../../Header/Navbar';
import MoreNeckleces from './MoreNeckleces';
import banner from '../../../../../images/bannerT.jpg'


function Necklecs() {

    const [service, setService] = useState([]);
    useEffect(() => {
        const url = "https://powerful-wildwood-87881.herokuapp.com/necklace"
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    return (
        <div>
            <Navbar />
            <div>
                <div class="card mb-3 border-0">
                    <img src={banner} class="card-img" alt="..." />
                    <div class="card-img-overlay d-flex justify-content-center align-items-center">
                        <h1 class="fw-bold fs-1 banner-text card-title">NECKLECS</h1>
                    </div>
                </div>
            </div>

            <div className="container mt-5 mb-5">
                <div>
                    <div className='pb-3 text-center'>
                        <div>
                            {service.length === 0 ? <CircularProgress /> :
                                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-4">
                                    {
                                        service.map(service => <MoreNeckleces
                                            key={service._id}
                                            service={service}
                                        ></MoreNeckleces>)
                                    }

                                </div>}

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Necklecs