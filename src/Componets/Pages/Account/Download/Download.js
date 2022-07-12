import { Alert } from '@mui/material'
import React from 'react'
import Account from '../Account'

function Download() {
    return (
        <div>
            <div className='container pt-5 pb-5'>
                <div className='row'>
                    <div className='col-md-3'>
                        <Account></Account>
                    </div>
                    <div className='col-md-9 padding-site'>
                        <Alert variant="filled" severity="info">
                            BROWSE PRODUCTS || No downloads available yet.
                        </Alert>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Download