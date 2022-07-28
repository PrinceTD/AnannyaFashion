import React from 'react'
import banner from '../../images/bannerT.js'

function BackgroundBanner() {
    return (
        <div>
            <div class="card bg-dark text-white">
                <img src={banner} class="card-img" alt="..." />
                <div class="card-img-overlay">
                    <h3 class="card-title">WOMEN</h3>
                </div>
            </div>
        </div>
    )
}

export default BackgroundBanner