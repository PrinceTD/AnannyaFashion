import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Componets/Pages/Home/Home';
import Navbar from './Componets/Pages/Header/Navbar';
import About from './Componets/Pages/About/About';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <BrowserRouter>

        <Routes>
          <Route path='/home' element={<Home></Home>}>   </Route>
          <Route path='/about' element={<About></About>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
