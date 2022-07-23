import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

function EarRings({ service }) {
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

export default EarRings