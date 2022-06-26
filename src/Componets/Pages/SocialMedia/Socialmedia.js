import React from 'react'
import Facebook from './Facebook'
import Instagram from './Instagram'
import './social.css'

export default function Socialmedia() {
    return (
        <div className='container mt-5 pt-5 pb-5'>
            <div class="row">
                <div class="col col-md-6">
                    <div class="text-center">
                       <h2 className='pb-2'>Follow us on Instagram</h2>
                           <Instagram></Instagram>
                    </div>
                </div>
                <div class="col col-md-6">
                    <div class="facebook text-center">
                        
                          <h2 className='pb-3'> Like Anannya on Facebook </h2>
                          <Facebook></Facebook>
                          
                    </div>
                </div>
                
               
            </div>
        </div>
    )
}
