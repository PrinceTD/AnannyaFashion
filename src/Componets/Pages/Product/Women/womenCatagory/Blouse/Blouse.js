import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Bloused from './Bloused';

export default function Blouse() {
  const [service, setService] = useState([]);
  useEffect(() => {
    const url = "https://powerful-wildwood-87881.herokuapp.com/kurti"
    fetch(url)
      .then(res => res.json())
      .then(data => setService(data))
  }, []);
  

  return (
    <div className="container mt-5 mb-5">
      <div>
        <div className='text-center pb-3'>
          <h2 style={{ color: "black" }}>Our Products</h2>

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
  )
}
