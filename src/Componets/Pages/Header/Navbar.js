import React from 'react'
import './Navbar.css'
import Note from './Note/Note'
import logo from '../../../images/logo.png'

export default function Navbar() {
    return (

        <div>
            <Note></Note>
        
            <div className='container-fluid'>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">

                        <a className="navbar-brand" href="/home"><img src={logo} width='100px'></img></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                   
                                    <a className="nav-link" aria-current="page" href="/home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/newin">New In</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Women
                                    </a>
                                    <ul className="dropdown-menu Menu " aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/women/saree">Saree</a></li>
                                        <li><a className="dropdown-item" href="/women/kurti">Kurti</a></li>
                                        <li><a className="dropdown-item" href="#">Salwar Kameez</a></li>
                                        <li><a className="dropdown-item" href="#">Blouse</a></li>
                                        <li><a className="dropdown-item" href="#">Top</a></li>
                                        <li><a className="dropdown-item" href="/women/orna">Orna</a></li>
                                        <li><a className="dropdown-item" href="/women/pant">Pant</a></li>

                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Men
                                    </a>
                                    <ul className="dropdown-menu Menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Panjabi</a></li>
                                        <li><a className="dropdown-item" href="#">Shirt</a></li>
                                        <li><a className="dropdown-item" href="#">T-Shirt</a></li>
                                        <li><a className="dropdown-item" href="#">Lungi</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Jewellery
                                    </a>
                                    <ul className="dropdown-menu Menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/jewellary/necklace">Necklace</a></li>
                                        <li><a className="dropdown-item" href="/jewellary/earring">Ear Ring</a></li>
                                        <li><a className="dropdown-item" href="#">Bangle</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Essence of Anannya</a>
                                </li>
                               
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        </div >
    )
}
