import React from 'react'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import Navbar from '../Header/Navbar'
import Instagram from '../SocialMedia/Instagram'
import Title from '../Product/Titel/Title'
import './Home.css'
import Facebook from '../SocialMedia/Facebook'

export default function Home() {
  return (
    <div>

       
        <Banner></Banner>
        <Title></Title>
        <Instagram></Instagram>
        <Facebook></Facebook>
        <Footer></Footer>

    </div>
  )
}
