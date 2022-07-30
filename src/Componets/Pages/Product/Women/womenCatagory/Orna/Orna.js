import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import useAuth from '../../../../../../hooks/useAuth';
import Footer from '../../../../Footer/Footer';
import Navbar from '../../../../Header/Navbar';
import Ornas from './Ornas';
import banner from '../../../../../../images/bannerT.jpg'

export default function Orna() {
  const { isLoading } = useAuth();
  const [service, setService] = useState([]);
  useEffect(() => {
    const url = "https://powerful-wildwood-87881.herokuapp.com/orna"
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
            <h1 className="fw-bold fs-1 banner-text card-title">ORNA</h1>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className='text-center pb-3'>
          <div>
            {service.length === 0 ? <CircularProgress /> :
              <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-4">
                {
                  service.map(service => <Ornas
                    key={service._id}
                    service={service}
                  ></Ornas>)
                }

              </div>}

          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
