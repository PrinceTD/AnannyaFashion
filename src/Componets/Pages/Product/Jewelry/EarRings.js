import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

function EarRings({ service }) {
    const { _id, name, price, details, img } = service;
    return (

        <div class="col">
            <div class="card">
                <img src={img} class="card-img-top" alt="..." height='250px' width={'200px'}/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
            </div>
        </div>



    )
}

export default EarRings