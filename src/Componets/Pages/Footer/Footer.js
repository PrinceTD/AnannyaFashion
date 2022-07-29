import React from 'react'
import './footer.css'
import logoAnannya from '../../../images/anannya.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../../hooks/useAuth'
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
    const { user } = useAuth();
    return (
        <div className='bgColor'>
            <div className='container mt-5 pb-5 pt-5'>
                <div className='row row-cols-1 row-cols-md-3 g-4 d-flex align-items-center'>
                    <div className=' col d-flex justify-content-center'>
                        <img src={logoAnannya} width='50%'></img>

                    </div>
                    <div className='col '>

                        <div>
                            <small>
                                <FontAwesomeIcon className='pe-2' icon={faLocationArrow} />Sylhet MAG Osmani Medical College road, Sylhet
                            </small>

                        </div>
                        <div>
                            <small>
                                <FontAwesomeIcon className='pe-2' icon={faPhone} />Phone:- +8801610637086
                            </small>

                        </div>
                        <div>
                            <small>
                                <FontAwesomeIcon className='pe-2' icon={faEnvelope} />Email:- anannya.spprt@gmail.com
                            </small>
                        </div>

                    </div>

                    <div className=' col'>
                        <div>
                            <p className='pt-3'>
                                ABOUT ANANNYA
                            </p>
                            <span className='text-light'><Link to='/about'>WHO WE ARE</Link></span>
                            <hr />
                            <p>SOCIAL LINKS</p>
                            <small className='pe-3 '>
                                <a className='text-light' href='https://www.instagram.com/_anannya_online_/' target="_blank"> <InstagramIcon fontSize="small"></InstagramIcon></a>
                            </small>
                            <small>
                                <a className='text-light' href='https://www.facebook.com/anannya74/' target="_blank"> <FacebookIcon fontSize="small" /></a>
                            </small>
                        </div>
                    </div>

                </div>
                <hr />
                <small>
                    <span>
                        ANANNYA © 2022 CREATED BY TEAM ANANNYA.
                    </span>
                    <span>
                        SUPPORT "PRINCE_TALUKDER".
                    </span>
                    
                </small>
            </div>
        </div>
    )
}
