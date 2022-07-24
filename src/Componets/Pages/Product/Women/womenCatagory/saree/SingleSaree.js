import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../../../../Footer/Footer'
import Navbar from '../../../../Header/Navbar'

export default function SingleSaree() {
  const [service, setService] = useState({});
  const { serviceId } = useParams();
  useEffect(() => {
    fetch(`https://powerful-wildwood-87881.herokuapp.com/saree/${serviceId}`)
      .then(res => res.json())
      .then(data => setService(data));
  }, []);
  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="card mb-3 border-0">
          <div className="row g-4">
            <div className="col-md-6">
              <img src={`data:img/png;base64,${service.img}`} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-6">
              <div className="">
                <small><Link to={"/home"}>Home</Link>/<Link to={"/women"}>Women</Link>/<Link to={"/man"}>Man</Link> </small>
                <div className=''>
                  <h2 className="pt-2">{service.name}</h2>
                  <h4 className='pt-2'>৳ {service.price}</h4>
                  <small><span className='pt-2 fst-normal'>{service.details}</span></small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
