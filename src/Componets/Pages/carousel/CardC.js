import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ReactCarousel from './ReactCarousel';
import { CircularProgress } from '@mui/material';

function CardC() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [service, setService] = useState([]);
  useEffect(() => {
    const url = "https://tranquil-ridge-16978.herokuapp.com/product"
    fetch(url)
      .then(res => res.json())
      .then(data => setService(data))
  }, []);


  return (
    <div className='container'>

      <Slider {...settings}>


        {
          service.map((service) => (
            <div>
              <ReactCarousel
                key={service._id}
                service={service}
              ></ReactCarousel>

            </div>

          ))
        }
      </Slider>


    </div>

  )
}

export default CardC