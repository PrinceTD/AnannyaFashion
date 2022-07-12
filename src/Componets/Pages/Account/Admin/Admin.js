import React from 'react'
import useAuth from '../../../../hooks/useAuth'
import Account from '../Account'

function Admin() {
    const { user } = useAuth();
    return (

        <div>
            <div className='container pt-5 pb-5'>
                <div className='row'>
                    <div className='col-md-3'>
                        <Account></Account>
                    </div>
                    <div className='col-md-9 padding-site'>
                        <div>
                            <p>Your Account <b>{user.email}</b>. It's a admin account, so you can edit all products in this page. </p>
                        </div>
                        <div class="row row-cols-1 row-cols-md-3 g-3">
                            <div class="col">
                                <div class="card h-100">

                                    <div class="card-body">
                                        <h5 class="card-title">Jewlary</h5>
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
    )
}

export default Admin