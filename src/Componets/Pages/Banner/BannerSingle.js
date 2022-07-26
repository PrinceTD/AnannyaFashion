import React from 'react'

function BannerSingle({service}) {
    const {img} = service;
  return (
    <div className='container'>
       <div className='container'>
       <img src={`data:img/png;base64,${img}`} className="card-img-top" alt="..." width={'100%'} height={'100%'}/>
       </div>
    </div>
  )
}

export default BannerSingle