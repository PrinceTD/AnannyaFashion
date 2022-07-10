import React from 'react'
import './Note.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faRightToBracket, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../../../hooks/useAuth'
import { Link } from 'react-router-dom'




export default function Note() {
    const { user, logOut } = useAuth();
    return (
        <div className=' colorBg'>
            <div className='d-flex container align-items-center justify-content-between' >
                <div>
                    <small className='pe-3'> <FontAwesomeIcon className='pe-2' icon={faPhone} /></small>
                    <small>
                        <FontAwesomeIcon className='pe-2' icon={faEnvelope} /></small>
                </div>
                <div className='d-flex'>

                    {
                        user.email ?
                            <a href='/myaccount'><button type="button" class="btn btn-sm"><small> <FontAwesomeIcon icon={faRightToBracket} /> Hello {user.email}</small>
                            </button></a> :
                            <a href='/login'><button type="button" class="btn btn-sm"><small> <FontAwesomeIcon icon={faRightToBracket} /> LOGIN / REGISTER</small></button></a>

                    }
                    <a href='/shoppingcart'>
                        <div className='font-border'>


                            <small className='ps-2'><FontAwesomeIcon icon={faShoppingCart} /></small>

                        </div>
                    </a>
                </div>

            </div>
        </div>
    )
}
