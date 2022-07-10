import React from 'react'
import useAuth from '../../../../hooks/useAuth'

function DeshBoard() {
    const { user, logOut } = useAuth();
    
    return (
    <div className='ps-3'>
            <p>Hello <b>{user.email}</b> (not <b>{user.email}</b>? <button onClick={logOut}>Log out</button> )</p>
            <div>
                <p>From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
            </div>
        </div>
        
    )
}

export default DeshBoard;