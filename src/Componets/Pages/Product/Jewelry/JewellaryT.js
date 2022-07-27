import React from 'react'
import { Link } from 'react-router-dom'
import imgC from '../../../../images/mukti.jpg'
import Footer from '../../Footer/Footer'
import Navbar from '../../Header/Navbar'

function JewellaryT() {
    return (
        <div>
      <Navbar />
      <div className='bgImg text-center'>
        <h1 className=''>WOMEN</h1>
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
         
        </div>
      </div>
      <Footer />
    </div >
    )
}

export default JewellaryT