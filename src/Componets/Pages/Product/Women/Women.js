import React, { useState } from 'react'
import './Women.css'
import imgC from '../../../../images/mukti.jpg'
import banner from '../../../../images/bannerT.jpg'
import MuktiO from '../../../../images/images/muktiO.jpg'
import AnuK from '../../../../images/images/anuK.jpg'
import AnuB from '../../../../images/images/anuB.jpg'
import sawlar from '../../../../images/images/MuktiS.jpg'
import saree from '../../../../images/images/muktiSaree.jpg'
import { Link } from 'react-router-dom'
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'


export default function Women() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="card mb-3 border-0">
          <img src={banner} className="card-img" alt="..." />
          <div className="card-img-overlay d-flex justify-content-center align-items-center">
            <h1 className="fw-bold fs-1 banner-text card-title">WOMEN</h1>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className="row row-cols-2 row-cols-md-3 g-5">
          <div className="col">
            <Link to={"/women/saree"}>
              <div className="card border-0 h-100 text-center shadow ">
                <img src={saree} className="card-img-top" alt="..." width={'100%'} />
                <div className="card-body">
                  <h4 className="card-title txt">SAREE</h4>
                </div>
              </div>
            </Link>
          </div>

          <div className="col ">
            <Link to={"/women/kurti"}>
              <div className="card border-0 h-100 text-center shadow">
                <img src={AnuK} className="card-img-top" alt="..." width={'100%'} />
                <div className="card-body">
                  <h4 className="card-title txt">KURTI</h4>
                </div>
              </div>
            </Link>
          </div>
          <div className="col">
            <Link to={"/women/orna"}>
              <div className="card border-0 h-100 text-center shadow">
                <img src={MuktiO} className="card-img-top" alt="..." width={'100%'} />
                <div className="card-body">
                  <h4 className="card-title txt">ORNA</h4>
                </div>
              </div>
            </Link>
          </div>
          <div className="col ">
            <Link to={"/women/salawerkameez"}>
              <div className="card border-0 h-100 text-center shadow">
                <img src={sawlar} className="card-img-top" alt="..." width={'100%'} />
                <div className="card-body">
                  <h4 className="card-title txt">SALWAR KAMEEZ</h4>
                </div>
              </div>
            </Link>
          </div>
          <div className="col ">
            <Link to={"/women/blouse"}>
              <div className="card border-0 h-100 text-center shadow">
                <img src={AnuB} className="card-img-top" alt="..." width={'100%'} />
                <div className="card-body">
                  <h4 className="card-title txt">BLOUSE</h4>
                </div>

              </div>
            </Link>
          </div>

        </div>
      </div>
      <Footer />
    </div >

  )
}
