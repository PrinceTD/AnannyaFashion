import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function Register() {
    const [logInData, setLogInData] = useState({})
    

    const { user, authError, registerUser, isLoading } = useAuth();

    const handleOneChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = { ...logInData };
        newLogInData[field] = value;

        setLogInData(newLogInData);

    }

    const handleRegisterSubmit = e => {
        if (logInData.password != logInData.password2) {
            alert("your password didn't match");
            return;
        }

        registerUser(logInData.email, logInData.password);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Typography variant='body1'>
                        Register
                    </Typography>
                    {!isLoading &&
                        <form onSubmit={handleRegisterSubmit}>
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
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Re-Type Your password"
                                name='password2'
                                onChange={handleOneChange}
                                type='password'
                                variant="standard"
                            />
                            <br />
                            <Link to='/login'>
                                <Button>
                                    Already register? Plase Login.
                                </Button>
                            </Link>
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
                    {authError&& <Alert severity="error">{authError}</Alert>}
                </Grid>
            </Grid>

        </Container >
    )
}
