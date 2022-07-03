import React from 'react'
import { Link } from 'react-router-dom'
import mukti from '../../../../images/mukti.jpg'
import './Title.css'

export default function Title() {
    return (
        <div className='container mt-5 mb-5'>
            <h1 className='pt-5 pb-4'>Our Collections</h1>

            <div className=''>
                <div className=''>
                    <div className=" row row-cols-1 row-cols-md-2 g-2 wrapper">
                        <div className="col">
                            <div className="card h-100">
                                <img src={mukti} className="card-img-top" alt="..." />
                                <div className="card-img-overlay">
                                    <h1 className="card-title">WOMEN</h1>
                                    <a href='/women'><button>Shop Now</button></a>
                                </div>
                            </div>
                        </div> 
                        <div className="col">
                            <div className="card h-100">
                                <img src={mukti} className="card-img-top" alt="..." />
                                <div className="card-img-overlay title  d-flex align-items-end">
                                    <div>
                                        <h1 className="card-title">MAN</h1>
                                        <Link to={'/men'}><button>Shop Now</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    )
}
