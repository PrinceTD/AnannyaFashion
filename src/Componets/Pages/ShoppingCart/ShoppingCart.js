import React from 'react'

function ShoppingCart() {

    return (
        <div className='container'>
            <div className='row g-4'>
                <div className='col-md-8'>
                    <table className="table table-sm">
                        <thead>
                            <tr>
                                <th scope="col">PRODUCT</th>
                                <th scope="col">PRICE</th>
                                <th scope="col">QUANTITY</th>
                                <th scope="col">SUBTOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>img</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>

                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>

                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
                <div className='col-md-4'>
                    <h2>Cart totals</h2>
                    <div>
                        <table className="table table-bordered">
                            <thead>
                                <tr>

                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>Mark</td>
                                    <td>Otto</td>

                                </tr>
                                <tr>

                                    <td>Jacob</td>
                                    <td>Thornton</td>

                                </tr>
                                <tr>

                                    <td>Jacob</td>
                                    <td>Thornton</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart