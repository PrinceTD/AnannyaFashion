import React from 'react'

export default function Carousel() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 bg-light'>
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className='row'>
                  <div className='col-md-4'>
                    <div className='single-box'>
                      <div className='img-area'>
                        <img src=''></img>
                        <div className='img text'>
                          <h2>
                            Product 1
                          </h2>
                          <p>
                            lorem cfasducf bs
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='single-box'>
                      <div className='img-area'>
                        <img src=''></img>
                        <div className='img text'>
                          <h2>
                            Product  2
                          </h2>
                          <p>
                            lorem cfasducf bs
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='single-box'>
                      <div className='img-area'>
                        <img src=''></img>
                        <div className='img text'>
                          <h2>
                            Product 3
                          </h2>
                          <p>
                            lorem cfasducf bs
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item col-12">
                <div className='row'>
                  <div className='col-md-4'>
                    <div className='single-box'>
                      <div className='img-area'>
                        <img src=''></img>
                        <div className='img text'>
                          <h2>
                            Product 4
                          </h2>
                          <p>
                            lorem cfasducf bs
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4 col-12'>
                    <div className='single-box'>
                      <div className='img-area'>
                        <img src=''></img>
                        <div className='img text'>
                          <h2>
                            Product  5
                          </h2>
                          <p>
                            lorem cfasducf bs
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4 col-12'>
                    <div className='single-box'>
                      <div className='img-area'>
                        <img src=''></img>
                        <div className='img text'>
                          <h2>
                            Product 6
                          </h2>
                          <p>
                            lorem cfasducf bs
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
