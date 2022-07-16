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
import DeshBoard from './Componets/Pages/Account/DeshBoard/DeshBoard';
import Order from './Componets/Pages/Account/Order/Order';
import Admin from './Componets/Pages/Account/Admin/Admin';
import Download from './Componets/Pages/Account/Download/Download';
import Address from './Componets/Pages/Account/Address/Address';
import PrivetRoute from './Componets/Login/PrivetRoute/PrivetRoute';
import AddAdmin from './Componets/Pages/Account/Admin/AddAdmin';
import AdminRoute from './Componets/Login/AdminRoute/AdminRoute';
import EarRing from './Componets/Pages/Product/Jewelry/EarRing';
import SingleEarRing from './Componets/Pages/Product/Jewelry/SingleEarRing';
import ManageOrder from './Componets/Pages/Account/ManageOrder/ManageOrder';
import EarringAdd from './Componets/Pages/Account/ManageOrder/JewellaryAdd/EarringAdd';
import Jewellary from './Componets/Pages/Account/ManageOrder/JewellaryAdd/Jewellary';
import Necklecs from './Componets/Pages/Product/Jewelry/Neclesh/Necklecs';
import SingleNecklecs from './Componets/Pages/Product/Jewelry/Neclesh/SingleNecklecs';
import NecklaceAdd from './Componets/Pages/Account/ManageOrder/JewellaryAdd/NecklaceAdd';
import ManageAllProduct from './Componets/Pages/Account/AdminManage/ManageAllProduct';
import ManageAllOrder from './Componets/Pages/Account/AdminManage/ManageAllOrder';

function App() {
  return (
    <div className="">

      <AuthProvider>
        <Navbar></Navbar>

        <BrowserRouter>

          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>

            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/shoppingcart' element={<ShoppingCart></ShoppingCart>}></Route>

            <Route path='/women' element={<Women></Women>}></Route>

            <Route path='/women/pant' element={<Pant></Pant>}></Route>
            <Route path='/women/pant/:serviceId' element={<SinglePant></SinglePant>}></Route>

            <Route path='/women/saree' element={<Saree></Saree>}></Route>
            <Route path='/women/saree/:serviceId' element={<SingleSaree></SingleSaree>}></Route>

            <Route path='/women/orna' element={<Orna></Orna>}></Route>
            <Route path='/women/orna/:serviceId' element={<SingleOrna></SingleOrna>}></Route>

            <Route path='/jewellary/earring' element={<EarRing></EarRing>}></Route>
            <Route path='/jewellary/earring/:serviceId' element={<SingleEarRing></SingleEarRing>}></Route>

            <Route path='/jewellary/necklace' element={<Necklecs></Necklecs>}></Route>
            <Route path='/jewellary/necklace/:serviceId' element={<SingleNecklecs></SingleNecklecs>}></Route>

            <Route path='/newin' element={<NewIn></NewIn>}></Route>
            <Route path='/newin/:serviceId' element={<SingleNewIn></SingleNewIn>}></Route>

            {/* deshboard privet route */}

            <Route path='/myaccount' element={<PrivetRoute><DeshBoard /></PrivetRoute>}></Route>
            <Route path='/myaccount/order' element={<PrivetRoute><Order /></PrivetRoute>}></Route>
            <Route path='/myaccount/download' element={<PrivetRoute><Download /></PrivetRoute>}></Route>
            <Route path='/myaccount/address' element={<PrivetRoute><Address /></PrivetRoute>}></Route>

            {/* admin panal */}
            <Route path='/myaccount/admin' element={<PrivetRoute><AdminRoute><Admin /></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/makeadmin' element={<PrivetRoute><AdminRoute><AddAdmin /></AdminRoute></PrivetRoute>}></Route>


            {/* manageProduct */}
            <Route path='/myaccount/admin/manageproduct' element={<PrivetRoute><AdminRoute><ManageAllProduct /></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/managevieworder' element={<PrivetRoute><AdminRoute><ManageAllOrder /></AdminRoute></PrivetRoute>}></Route>


            {/* add product */}

            <Route path='/myaccount/admin/manageorder' element={<PrivetRoute><AdminRoute><ManageOrder /></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/manageorder/jewellery' element={<PrivetRoute><AdminRoute><Jewellary></Jewellary></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/manageorder/jewellery/earring' element={<PrivetRoute><AdminRoute><EarringAdd /></AdminRoute></PrivetRoute>}></Route>
            <Route path='/myaccount/admin/manageorder/jewellery/necklace' element={<PrivetRoute><AdminRoute><NecklaceAdd /></AdminRoute></PrivetRoute>}></Route>


            <Route path='*' element={<Error></Error>}></Route>
          </Routes>
        </BrowserRouter>
        <Footer></Footer>
      </AuthProvider>

    </div>
  );
}

export default App;
