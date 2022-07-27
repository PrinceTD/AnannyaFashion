import React from 'react'

function BannerSingle({service}) {
    const {img} = service;
  return (
    <div className=''>
       <div className='container'>
       <img src={`data:img/png;base64,${img}`} className="card-img-top" alt="..." width={''}/>
       </div>
    </div>
  )
}

export default BannerSingle