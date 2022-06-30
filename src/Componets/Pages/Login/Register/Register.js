import React, { useState } from 'react'
import { Button, Container, Grid, TextField } from '@mui/material'
import { Link } from 'react-router-dom';


export default function Register() {
  const [loginData, setLoginData] = useState({})
  const handleOnchange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData }
    newLoginData[field] = value;
    setLoginData(newLoginData)
  }
  const handelLoginSubmit = e => {
    if (loginData.password !== loginData.password2) {
      alert('your password didnot match')
      return
    }

    e.preventDefault();
  }
  return (
    <div className='d-flex justify-content-center'>
      <Container>
        <Grid container spacing={2}>

          <Grid item sx={{ mt: 10, mb: 10 }} xs={12} md={12}>
            <h3>Register</h3>
            <from onSubmit={handelLoginSubmit}>
              <TextField
                sx={{ width: '75%', m: 1 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                type="email"
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
              <TextField
                sx={{ width: '75%', m: 1 }}
                id="standard-basic"
                label="ReType Your Password"
                name="password2"
                onChange={handleOnchange}
                variant="standard"
                type="password" />
              <br />

              <Link to="/login">
                <Button style={{ textDecoration: 'none', alignItems: "center" }} variant='text'>Already registered? please Login</Button>
              </Link>

              <Button sx={{ width: '75%', m: 1 }}
                variant='contained'
                type='submit'
              >Log In
              </Button>

            </from>
          </Grid>

        </Grid>
      </Container>
    </div>
  )
}
