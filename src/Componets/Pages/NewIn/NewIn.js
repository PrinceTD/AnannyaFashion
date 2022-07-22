import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar';
import NewIns from './NewIns';

function NewIn() {
    const [service, setService] = useState([]);
    useEffect(() => {
        const url = "https://tranquil-ridge-16978.herokuapp.com/product"
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    return (
        <div>
            <Navbar/>
            <div  className="container mt-5 mb-5">
                <div className='text-center pb-3'>
                    <h2 style={{ color: "coral" }}>Our Products</h2>
                    <p style={{ color: "gray" }}>Our upholstery range is available in a furniture in a beautiful array of colours and types. To see the full range please come and see us in store, or alternatively contact us to discuss your ideas and we can post out samples to your home. Each and every sofa comes with a 10 year frame guarantee. </p>
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
            <Footer/>
        </div>
    )
}

export default NewIn;