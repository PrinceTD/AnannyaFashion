import React from 'react'
import banner from '../../images/bannerT.js'

function BackgroundBanner() {
    return (
        <div>
            <div className="card bg-dark text-white">
                <img src={banner} className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <h3 className="card-title">WOMEN</h3>
                </div>
            </div>
        </div>
    )
}

export default BackgroundBanner