import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function SingleNewIn() {
    const [service, setService] = useState({});
    const { serviceId } = useParams();
    useEffect(() => {
        fetch(`https://tranquil-ridge-16978.herokuapp.com/product/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, []);

    const handelAddtoCard = e => {
        const addToCard = {
            
        }

        e.preventDefault();
    }

    return (
        <div className='container'>
            <div className="">
                <div className="card mb-3 border-0">
                    <div className="row g-4">
                        <div className="col-md-6">
                            <img src={service.img} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="">
                                <small><Link to={"/home"}>Home</Link>/<Link to={"/women"}>Women</Link>/<Link to={"/man"}>Man</Link> </small>
                                <div className=''>
                                    <h2 className="pt-2">{service.name}</h2>
                                    <h4 className='pt-2'>৳ {service.price}</h4>
                                    <small><span className='pt-2 fst-normal'>{service.details}</span></small>
                                    <br />
                                    <button>add to card</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleNewIn