import React from 'react'
import './Navbar.css'
import Note from './Note/Note'
import logo from '../../../images/logo.png'

export default function Navbar() {
    return (

       <div>
        <Note></Note>
         <div className='container-fluid'>
           
           <nav className="navbar navbar-expand-lg navbar-light bgColorB">
               <div className="container">
                   <a className="navbar-brand" href="#"><img src={logo} width='80px'></img></a>
                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"></span>
                   </button>
                   <div className="collapse navbar-collapse" id="navbarSupportedContent">
                       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                           <li className="nav-item">
                               <a className="nav-link" aria-current="page" href="/home">Home</a>
                           </li>
                           <li className="nav-item">
                               <a className="nav-link" href="/about">About Us</a>
                           </li>
                           <li className="nav-item dropdown">
                               <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                   Dropdown
                               </a>
                               <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                   <li><a className="dropdown-item" href="#">a</a></li>
                                   <li><a className="dropdown-item" href="#">action</a></li>
                               </ul>
                           </li>
                          
                       </ul>
                      
                   </div>
               </div>
           </nav>
       </div>
       </div>
    )
}
