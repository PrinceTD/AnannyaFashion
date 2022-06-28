import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function SinglePant() {
    const [service, setService] = useState({});
    const { serviceId } = useParams();
    useEffect(() => {
        fetch(`https://tranquil-ridge-16978.herokuapp.com/product/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, []);
    return (
        <div className='container'>
            <div className="d-flex justify-content-center">
                <h2> {service._id}</h2>
                
                <p>{service.name}</p>
                <div >
                    {/* <div class="card" style={{ width: "30rem" }}>
                        <img src={service?.img} alt="" />
                        <h2 style={{ color: "coral" }}>{service?.name}</h2>
                        <div class="card-body">
                            <p class="card-text">{service?.details}</p>
                            <h4>${service?.price}</h4>
                        </div>
                        <Link to='/home'>
                            <button style={{ backgroundColor: "coral", padding: "5px 15px", color: "#fff" }} className="border-0 rounded-pill">Go Back</button>
                        </Link>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
