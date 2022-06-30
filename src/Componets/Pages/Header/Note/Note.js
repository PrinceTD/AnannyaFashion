import React from 'react'
import './Note.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../../../hooks/useAuth'




export default function Note() {
    const { user, logOut } = useAuth();
    return (
        <div className=' colorBg'>
            <div className='d-flex container align-items-center justify-content-between' >
                <div>
                    <small className='pe-3'> <FontAwesomeIcon className='pe-2' icon={faPhone} /><small> 01709247965</small></small>
                    <small>
                        <FontAwesomeIcon className='pe-2' icon={faEnvelope} /><small>anannya@gmail.com</small>
                    </small>
                </div>
                <div>

                    {
                        user.email ?
                            <button onClick={logOut} type="button" class="btn btn-sm"><small> <FontAwesomeIcon icon={faRightToBracket} /> LogOut</small>
                            </button> :
                            <a href='/login'><button type="button" class="btn btn-sm"><small> <FontAwesomeIcon icon={faRightToBracket} /> LOGIN / REGISTER</small></button></a>

                    }




                </div>
            </div>
        </div>
    )
}
