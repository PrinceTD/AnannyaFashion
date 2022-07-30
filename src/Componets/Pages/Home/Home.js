import React from 'react'
import Banner from '../Banner/Banner'
import Title from '../Product/Titel/Title'
import './Home.css'
import Socialmedia from '../SocialMedia/Socialmedia'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'
import CardC from '../carousel/CardC'
import JewelleryBanner from '../JewelleryBanner/JewelleryBanner'
import SwiperBanner from '../Banner/BannerSwiper/SwiperBanner'
import SocialMedia from '../SocialMedia/SocialMediaBanner/SocialMedia'



export default function Home() {

  return (
    <div>

  
      <Navbar></Navbar>
     
      {/* <SwiperBanner/> */}
      <Banner></Banner>
      {/* <BootstrapBanner /> */}
      {/* <SocialMedia/> */}
      <Title></Title>
      
      <JewelleryBanner />
      {/* <CardC/> */}
      <Socialmedia></Socialmedia>
      <Footer></Footer>

    </div>
  )
}
