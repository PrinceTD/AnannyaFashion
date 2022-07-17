import React from 'react'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import Navbar from '../Header/Navbar'
import Instagram from '../SocialMedia/Instagram'
import Title from '../Product/Titel/Title'
import './Home.css'
import Facebook from '../SocialMedia/Facebook'
import Socialmedia from '../SocialMedia/Socialmedia'
import CardC from '../carousel/CardC'
import useAuth from '../../../hooks/useAuth'
import EarringAdd from '../Account/ManageOrder/JewellaryAdd/EarringAdd'


export default function Home() {

  return (
    <div>


      <Banner></Banner>
      <Title></Title>
      {/* <CardC></CardC> */}
      <Socialmedia></Socialmedia>
      

    </div>
  )
}
