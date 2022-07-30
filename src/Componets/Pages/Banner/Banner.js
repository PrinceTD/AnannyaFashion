import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './banner.css'
import Slider from 'react-slick';
import BannerSingle from './BannerSingle';

export default function Banner() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000
    };
    const [service, setService] = useState([]);
    useEffect(() => {
        const url = "https://powerful-wildwood-87881.herokuapp.com/banner"
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);


    return (
        <div className='container pb-3 pt-3'>
            <Slider {...settings}>

              
               {
                    service.map((service) => (
                        <BannerSingle
                            key={service._id}
                            service={service}
                        ></BannerSingle>

                    ))
                }
            </Slider>

        </div >
    )
}
