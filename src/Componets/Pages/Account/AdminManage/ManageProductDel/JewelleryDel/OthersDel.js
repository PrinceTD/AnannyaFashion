import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Footer from '../../../../Footer/Footer';
import Navbar from '../../../../Header/Navbar';
import Account from '../../../Account';

function OthersDel() {
    const [productLoad, setProductLoad] = useState([]);

    useEffect(() => {
        fetch(`https://powerful-wildwood-87881.herokuapp.com/other`)
            .then((res) => res.json())
            .then((data) => setProductLoad(data));
    }, [])
    const handleDeleteConfirm = (id) => {
        const confirm = window.confirm("are u sure")
        if (confirm) {
            fetch(
                `https://powerful-wildwood-87881.herokuapp.com/other/${id}`,
                {
                    method: "DELETE",
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    const rest = productLoad.filter((Singleproduct) => Singleproduct._id !== id);
                    setProductLoad(rest);

                });
        }

    };
    return (

        <div>
            <Navbar></Navbar>
            <div className='container pt-5 pb-5'>
                <div className='row'>
                    <div className='col-md-3'>
                        <Account></Account>
                    </div>
                    <div className='col-md-9 padding-site'>
                        <h3>this is manage seaction</h3>
                        <table className="table">
                            <thead>
                                <tr>


                                    <th scope="col">Product name</th>
                                    <th scope="col">delete</th>

                                </tr>
                            </thead>
                            {productLoad.length === 0 ? <CircularProgress /> :
                            <tbody>
                                {
                                    productLoad.map(SingleProduct =>
                                        <tr
                                            key={SingleProduct._id}
                                        >

                                            <td>{SingleProduct.name}</td>
                                            <td><button onClick={() => handleDeleteConfirm(SingleProduct._id)}>X</button></td>

                                        </tr>
                                    )
                                }

                            </tbody>
}
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>


    )
}

export default OthersDel