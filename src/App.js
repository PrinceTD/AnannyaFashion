import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Componets/Pages/Home/Home';
import Navbar from './Componets/Pages/Header/Navbar';
import About from './Componets/Pages/About/About';
import Women from './Componets/Pages/Product/Women/Women';
import Error from './Componets/Error/Error';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>

      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home></Home>}>   </Route>
          <Route path='/home' element={<Home></Home>}>   </Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/women' element={<Women></Women>}></Route>
          <Route path='/women:product' element={<Women></Women>}></Route>
          <Route path='*' element={<Error></Error>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
