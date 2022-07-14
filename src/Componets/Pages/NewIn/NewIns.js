import React from 'react'
import { Link } from 'react-router-dom';
import './Newin.css'

function NewIns({ service }) {
    const { _id, name, price, details, img } = service;
    return (
        <div class="col">
            <div class="card h-100">
                <div>
                    <div className='service-photo'>
                        <img src={service.img} className="card-img-top" alt="" />
                    </div>
                    <div className="service-photo-detail">
                        <small className="service-title-photo">New</small>
                    </div>
                </div>

                <div class="card-body card-new">
                    <div>
                        <h5 style={{ color: "coral" }} class="card-title">{name}</h5>
                        <h3>$ {price}</h3>
                        <div className="d-flex justify-content-between">
                            <Link to={`/newin/${_id}`}>
                                <button style={{ backgroundColor: "coral", padding: "5px 15px", color: "#fff" }} className="border-0 rounded-pill">Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewIns;