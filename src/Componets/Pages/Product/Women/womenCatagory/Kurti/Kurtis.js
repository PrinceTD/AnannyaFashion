import React from 'react'
import { Link } from 'react-router-dom';

function Kurtis({service}) {
    const { _id, name, price, details, img } = service;
    return (
        <div class="col">
            <div class="card">
                <img src={img} class="card-img-top" alt="..." height='250px' width={'200px'}/>
                <div class="card-body">
                    <p class="card-title">{name}</p>
                    <p class="card-text">{price}</p>
                    <Link to={`/women/kurti/${_id}`}>
                        <button style={{ backgroundColor: "coral", padding: "5px 15px", color: "#fff" }} className="border-0 rounded-pill">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Kurtis