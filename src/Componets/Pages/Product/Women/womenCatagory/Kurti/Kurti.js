import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Footer from '../../../../Footer/Footer';
import Navbar from '../../../../Header/Navbar';
import Kurtis from './Kurtis'
import banner from '../../../../../../images/bannerT.jpg'

export default function Kurti() {
  const [service, setService] = useState([]);
  useEffect(() => {
    const url = "https://powerful-wildwood-87881.herokuapp.com/kurti"
    fetch(url)
      .then(res => res.json())
      .then(data => setService(data))
  }, []);
  

  return (
    <div >
      <Navbar/>
      <div>
        <div className="card mb-3 border-0">
          <img src={banner} className="card-img" alt="..." />
          <div className="card-img-overlay d-flex justify-content-center align-items-center">
            <h1 className="fw-bold fs-1 banner-text card-title">KURTI</h1>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className='text-center pb-3'>

          <div className='text-center'>
            {service.length === 0 ? <CircularProgress /> :
              <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-4">
                {
                  service.map(service => <Kurtis
                    key={service._id}
                    service={service}
                  ></Kurtis>)
                }

              </div>}

          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
