import React from 'react'
import { Link } from 'react-router-dom'
import imgC from '../../../../images/mukti.jpg'
import banner from '../../../../images/bannerT.jpg'
import Footer from '../../Footer/Footer'
import Navbar from '../../Header/Navbar'

function JewellaryT() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="card mb-3 border-0">
          <img src={banner} className="card-img" alt="..." />
          <div className="card-img-overlay d-flex justify-content-center align-items-center">
            <h1 className="fw-bold fs-1 banner-text card-title">JEWELLARY</h1>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className="row row-cols-2 row-cols-md-3 g-5">
          <div className="col">
            <Link to={"/jewellary/earring"}>
              <div className="card border-0 h-100 text-center shadow ">
                <img src={imgC} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title txt">EAR RING</h4>
                </div>
              </div>
            </Link>
          </div>

          <div className="col ">
            <Link to={"/jewellary/necklace"}>
              <div className="card border-0 h-100 text-center shadow">
                <img src={imgC} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title txt">NECKLECS</h4>
                </div>
              </div>
            </Link>
          </div>
          <div className="col ">
            <Link to={"/jewellary/coker"}>
              <div className="card border-0 h-100 text-center shadow">
                <img src={imgC} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title txt">COKER</h4>
                </div>
              </div>
            </Link>
          </div>

          <div className="col ">
            <Link to={"/jewellary/others"}>
              <div className="card border-0 h-100 text-center shadow">
                <img src={imgC} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title txt">OTHERS</h4>
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

export default JewellaryT