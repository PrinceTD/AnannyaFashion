import React from 'react'
import Banner from '../Banner/Banner'
import Title from '../Product/Titel/Title'
import './Home.css'
import Socialmedia from '../SocialMedia/Socialmedia'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'
import CardC from '../carousel/CardC'
import JewelleryBanner from '../JewelleryBanner/JewelleryBanner'



export default function Home() {

  return (
    <div>

      <Navbar></Navbar>
      {/* <ProductCard/> */}
      <Banner></Banner>
      {/* <BootstrapBanner /> */}
      <Title></Title>
      <JewelleryBanner />
      {/* <CardC/> */}
      <Socialmedia></Socialmedia>
      <Footer></Footer>

    </div>
  )
}
