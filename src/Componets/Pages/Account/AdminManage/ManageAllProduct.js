import React, { useEffect, useState } from 'react'
import useAuth from '../../../../hooks/useAuth';
import Account from '../Account'

function ManageAllProduct() {
    const { user } = useAuth()
    const [productLoad, setProductLoad] = useState([]);

    useEffect(() => {
        fetch(`https://tranquil-ridge-16978.herokuapp.com/product`)
            .then((res) => res.json())
            .then((data) => setProductLoad(data));
    }, [])
    const handleDeleteConfirm = (id) => {
        const confirm = window.confirm("are u sure")
        if (confirm) {
            fetch(
                `https://tranquil-ridge-16978.herokuapp.com/product/${id}`,
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
        <div className='container pt-5 pb-5'>
            <div className='row'>
                <div className='col-md-3'>
                    <Account></Account>
                </div>
                <div className='col-md-9 padding-site'>
                    <div>
                        <h3>this is manage seaction</h3>
                        <table className="table">
                            <thead>
                                <tr>


                                    <th scope="col">Product name</th>
                                    <th scope="col">delete</th>

                                </tr>
                            </thead>
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
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageAllProduct