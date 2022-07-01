import React from 'react'
import './error.css'
import bgPic from '../../images/404.png'

export default function Error() {
  return (
    <div className='container d-flex justify-content-center'>
      <div className='bgPic'>
        <img src={bgPic}></img>
        <div className='d-flex'>
          <div>
            <h2>This is somewhat embarrassing, isn't it?</h2>

          </div>
        </div>
      </div>

    </div>
  )
}
