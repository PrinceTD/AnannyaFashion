import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import useAuth from '../../../../hooks/useAuth'
import Account from '../Account'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Navbar from '../../Header/Navbar';
import Footer from '../../Footer/Footer';

function AddAdmin() {
    const { user } = useAuth();
    const [success, setSuccess] = useState(false)
    const [email, setEmail] = useState("");
    const handelOnBule = e => {
        setEmail(e.target.value);

    }

    const handelAdmin = e => {
        const user = { email };
        fetch('https://powerful-wildwood-87881.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail('')
                    setSuccess(true);
                    console.log(data);
                }

            })

        e.preventDefault();
    }

    return (
        <div>
            <Navbar />
            <div className='container pt-5 pb-5'>
                <div className='row'>
                    <div className='col-md-3'>
                        <Account></Account>
                    </div>
                    <div className='col-md-9 padding-site'>
                        <div className=''>
                            <div>
                                <p><b>{user.email},</b> Your're admin, so you can make admin.  </p>
                            </div>
                            <div className='container'>
                                <form onSubmit={handelAdmin}>
                                    <TextField
                                        sx={{ width: '75%' }}
                                        id="standard-basic"
                                        label="Email"
                                        variant="standard"
                                        type='email'
                                        onBlur={handelOnBule} />
                                    <br />
                                    <br />
                                    <Button type="submit" variant="contained"> Submit</Button>
                                </form>
                                {
                                    success && <Alert
                                        iconMapping={{
                                            success: <CheckCircleOutlineIcon fontSize="inherit" />,
                                        }}
                                    >
                                        Make Admin successfully!!
                                    </Alert>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AddAdmin