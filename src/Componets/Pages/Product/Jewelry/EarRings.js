import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

function EarRings({ service }) {
    const { _id, name, price, details, img } = service;
    return (

        <div className="col">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." height='250px' width={'200px'}/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
            </div>
        </div>



    )
}

export default EarRings