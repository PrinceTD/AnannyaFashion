import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function SingleKurti() {
    const [service, setService] = useState({});
    const { serviceId } = useParams();
    useEffect(() => {
        fetch(`https://powerful-wildwood-87881.herokuapp.com/earring/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, []);
    return (
        <div className='container'>
            <div className="">
                <div class="card mb-3 border-0">
                    <div class="row g-4">
                        <div class="col-md-6">
                            <img src={service.img} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-6">
                            <div class="">
                                <small><Link to={"/home"}>Home</Link>/<Link to={"/women"}>Women</Link>/<Link to={"/man"}>Man</Link> </small>
                                <div className=''>
                                    <h2 class="pt-2">{service.name}</h2>
                                    <h4 className='pt-2'>৳ {service.price}</h4>
                                    <small><span className='pt-2 fst-normal'>{service.details}</span></small>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleKurti