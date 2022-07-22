import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Pages/Footer/Footer';
import Navbar from '../Pages/Header/Navbar';

export default function Login() {

    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();
    const [loginData, setLogInData] = useState({})

    const location = useLocation();
    const navigate = useNavigate();

    const handelGoogleSignIn = () => {

        signInWithGoogle(location, navigate);
    }


    const handleOneChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = { ...loginData };
        newLogInData[field] = value;
        setLogInData(newLogInData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }
    return (
        <div>
            <Navbar />
            <div className='pt-5 pb-5'>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='body1'>
                            LogIn
                        </Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your email"
                                name='email'
                                onChange={handleOneChange}
                                type='email'
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your password"
                                name='password'
                                onChange={handleOneChange}
                                type='password'
                                variant="standard"
                            />
                            <br />

                            <br />
                            <Button
                                variant='contained'
                                type='submit'
                                sx={{ width: '75%', m: 1 }}
                            >Login</Button>
                            <br />
                            {user.email && <Alert severity="success">login successfull</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>}
                        </form>
                        <br />

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className='d-flex'>
                            <div>
                                <h3>
                                    Login
                                </h3>
                                <p>
                                    Registering for this site allows you to access your order status and history. Just fill in the fields below, and we'll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.
                                </p>
                                <Link to='/register'>
                                    <Button>
                                        Register.
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Grid>
                </Grid>

            </Container >
            </div>
            <Footer></Footer>
        </div>
    )
}
