import React from 'react'
import { Link } from 'react-router-dom';

export default function Pants({ service }) {
    const { _id, name, price, details, img } = service;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} alt="" height='50%' />
                <div className="card-body">
                    <h5 style={{ color: "coral" }} className="card-title">{name}</h5>               
                    <h3>$ {price}</h3>
                    <div className="d-flex justify-content-between">
                        <Link to={`/women/pant/${_id}`}>
                            <button style={{ backgroundColor: "coral", padding: "5px 15px", color: "#fff" }} className="border-0 rounded-pill">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
