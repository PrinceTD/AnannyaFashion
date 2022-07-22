import React from 'react'
import Banner from '../Banner/Banner'
import Title from '../Product/Titel/Title'
import './Home.css'
import Socialmedia from '../SocialMedia/Socialmedia'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'



export default function Home() {

  return (
    <div>

      <Navbar></Navbar>
      <Banner></Banner>
      <Title></Title>
      {/* <CardC></CardC> */}
      <Socialmedia></Socialmedia>
      <Footer></Footer>



    </div>
  )
}
