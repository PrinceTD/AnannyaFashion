import React from 'react'
import './footer.css'
import logoAnannya from '../../../images/anannya.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../../hooks/useAuth'

export default function Footer() {
    const {user} = useAuth();
    return (
        <div className='bgColor'>
            <div className='container mt-5 pb-5 pt-5'>
                <div className='row row-cols-1 row-cols-md-3 g-4 d-flex align-items-center'>
                    <div className=' col d-flex justify-content-center'>
                        <img src={logoAnannya} width='50%'></img>

                    </div>
                    <div className='col'>

                        <div>
                            <small>
                                <FontAwesomeIcon className='pe-2' icon={faLocationArrow} />Shop-97, Block-C, Level-2, Bashundhara City Shopping Mall, Karwanbazar, Dhaka, Bangladesh
                            </small>

                        </div>
                        <div>
                            <small>
                                <FontAwesomeIcon className='pe-2' icon={faPhone} />Phone:- +098756765
                            </small>

                        </div>
                        <div>
                            <small>
                                <FontAwesomeIcon className='pe-2' icon={faEnvelope} />Email:- anannya.sporat@gmail.com
                            </small>
                        </div>

                    </div>

                    <div className=' col d-flex justify-content-center'>
                        <div>
                            <p className='pt-3'>
                                ABOUT ANANNYA
                            </p>
                            <a href='/about'>WHO WE ARE</a>
                            <hr/>
                            <p>SOCIAL LINKS</p>
                           
                        </div>
                    </div>

                </div>
                <hr />
                <small>
                    ANANNYA © 2022 CREATED BY TEAM ANANNYA. PROUDLY MADE IN BANGLADESH.
                </small>
            </div>
        </div>
    )
}
