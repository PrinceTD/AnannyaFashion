import React from 'react'
import './Navbar.css'
import Note from './Note/Note'
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (

        <div>
            {/* color- #006168 & #264653 */}
            <Note></Note>
        
            <div className='container-fluid  border-bottom'>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">

                        <Link className="navbar-brand" to="/home"><img src={logo} width='100px'></img></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                   
                                    <Link  className="nav-link" to={'/home'}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/newin">New In</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/women" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Women
                                    </Link>
                                    <ul className="dropdown-menu Menu " aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="/women/saree">Saree</Link></li>
                                        <li><Link className="dropdown-item" to="/women/kurti">Kurti</Link></li>
                                        <li><Link className="dropdown-item" to="/women/orna">Orna</Link></li>
                                        <li><Link className="dropdown-item" to="/women/salawerkameez">Salwar Kameez</Link></li>
                                        <li><Link className="dropdown-item" to="/women/blouse">Blouse</Link></li>
                                       

                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/man" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Men
                                    </Link>
                                    <ul className="dropdown-menu Menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="/men/panjabi">Panjabi</Link></li>
                                        <li><Link className="dropdown-item" to="/men/shirt">Shirt</Link></li>
                                        <li><Link className="dropdown-item" to="#">T-Shirt</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Jewellery
                                    </Link>
                                    <ul className="dropdown-menu Menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="/jewellary/necklace">Necklace</Link></li>
                                        <li><Link className="dropdown-item" to="/jewellary/earring">Ear Ring</Link></li>
                                        <li><Link className="dropdown-item" to="/jewellary/coker">Cokar</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Package
                                    </Link>
                                    <ul className="dropdown-menu Menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="/package">Surprise Package</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Gallery</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        </div >
    )
}
