import React, { useState } from 'react'
import { Alert, Button, Input, Snackbar } from '@mui/material'
import Footer from '../../../Footer/Footer';
import Navbar from '../../../Header/Navbar';
import Account from '../../Account';

function BannerAdd() {
  const [open, setOpen] = useState(false);

  const [img, setImg] = useState(null);


  const handelSubmit = e => {
    e.preventDefault();
    if (!img) {
      return
    }
    const formData = new FormData();
    formData.append('img', img);

    fetch("https://powerful-wildwood-87881.herokuapp.com/banner", {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        if (data.insertedId) {
          console.log("added succes")

        }
      })
      .catch(error => {
        console.error('error:', error);
      })
    setOpen(true);

  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <div className='container pt-5 pb-5'>
          <div className='row'>
            <div className='col-md-3'>
              <Account></Account>
            </div>
            <div className='col-md-9 padding-site'>
              <h4> It's an admin account. so, You can upload product</h4>
              <p>You Can add Banner</p>
              <hr />
              <br />
              <form onSubmit={handelSubmit}>
                <Input
                  sx={{ width: '100%', marginBottom: '8px' }}
                  accept="image/*"
                  onChange={e => setImg(e.target.files[0])}
                  multiple type="file" />
                <br />
                <Button
                  sx={{ width: '100%', marginBottom: '8px' }}
                  variant="contained" type="submit">
                  Add Banner
                </Button>
              </form>
              <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ width: "100%", fontSize: "1.2rem" }}
                >
                  Banner Added successfully!
                </Alert>
              </Snackbar>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default BannerAdd