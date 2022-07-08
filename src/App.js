import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Componets/Pages/Home/Home';
import Navbar from './Componets/Pages/Header/Navbar';
import About from './Componets/Pages/About/About';
import Women from './Componets/Pages/Product/Women/Women';
import Error from './Componets/Error/Error';
import Pant from './Componets/Pages/Product/Women/womenCatagory/Pant/Pant';
import SinglePant from './Componets/Pages/Product/Women/womenCatagory/Pant/SinglePant';
import Saree from './Componets/Pages/Product/Women/womenCatagory/saree/Saree';
import SingleSaree from './Componets/Pages/Product/Women/womenCatagory/saree/SingleSaree';
import Footer from './Componets/Pages/Footer/Footer';
import Login from './Componets/Login/Login';
import Register from './Componets/Login/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Orna from './Componets/Pages/Product/Women/womenCatagory/Orna/Orna';
import Contact from './Componets/Pages/Contact/Contact';
import NewIn from './Componets/Pages/NewIn/NewIn';
import SingleNewIn from './Componets/Pages/NewIn/SingleNewIn';
import SingleOrna from './Componets/Pages/Product/Women/womenCatagory/Orna/SingleOrna';
import ShoppingCart from './Componets/Pages/ShoppingCart/ShoppingCart';
import Account from './Componets/Pages/Account/Account';

function App() {
  return (
    <div className="">

      <AuthProvider>
        <Navbar></Navbar>

        <BrowserRouter>

          <Routes>
            <Route path='/' element={<Home></Home>}>   </Route>
            <Route path='/home' element={<Home></Home>}>   </Route>
            <Route path='/about' element={<About></About>}></Route>            
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/myaccount' element={<Account></Account>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/shoppingcart' element={<ShoppingCart></ShoppingCart>}></Route>

            <Route path='/women' element={<Women></Women>}></Route>

            <Route path='/women/pant' element={<Pant></Pant>}></Route>
            <Route path='/women/pant/:serviceId' element={<SinglePant></SinglePant>}></Route>

            <Route path='/women/saree' element={<Saree></Saree>}></Route>
            <Route path='/women/saree/:serviceId' element={<SingleSaree></SingleSaree>}></Route>

            <Route path='/women/orna' element={<Orna></Orna>}></Route>
            <Route path='/women/orna/:serviceId' element={<SingleOrna></SingleOrna>}></Route>

            <Route path='/newin' element={<NewIn></NewIn>}></Route>
            <Route path='/newin/:serviceId' element={<SingleNewIn></SingleNewIn>}></Route>

            <Route path='*' element={<Error></Error>}></Route>
          </Routes>
        </BrowserRouter>
        <Footer></Footer>
      </AuthProvider>

    </div>
  );
}

export default App;
