import React from 'react'
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';

function MoreNeckleces({ service }) {
    const { _id, name, price, details, img } = service;
    return (
        <div className="col">
            <div className="card border-0 h-100">
                <Link to={`/jewellary/necklace/${_id}`} className=''>
                    <div className='card border-0'>
                        <img src={`data:img/png;base64,${img}`} class="card-img-top" alt="..." width={'100%'}/>
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

export default MoreNeckleces