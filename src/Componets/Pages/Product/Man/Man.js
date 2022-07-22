import React from 'react'
import Footer from '../../Footer/Footer'
import Navbar from '../../Header/Navbar'
import imgC from '../../../../images/mukti.jpg'
import { Link } from 'react-router-dom'

function Man() {
    return (
        <div>
            <Navbar />
            <div>
                <div className='bgImg text-center'>
                    <h1 className=''>MEN</h1>
                </div>
                <div className='container'>
                    <div className="row row-cols-2 row-cols-md-3 g-5">
                        <div className="col">
                            <Link to={"/men/panjabi"}>
                                <div className="card border-0 h-100 text-center shadow ">
                                    <img src={imgC} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h4 className="card-title txt">PANJABI</h4>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col ">
                            <Link to={"/men/shirt"}>
                                <div className="card border-0 h-100 text-center shadow">
                                    <img src={imgC} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h4 className="card-title txt">SHIRT</h4>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col">
                            <div className="card border-0 h-100 text-center shadow">
                                <img src={imgC} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 className="card-title txt">T-SHIRT</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Man