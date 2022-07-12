import { Alert } from '@mui/material'
import React from 'react'
import Account from '../Account'

function Address() {
    return (
        <div>
            <div className='container pt-5 pb-5'>
                <div className='row'>
                    <div className='col-md-3'>
                        <Account></Account>
                    </div>
                    <div className='col-md-9 padding-site'>
                        <Alert severity="success" color="info">
                            The following addresses will be used on the checkout page by default.
                        </Alert>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Address