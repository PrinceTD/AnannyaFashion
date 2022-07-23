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

        <div className="col">
            <div className="card">
                <img src={`data:img/png;base64,${img}`} className="card-img-top" alt="..." height='250px' width={'200px'}/>
                <div className="card-body">
                    <p className="card-title">{name}</p>
                    <p className="card-text">{price}</p>
                    <Link to={`/jewellary/earring/${_id}`}>
                        <button style={{ backgroundColor: "coral", padding: "5px 15px", color: "#fff" }} className="border-0 rounded-pill">Details</button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default MoreNeckleces