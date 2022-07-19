import { Button, Input, TextField } from '@mui/material'
import React, { useState } from 'react'
import Account from '../../Account'

function KurtiProductsAdd() {
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

        fetch("http://localhost:5000/kurti", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log('success :', data)
            })
            .catch(error => {
                console.error('error:', error);
            })

    }

    return (
        <div className='container pt-5 pb-5'>
            <div className='row'>
                <div className='col-md-3'>
                    <Account></Account>
                </div>
                <div className='col-md-9 padding-site'>
                    <h4>add a kurti</h4>
                    <br />
                    <from onSubmit={handelSubmit}>
                        <TextField
                            sx={{ width: '50%', marginBottom: '5px' }}
                            label="Product Name"
                            size="small"
                            onChange={e => setName(e.target.value)}
                            required
                            variant="outlined" />
                        <br />
                        <TextField
                            sx={{ width: '50%', marginBottom: '5px' }}
                            label="Product details"
                            size="small"
                            onChange={e => setDetails(e.target.value)}
                            type='text'
                            required
                            variant="outlined" />
                        <br />
                        <Input
                            sx={{ width: '50%', marginBottom: '5px' }}
                            accept="image/*"
                            onChange={e => setImg(e.target.files[0])}
                            multiple type="file" />
                        <br />
                        <TextField
                            sx={{ width: '50%', marginBottom: '5px' }}
                            label="Product Price"
                            size="small"
                            onChange={e => setPrice(e.target.value)}
                            type='number'
                            required
                            variant="outlined" />
                        <br />
                        <Button
                            sx={{ width: '50%', marginBottom: '5px' }}
                            type='submit'
                            variant="contained" >
                            Add Product
                        </Button>
                    </from>
                </div>
            </div>
        </div>
    )
}

export default KurtiProductsAdd