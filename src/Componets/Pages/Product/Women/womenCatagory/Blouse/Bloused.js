import React from 'react'
import { Link } from 'react-router-dom';

export default function Bloused({service}) {
  const { _id, name, price, details, img } = service;
  return (
    <div className="col">
      <div className="card">
        <img src={`data:img/png;base64,${img}`} className="card-img-top" alt="..." height='250px' width={'200px'} />
        <div className="card-body">
          <p className="card-title">{name}</p>
          <p className="card-text">{price}</p>
          <Link to={`/women/blouse/${_id}`}>
            <button style={{ backgroundColor: "coral", padding: "5px 15px", color: "#fff" }} className="border-0 rounded-pill">Details</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
