import React from 'react'
import { Link } from 'react-router-dom';
import './Newin.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';

function NewIns({ service }) {
    const { _id, name, price, details, img } = service;
    return (


        <div className="col">
            <div className="card border-0 h-100">
                <Link to={`/women/saree/${_id}`} className=''>
                    <div className='card border-0'>
                        <div>
                            <img src={`data:img/png;base64,${img}`} class="card-img-top" alt="..." />
                        </div>
                        <div className="service-photo-detail">
                            <small className="service-title-photo">New</small>
                        </div>
                        <div className="card-img-overlay d-flex align-items-end justify-content-center">
                            <p className="rounded card-title pe-3 ps-3 bg-light"><VisibilityIcon /> <span>/</span> <ShoppingCartOutlinedIcon /> </p>
                        </div>
                    </div>
                </Link>
                <div className='text-center pt-2'>
                    <h6>{name}</h6>
                    <h5>৳ {price}</h5>
                </div>
            </div>
        </div>

    )
}

export default NewIns;