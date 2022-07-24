import React from 'react'
import Banner from '../Banner/Banner'
import Title from '../Product/Titel/Title'
import './Home.css'
import Socialmedia from '../SocialMedia/Socialmedia'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'
import CardC from '../carousel/CardC'
import CardManu from '../carousel/CardManu'
import BastSeals from '../carousel/BastSeals'



export default function Home() {

  return (
    <div>

      <Navbar></Navbar>
      <Banner></Banner>
      <Title></Title>
      <CardC/>
      <Socialmedia></Socialmedia>
      <Footer></Footer>



    </div>
  )
}
