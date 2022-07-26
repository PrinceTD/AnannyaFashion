import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Footer from '../../../Footer/Footer';
import Navbar from '../../../Header/Navbar';
import MoreNeckleces from './MoreNeckleces';


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

            <div className="container mt-5 mb-5">
                <div>
                    <div className='pb-3'>
                        <h2 style={{ color: "coral" }}>Our Products</h2>
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