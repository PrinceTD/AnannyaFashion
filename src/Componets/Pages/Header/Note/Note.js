import React from 'react'
import './Note.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faRightToBracket } from '@fortawesome/free-solid-svg-icons'

export default function Note() {
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
                    <button type="button" class="btn btn-sm"><small> <FontAwesomeIcon icon={faRightToBracket} /> LOGIN / REGISTER</small></button>
                </div>
            </div>
        </div>
    )
}
