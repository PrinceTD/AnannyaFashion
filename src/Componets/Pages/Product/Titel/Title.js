import React from 'react'
import mukti from '../../../../images/mukti.jpg'
import './Title.css'

export default function Title() {
    return (
        <div className='container mt-5 mb-5'>
            <h1 className='pt-5 pb-4'>Our Collections</h1>

            <div className='container'>
                <div className='container'>
                    <div class=" row row-cols-1 row-cols-md-2 g-4 wrapper">
                        <div class="col">
                            <div class="card h-100">
                                <img src={mukti} class="card-img-top" alt="..." />
                                <div class="card-img-overlay">
                                    <h1 class="card-title">WOMEN</h1>
                                    <button>Shop Now</button>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={mukti} class="card-img-top" alt="..." />
                                <div class="card-img-overlay title  d-flex align-items-end">
                                    <div>
                                        <h1 class="card-title">MAN</h1>
                                        <button>Shop Now</button>
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
