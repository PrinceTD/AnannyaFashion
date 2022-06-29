import { Button, Container, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Login() {
    const [loginData, setLoginData] = useState({})
    const handleOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handelLoginSubmit = e => {
        alert('hello')
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>

                <Grid item sx={{ mt: 10, mb: 10 }} xs={12} md={6}>
                    <h3>LOGIN</h3>
                    <from onSubmit={handelLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnchange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            name="password"
                            onChange={handleOnchange}
                            variant="standard"
                            type="password" />
                           
                            <Link to="/register">
                                    <Button style={{ textDecoration: 'none', alignItems: "center" }} variant='text'>new User? please Register</Button>
                                </Link>
                            
                        <Button sx={{ width: '75%', m: 1 }}
                            variant='contained'
                            type='submit'
                        >Log In
                        </Button>

                    </from>
                </Grid>
                <Grid item sx={{ mt: 10, mb: 10 }} xs={12} md={6}>
                    <h3>REGISTER</h3>
                    <p>
                        Registering for this site allows you to access your order status and history. Just fill in the fields below, and we'll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.
                    </p>
                   
                </Grid>
            </Grid>
        </Container>
    )
}
