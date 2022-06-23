import React from 'react'
import mukti from '../../../../images/mukti.jpg'
import './Title.css'

export default function Title() {
    return (
        <div className='container mt-5 pb-5 pt-5'>
            <div className='imageCard'>
                <h2 className='d-flex justify-content-center'>Our Collections</h2>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card  border-0 shadow p-3 mb-5 bg-body rounded">
                            <img src={mukti} class="card-img-top" alt="..." />
                            <div class="card-body intro">
                                <div>
                                    <h1 class="card-title">Card title</h1>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card border-0 shadow p-3 mb-5 bg-body rounded">
                            <img src={mukti} class="card-img-top" alt="..." />
                            <div class="card-body intro">
                                <div>
                                    <h1 class="card-title">Card title</h1>
                                   
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
