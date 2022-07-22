import React, { useState } from 'react'
import './Women.css'
import imgC from '../../../../images/mukti.jpg'
import { Link } from 'react-router-dom'
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'

export default function Women() {
  return (
    <div>
      <Navbar/>
      <div className='bgImg text-center'>
        <h1 className=''>WOMEN</h1>
      </div>
      <div className='container'>
        <div className="row row-cols-2 row-cols-md-3 g-5">
          <div className="col">
            <Link to={"/women/saree"}>
              <div className="card border-0 h-100 text-center shadow ">
                <img src={imgC} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title txt">SAREE</h4>
                </div>
              </div>
            </Link>
          </div>

          <div className="col ">
            <Link to={"/women/kurti"}>
              <div className="card border-0 h-100 text-center shadow">
                <img src={imgC} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title txt">KURTI</h4>
                </div>
              </div>
            </Link>
          </div>

          <div className="col ">
            <div className="card border-0 h-100 text-center shadow">
              <img src={imgC} className="card-img-top" alt="..." />
              <div className="card-body">
                <h1 className="card-title txt">TOP</h1>

              </div>

            </div>
          </div>

          <div className="col ">
            <div className="card border-0 h-100 text-center shadow">
              <img src={imgC} className="card-img-top" alt="..." />
              <div className="card-body">
                <h1 className="card-title txt">FROCK</h1>

              </div>

            </div>
          </div>
          <div className="col ">
            <div className="card border-0 h-100 text-center shadow">
              <img src={imgC} className="card-img-top" alt="..." />
              <div className="card-body">
                <h1 className="card-title txt">SALWAR KAMEEZ</h1>

              </div>

            </div>
          </div>
          <div className="col ">
            <div className="card border-0 h-100 text-center shadow">
              <img src={imgC} className="card-img-top" alt="..." />
              <div className="card-body">
                <h1 className="card-title txt">BLOUSE</h1>
              </div>

            </div>
          </div>
          <div className="col">
            <div className="card border-0 h-100 text-center shadow">
              <img src={imgC} className="card-img-top" alt="..." />
              <div className="card-body">
                <h1 className="card-title txt">ORNA</h1>

              </div>

            </div>
          </div>
          <div className="col">

            <div className="card border-0 h-100 text-center shadow">
              <a href='#' className='teg'>
                <img src={imgC} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h1 className="card-title txt">SKIRT</h1>

                </div>
              </a>
            </div>
          </div>
          <div className="col">
            <div className="card border-0 h-100 text-center shadow">
              <a href='/women/pant' className='teg'>
                <img src={imgC} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h1 className="card-title txt">PANT</h1>
                </div>
              </a>

            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div >

  )
}
