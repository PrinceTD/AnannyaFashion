import React, { useState } from 'react'
import './Women.css'
import imgC from '../../../../images/mukti.jpg'
import { Link } from 'react-router-dom'

export default function Women() {
  return (
    <div>
      <div className='bgImg text-center'>
        <h1 className=''>WOMEN</h1>
      </div>
      <div className='container'>
        <div class="row row-cols-2 row-cols-md-3 g-5">
          <div class="col">
            <div class="card border-0 h-100 text-center shadow ">
              <img src={imgC} class="card-img-top" alt="..." />
              <div class="card-body">
                <Link to={"/women/saree"}><h1 class="card-title txt">SAREE</h1></Link>
              </div>
            </div>

            <div class="col ">
              <div class="card border-0 h-100 text-center shadow">
                <img src={imgC} class="card-img-top" alt="..." />
                <div class="card-body">
                  <Link to={"/women/kurti"}><h1 class="card-title txt">KURTI</h1></Link>
                </div>
              </div>
            </div>

          </div>
          <div class="col ">
            <div class="card border-0 h-100 text-center shadow">
              <img src={imgC} class="card-img-top" alt="..." />
              <div class="card-body">
                <h1 class="card-title txt">TOP</h1>

              </div>

            </div>
          </div>

          <div class="col ">
            <div class="card border-0 h-100 text-center shadow">
              <img src={imgC} class="card-img-top" alt="..." />
              <div class="card-body">
                <h1 class="card-title txt">FROCK</h1>

              </div>

            </div>
          </div>
          <div class="col ">
            <div class="card border-0 h-100 text-center shadow">
              <img src={imgC} class="card-img-top" alt="..." />
              <div class="card-body">
                <h1 class="card-title txt">SALWAR KAMEEZ</h1>

              </div>

            </div>
          </div>
          <div class="col ">
            <div class="card border-0 h-100 text-center shadow">
              <img src={imgC} class="card-img-top" alt="..." />
              <div class="card-body">
                <h1 class="card-title txt">BLOUSE</h1>
              </div>

            </div>
          </div>
          <div class="col">
            <div class="card border-0 h-100 text-center shadow">
              <img src={imgC} class="card-img-top" alt="..." />
              <div class="card-body">
                <h1 class="card-title txt">ORNA</h1>

              </div>

            </div>
          </div>
          <div class="col">

            <div class="card border-0 h-100 text-center shadow">
              <a href='#' className='teg'>
                <img src={imgC} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h1 class="card-title txt">SKIRT</h1>

                </div>
              </a>
            </div>
          </div>
          <div class="col">
            <div class="card border-0 h-100 text-center shadow">
              <a href='/women/pant' className='teg'>
                <img src={imgC} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h1 class="card-title txt">PANT</h1>
                </div>
              </a>

            </div>
          </div>
        </div>
      </div>
    </div >

  )
}
