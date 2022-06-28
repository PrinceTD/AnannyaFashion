import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Componets/Pages/Home/Home';
import Navbar from './Componets/Pages/Header/Navbar';
import About from './Componets/Pages/About/About';
import Women from './Componets/Pages/Product/Women/Women';
import Error from './Componets/Error/Error';
import Pant from './Componets/Pages/Product/Women/womenCatagory/Pant/Pant';
import Pants from './Componets/Pages/Product/Women/womenCatagory/Pant/Pants';
import SinglePant from './Componets/Pages/Product/Women/womenCatagory/Pant/SinglePant';
import Saree from './Componets/Pages/Product/Women/womenCatagory/saree/Saree';
import SingleSalawr from './Componets/Pages/Product/Women/womenCatagory/SalawrKameez/SingleSalawr';
import SingleSaree from './Componets/Pages/Product/Women/womenCatagory/saree/SingleSaree';

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
          <Route path='/women/pant' element={<Pant></Pant>}></Route>
          <Route path='/women/pant/:serviceId' element={<SinglePant></SinglePant>}></Route>
          <Route path='/women/saree' element={<Saree></Saree>}></Route>
          <Route path='/women/saree/:serviceId' element={<SingleSaree></SingleSaree>}></Route>
          
          <Route path='*' element={<Error></Error>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
