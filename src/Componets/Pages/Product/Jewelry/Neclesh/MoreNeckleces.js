import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEye, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function MoreNeckleces({ service }) {
    const { _id, name, price, details, img } = service;
    return (

        <div class="col">
            <div class="card">
                <img src={img} class="card-img-top" alt="..." height='250px' width={'200px'} />
                <div class="card-body">
                    <p>{name}</p>
                    <p>{price}</p>

                    <Link to={`/jewellary/necklace/${_id}`}>
                        <button style={{ backgroundColor: "coral", padding: "5px 15px", color: "#fff" }} className="border-0 rounded-pill">Details</button>
                    </Link>
                </div>
            </div>
        </div>





        // <div class="col">
        //     <div class="card h-100">

        //             <img src={img} alt="" height='50%' />

        //         <div class="card-body">
        //             <h5 style={{ color: "coral" }} class="card-title">{name}</h5>
        //             <h3>$ {price}</h3>
        //             <div className="d-flex justify-content-between">
        //                 <Link to={`/jewellary/necklace/${_id}`}>
        //                     <button style={{ backgroundColor: "coral", padding: "5px 15px", color: "#fff" }} className="border-0 rounded-pill">Details</button>
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
        //     <div className='overlay'>
        //         <button className='btn btn-secondary' type='button'><FontAwesomeIcon icon={faEye} /></button>
        //         <button className='btn btn-secondary' type='button'> <FontAwesomeIcon icon={faHeart} /></button>
        //         <button className='btn btn-secondary' type='button'><FontAwesomeIcon icon={faShoppingCart} /></button>
        //     </div>
        // </div>
    )
}

export default MoreNeckleces