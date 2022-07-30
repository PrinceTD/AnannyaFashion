import { Alert, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Footer from '../../../../Footer/Footer';
import Navbar from '../../../../Header/Navbar';
import Bloused from './Bloused';
import banner from '../../../../../../images/bannerT.jpg'

export default function Blouse() {
  const [service, setService] = useState([]);
  useEffect(() => {
    const url = "https://powerful-wildwood-87881.herokuapp.com/blouse"
    fetch(url)
      .then(res => res.json())
      .then(data => setService(data))
  }, []);


  return (
    <div>
      <Navbar />
      <div>
        <div>
          <div className="card mb-3 border-0">
            <img src={banner} className="card-img" alt="..." />
            <div className="card-img-overlay d-flex justify-content-center align-items-center">
              <h1 className="fw-bold fs-1 banner-text card-title">BLOUSE</h1>
            </div>
          </div>
        </div>

        <div className='container mt-5 mb-5'>
          <div className=' pt-5 pb-5'>
            <Alert sx={{ backgroundColor: '#e0b252', padding: " 25px 10px" }} variant="filled" severity="error">
              No products were found matching your selection.
            </Alert>
          </div>
        </div>
      </div>
      {/* <div>
        <div>
          <div className="card mb-3 border-0">
            <img src={banner} className="card-img" alt="..." />
            <div className="card-img-overlay d-flex justify-content-center align-items-center">
              <h1 className="fw-bold fs-1 banner-text card-title">BLOUSE</h1>
            </div>
          </div>
        </div>
        <div className="container mt-5 mb-5">
          <div>
            <div className='text-center pb-3'>
              <div>
                {service.length === 0 ? <CircularProgress /> :
                  <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-4">
                    {
                      service.map(service => <Bloused
                        key={service._id}
                        service={service}
                      ></Bloused>)
                    }

                  </div>}

              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  )
}
