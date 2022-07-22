import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import useAuth from '../../../../../../hooks/useAuth';
import Footer from '../../../../Footer/Footer';
import Navbar from '../../../../Header/Navbar';
import Ornas from './Ornas';

export default function Orna() {
  const { isLoading } = useAuth();
  const [service, setService] = useState([]);
  useEffect(() => {
    const url = "https://tranquil-ridge-16978.herokuapp.com/product"
    fetch(url)
      .then(res => res.json())
      .then(data => setService(data))
  }, []);
  return (
    <div >
      <Navbar/>
      <div className="container mt-5 mb-5">
        <div className='text-center pb-3'>
          <h2 style={{ color: "black" }}>Our Products</h2>
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
