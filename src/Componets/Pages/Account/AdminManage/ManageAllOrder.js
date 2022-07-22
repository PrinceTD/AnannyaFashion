import React from 'react'
import Footer from '../../Footer/Footer'
import Navbar from '../../Header/Navbar'
import Account from '../Account'

function ManageAllOrder() {
  return (
    <div>
      <Navbar/>
      <div className='container pt-5 pb-5'>
        <div className='row'>
          <div className='col-md-3'>
            <Account></Account>
          </div>
          <div className='col-md-9 padding-site'>

          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ManageAllOrder