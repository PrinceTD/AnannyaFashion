import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Componets/Pages/Home/Home';
import Navbar from './Componets/Pages/Header/Navbar';
import About from './Componets/Pages/About/About';
import Carousel from './Componets/Pages/carousel/Carousel';
import ReactCarousel from './Componets/Pages/carousel/ReactCarousel';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
     {/* <Carousel></Carousel> */}
     {/* <ReactCarousel></ReactCarousel> */}
      <BrowserRouter>

        <Routes>
          <Route path='/*' element={<Home></Home>}>   </Route>
          <Route path='/home' element={<Home></Home>}>   </Route>
          <Route path='/about' element={<About></About>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
