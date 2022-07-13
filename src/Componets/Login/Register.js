import { Alert, Box, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function Register() {
    const [logInData, setLogInData] = useState({})

    const navigate = useNavigate();
    const { user, authError, registerUser, isLoading } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = { ...logInData };
        newLogInData[field] = value;
        // console.log(newLogInData)
        setLogInData(newLogInData);

    }

    const handleRegisterSubmit = e => {
        if (logInData.password != logInData.password2) {
            alert("your password didn't match");
            return;
        }

        registerUser(logInData.name, logInData.email, logInData.password, navigate);
        e.preventDefault();
    }
    return (
        <div className='pt-5 pb-5'>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='body1'>
                            Register
                        </Typography>
                        {!isLoading &&
                            <form onSubmit={handleRegisterSubmit}>
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Your name"
                                    name='name'
                                    onBlur={handleOnBlur}
                                    type='text'
                                    variant="standard" />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Your email"
                                    name='email'
                                    onBlur={handleOnBlur}
                                    type='email'
                                    variant="standard" />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Your password"
                                    name='password'
                                    onBlur={handleOnBlur}
                                    type='password'
                                    variant="standard"
                                />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Re-Type Your password"
                                    name='password2'
                                    onBlur={handleOnBlur}
                                    type='password'
                                    variant="standard"
                                />
                                <br />

                                <br />
                                <Button
                                    variant='contained'
                                    type='submit'
                                    sx={{ width: '75%', m: 1 }}
                                >Register</Button>
                            </form>
                        }
                        {isLoading && <CircularProgress />}
                        {user.email && <Alert severity="success">user creted successfully</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <h3>
                                REGISTER
                            </h3>
                            <p>
                                Registering for this site allows you to access your order status and history. Just fill in the fields below, and we'll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.
                            </p>
                            <Link to='/login'>
                                <Button>
                                    Login
                                </Button>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>

            </Container >
        </div>
    )
}
