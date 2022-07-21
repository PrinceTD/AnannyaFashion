import React from 'react'
import './error.css'
import bgPic from '../../images/404.png'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
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
  )
}
