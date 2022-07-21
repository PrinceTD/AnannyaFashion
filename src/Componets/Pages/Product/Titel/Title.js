import React from 'react'
import { Link } from 'react-router-dom'
import mukti from '../../../../images/mukti.jpg'
import './Title.css'

export default function Title() {
    return (
        <div className='container mt-1 mb-2'>
            <h1 className='pt-2 pb-4'></h1>

            <div className='container'>
                <div className=''>
                    <div className=" row row-cols-2 row-cols-md-2 g-4 wrapper">
                        <div className="col">
                            <div className="card border-0 h-100 photo-frame">
                                <Link to={'/women'}>
                                    <div className='photo'>
                                        <img src={mukti} className="card-img-top" alt="" />
                                    </div>
                                    <div className="photo-detail">
                                        <h1 className="title-photo">WOMEN</h1>
                                        
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col ">
                            <div className="card border-0 h-100 photo-frame">
                                <Link to={'/women'}>
                                    <div className='photo'>
                                        <img src={mukti} className="card-img-top" alt="" />
                                    </div>
                                    <div className="photo-detail">
                                        <h1 className="title-photo">MEN</h1>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
