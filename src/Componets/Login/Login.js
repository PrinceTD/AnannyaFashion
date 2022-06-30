import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import { width } from '@mui/system';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Login() {

    const [logInData, setLogInData] = useState({})

    const handleOneChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = { ...logInData };
        newLogInData[field] = value;
        setLogInData(newLogInData);
    }

    const handleLoginSubmit = e => {

        alert('hello')
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
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
                        <br/>
                        <Link to='/register'>
                            <Button>
                                New User? Plase Register.
                            </Button>
                        </Link>
                        <br/>
                        <Button
                            variant='contained'
                            type='submit'
                            sx={{ width: '75%', m: 1 }}
                        >Login</Button>
                    </form>
                </Grid>
            </Grid>

        </Container >
    )
}
