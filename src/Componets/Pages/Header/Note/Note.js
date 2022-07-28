import React from 'react'
import './Note.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../../../hooks/useAuth'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom'



export default function Note() {
    const { user, logOut } = useAuth();

    return (
        <div className=' colorBg'>
            <div className='d-flex container align-items-center justify-content-between' >
                <div className='social'>
                    <small className='pe-3 '> 
                   <a className='text-light' href='https://www.instagram.com/_anannya_online_/' target="_blank"> <InstagramIcon fontSize="small"></InstagramIcon></a>
                    </small>
                    <small>
                       <a className='text-light' href='https://www.facebook.com/anannya74/' target="_blank"> <FacebookIcon fontSize="small" /></a>
                    </small>
                </div>
                <div className='d-flex'>

                    {
                        user.email ?
                            <Link to='/myaccount'><button type="button" className="btn btn-sm"><small> <FontAwesomeIcon icon={faRightToBracket} /> Hello, {user.displayName}</small>
                            </button></Link> :
                            <Link to='/login'><button type="button" className="btn btn-sm"><small> <FontAwesomeIcon icon={faRightToBracket} /> LOGIN / REGISTER</small></button></Link>

                    }
                   
                        <div className='font-border'>


                            <small className='ps-2'><FontAwesomeIcon icon={faShoppingCart} /></small>

                        </div>
                   
                </div>

            </div>
        </div>
    )
}
