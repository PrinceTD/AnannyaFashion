import React from 'react'
import './Note.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../../../hooks/useAuth'
import FacebookIcon  from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';



export default function Note() {
    const { user, logOut } = useAuth();
    console.log(user)
    return (
        <div className=' colorBg'>
            <div className='d-flex container align-items-center justify-content-between' >
                <div className='social'>
                    <small className='pe-3 '> <InstagramIcon fontSize="small"></InstagramIcon></small>
                    <small>
                       <FacebookIcon fontSize="small"/>
                    </small>
                </div>
                <div className='d-flex'>

                    {
                        user.email ?
                            <a href='/myaccount'><button type="button" class="btn btn-sm"><small> <FontAwesomeIcon icon={faRightToBracket} /> Hello, {user.email}</small>
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
