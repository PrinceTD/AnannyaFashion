import React from 'react'
import './error.css'
import bgPic from '../../images/404.png'
import { Link } from 'react-router-dom'
import Footer from '../Pages/Footer/Footer'
import Navbar from '../Pages/Header/Navbar'

export default function Error() {
  return (
    <div>
      <Navbar/>
      <div className='container d-flex justify-content-center'>
      <div className='bgPic'>
        <img src={bgPic}></img>
        <div className=''>
          <div>
            <h2>This is somewhat embarrassing, isn't it?</h2>
            <Link to={'/home'}>
              <h4>
                Go to Home Page
              </h4>
            </Link>

          </div>
        </div>
      </div>

    </div>
    <Footer/>
    </div>
  )
}
