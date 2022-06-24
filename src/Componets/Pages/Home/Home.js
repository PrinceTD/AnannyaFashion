import React from 'react'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import Navbar from '../Header/Navbar'
import Instagram from '../SocialMedia/Instagram'
import Title from '../Product/Titel/Title'
import './Home.css'
import Facebook from '../SocialMedia/Facebook'
import Socialmedia from '../SocialMedia/Socialmedia'

export default function Home() {
  return (
    <div>

       
        <Banner></Banner>
        <Title></Title>
       <Socialmedia></Socialmedia>
        <Footer></Footer>

    </div>
  )
}
