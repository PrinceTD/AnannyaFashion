import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import Footer from '../../../Footer/Footer';
import Navbar from '../../../Header/Navbar';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';

function SingleNecklecs() {
    const [service, setService] = useState({});
    const { register, handleSubmit, watch, formState: { error } } = useForm();

    const onSubmit = data => alert(JSON.stringify(data));
    const { serviceId } = useParams();
    useEffect(() => {
        fetch(`https://powerful-wildwood-87881.herokuapp.com/necklace/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, []);
    return (
        <div className=''>
            <Navbar />
            <div className="container">
                <div className="card mb-3 border-0">
                    <div className="row g-4">

                        <div className="col-md-6">
                            <img src={`data:img/png;base64,${service.img}`} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="">
                                    <small><Link to={"/home"}>Home</Link>/<Link to={"/women"}>Women</Link>/<Link to={"/man"}>Man</Link> </small>
                                    <div className=''>
                                        <h2 className="pt-2">{service.name}</h2>
                                        <div>
                                            <span>
                                                <h4 className='pt-2'>৳ {service.price}</h4>
                                            </span>
                                            <span>
                                                <small><span className='pt-2 fst-normal'>{service.details}</span></small>
                                            </span>
                                        </div>
                                        <div className='pt-3'>
                                            {/* <p><b className='pe-1'>Size:</b>
                                                <select className='w-50 rounded p-1'{...register('size', { required: "size is required" })}>
                                                    <option value="">Choose an option</option>
                                                    <option value="38">38</option>
                                                    <option value="40">40</option>
                                                    <option value="42">42</option>
                                                    <option value="44">44</option>
                                                </select>
                                            </p> */}

                                        </div>

                                        <p className='pt-2'>
                                            <span className='border p-2'><AddIcon /></span>
                                            <span className='border p-2'>1</span>
                                            <span className='border p-2'> <RemoveIcon /></span>
                                            <Button
                                                sx={{ backgroundColor: '#005252', marginLeft: "15px", color: "#fff", width: "30%" }}
                                                type='submit'
                                                disabled
                                            >Add to cart</Button>
                                        </p>
                                        <hr />
                                        <p>
                                            <b>Share:</b>
                                            <span className='ps-2'>
                                                <FacebookIcon />
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default SingleNecklecs