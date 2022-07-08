import React from 'react'
import './account.css'
import DeshBoard from './DeshBoard/DeshBoard'

function Account() {
    return (
        <div className='container pt-4 pb-4'>
            <div className='row g-4'>
                <div className='col-md-3 border-account'>

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col"><h4>MY ACCOUNT</h4></th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                              <td>Deshboard</td>

                            </tr>
                            <tr>

                                <td>Order</td>

                            </tr>
                            <tr>
                                <td>Account Details</td>

                            </tr>
                            <tr>
                                <td>Logout</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='col-md-9'>
                    <DeshBoard></DeshBoard>
                </div>
            </div>
        </div>
    )
}

export default Account