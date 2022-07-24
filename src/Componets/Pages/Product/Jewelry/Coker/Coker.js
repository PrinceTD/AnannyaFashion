import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Footer from '../../../Footer/Footer'
import Navbar from '../../../Header/Navbar'
import Cokers from './Cokers';

function Coker() {
    const [service, setService] = useState([]);
    useEffect(() => {
        const url = "http://localhost:5000/coker"
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    return (
        <div>
            <div >
                <Navbar />
                <div className="container mt-5 mb-5">
                    <div className='text-center pb-3'>
                        <h2 style={{ color: "black" }}>Our Products</h2>

                        <div>
                            {service.length === 0 ? <CircularProgress /> :
                                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-4">
                                    {
                                        service.map(service => <Cokers
                                            key={service._id}
                                            service={service}
                                        ></Cokers>)
                                    }

                                </div>}

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
    </div>
    )
}

export default Coker