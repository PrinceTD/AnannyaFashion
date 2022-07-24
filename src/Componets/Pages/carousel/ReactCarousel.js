import { CircularProgress } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';


export default function ReactCarousel({ service }) {
    const { _id, name, price, details, img } = service;
    return (
        <div>
           
                    <div className="text-center p-4">
                        <div className="">
                            <div>
                                <img src={`data:img/png;base64,${img}`} className="card-img-top" alt="..." height='250px' width={'200px'} />
                            </div>
                            <div className="card-body">
                                <p className="card-title">{name}</p>
                                <p className="card-text">{price}</p>
                                <Link to={`/bestsells/${_id}`}>
                                    <button style={{ backgroundColor: "coral", padding: "5px 15px", color: "#fff" }} className="border-0 rounded-pill">Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
            
        </div>
    )
}
