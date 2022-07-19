import { Button, Input, TextField } from '@mui/material'
import React, { useState } from 'react'
import useAuth from '../../../../../hooks/useAuth';
import Account from '../../Account'

function KurtiProductsAdd() {
    const { user } = useAuth();
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

        fetch("https://powerful-wildwood-87881.herokuapp.com/kurti", {
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

    }

    return (
        <div className='container pt-5 pb-5'>
            <div className='row'>
                <div className='col-md-3'>
                    <Account></Account>
                </div>
                <div className='col-md-9 padding-site'>
                    <h4>{user}, It's an admin account. so, You can upload product</h4>
                    <br />
                    <form onSubmit={handelSubmit}>
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
                            variant="contained" type="submit">
                            Add Doctor
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default KurtiProductsAdd