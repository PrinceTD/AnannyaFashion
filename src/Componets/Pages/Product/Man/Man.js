import React from 'react'
import Footer from '../../Footer/Footer'
import Navbar from '../../Header/Navbar'
import imgC from '../../../../images/mukti.jpg'
import banner from '../../../../images/bannerT.jpg'
import rudroT from '../../../../images/images/rudroT.jpg'
import rudroS from '../../../../images/images/rudroS.jpg'
import rudroP from '../../../../images/images/rudroP.jpg'
import { Link } from 'react-router-dom'

function Man() {
    return (
        <div>
            <Navbar />
            <div>
                <div>
                    <div className="card mb-3 border-0">
                        <img src={banner} className="card-img" alt="..." />
                        <div className="card-img-overlay d-flex justify-content-center align-items-center">
                            <h1 className="fw-bold fs-1 banner-text card-title">MEN</h1>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className="row row-cols-2 row-cols-md-3 g-5">
                        <div className="col">
                            <Link to={"/men/panjabi"}>
                                <div className="card border-0 h-100 text-center shadow ">
                                    <img src={rudroP} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h4 className="card-title txt">PANJABI</h4>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col ">
                            <Link to={"/men/shirt"}>
                                <div className="card border-0 h-100 text-center shadow">
                                    <img src={rudroS} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h4 className="card-title txt">SHIRT</h4>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col ">
                            <Link to={"/men/tshirt"}>
                                <div className="card border-0 h-100 text-center shadow">
                                    <img src={rudroT} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h4 className="card-title txt">T-SHIRT</h4>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Man