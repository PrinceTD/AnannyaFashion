import { Button } from '@mui/material';
import React from 'react'
import useAuth from '../../../../hooks/useAuth';
import Account from '../Account'
import './deshboard.css'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

function DeshBoard() {
    const { user, logOut } = useAuth();
    return (
        <div className='container pt-5 pb-5'>
            <div className='row'>
                <div className='col-md-3'>
                    <Account></Account>
                </div>
                <div className='col-md-9 padding-site'>
                    <div>
                        <div>
                            Hello, <b>{user.email}</b>  (not <b>{user.email}</b>? <Button onClick={logOut} color="secondary">Logout</Button>)
                        </div>
                        <div className='pt-2'>
                            <div class="row row-cols-1 row-cols-md-3 g-3">
                                <div class="col">
                                    <div class="card h-100">
                                        
                                        <div class="card-body">
                                            <h5 class="card-title">ORDER</h5>
                                           
                                        </div>

                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card h-100">
                                        
                                        <div class="card-body">
                                            <h5 class="card-title">DOWNLOADS</h5>
                                           
                                        </div>

                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card h-100">
                                        
                                        <div class="card-body">
                                            <h5 class="card-title">ADDRESS</h5>
                                           
                                        </div>

                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card h-100">
                                        
                                        <div class="card-body">
                                            <h5 class="card-title">LOGOUT</h5>
                                           
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default DeshBoard