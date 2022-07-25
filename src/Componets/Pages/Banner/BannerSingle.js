import React from 'react'

function BannerSingle({service}) {
    const {img} = service;
  return (
    <div >
       <img src={`data:img/png;base64,${img}`} className="card-img-top" alt="..."/>
    </div>
  )
}

export default BannerSingle