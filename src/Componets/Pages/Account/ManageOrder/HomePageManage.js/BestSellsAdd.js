import { Alert, Button, Input, Snackbar, TextField } from '@mui/material'
import React, { useState } from 'react'
import Footer from '../../../Footer/Footer'
import Navbar from '../../../Header/Navbar'
import Account from '../../Account'

function BestSellsAdd() {
    const [open, setOpen] = useState(false);

    const [name, setName] = useState('');
    const [details, setDetails] = useState("");
    const [price, setPrice] = useState("");
    const [img, setImg] = useState(null);


    const handelSubmit = e => {
        e.preventDefault();
        if (!img) {
            return
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append("details", details);
        formData.append('price', price);
        formData.append('img', img);

        fetch("https://powerful-wildwood-87881.herokuapp.com/earring", {
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
                    <p>You Can add bestSell products</p>
                    <hr/>
                    <br />
                    <form onSubmit={handelSubmit}>
                        <TextField
                            sx={{ width: '100%', marginBottom: '8px' }}
                            label="Product Name"
                            size="small"
                            onChange={e => setName(e.target.value)}
                            required
                            variant="outlined" />
                        <br />
                        <TextField
                            sx={{ width: '100%', marginBottom: '8px' }}
                            multiline
                            rows={4}
                            label="Product details"
                            size="small"
                            onChange={e => setDetails(e.target.value)}
                            type='text'
                            required
                            variant="outlined" />
                        <br />
                        <Input
                            sx={{ width: '100%', marginBottom: '8px' }}
                            accept="image/*"
                            onChange={e => setImg(e.target.files[0])}
                            multiple type="file" />
                        <br />
                        <TextField
                            sx={{ width: '100%', marginBottom: '8px' }}
                            label="Product Price"
                            size="small"
                            onChange={e => setPrice(e.target.value)}
                            type='number'
                            required
                            variant="outlined" />
                        <br />
                        <Button
                            sx={{ width: '100%', marginBottom: '8px' }}
                            variant="contained" type="submit">
                            Add Doctor
                        </Button>
                    </form>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert
                            onClose={handleClose}
                            severity="success"
                            sx={{ width: "100%", fontSize: "1.2rem" }}
                        >
                            Product Added successfully!
                        </Alert>
                    </Snackbar>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    </div>
  )
}

export default BestSellsAdd