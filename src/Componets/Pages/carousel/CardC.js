import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ReactCarousel from './ReactCarousel';

function CardC() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
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
    const url = "https://powerful-wildwood-87881.herokuapp.com/bestsells"
    fetch(url)
      .then(res => res.json())
      .then(data => setService(data))
  }, []);


  return (
    <div className='container text-center pt-5 pb-5'>
      <h4>FEATURED PRODUCTS</h4>

      <Slider {...settings}>

        {
          service.map((service) => (
              <ReactCarousel
                key={service._id}
                service={service}
              ></ReactCarousel>

          ))
        }





      </Slider>


    </div>

  )
}

export default CardC