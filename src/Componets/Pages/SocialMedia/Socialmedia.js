import React from 'react'
import Facebook from './Facebook'
import Instagram from './Instagram'
import './social.css'

export default function Socialmedia() {
    return (
        <div className='container mt-5 pt-5 pb-5'>
            <div className="row">
                <div className="col col-md-6">
                    <div className="text-center">
                       <h4 className='pb-2'>Follow us on Instagram</h4>
                           <Instagram></Instagram>
                    </div>
                </div>
                <div className="col col-md-6">
                    <div className="facebook text-center">
                        
                          <h4 className='pb-3'> Like Anannya on Facebook </h4>
                          <Facebook></Facebook>
                          
                    </div>
                </div>
                
               
            </div>
        </div>
    )
}
