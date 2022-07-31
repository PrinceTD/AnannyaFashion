
import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../../Footer/Footer'
import Navbar from '../../../Header/Navbar'
import Account from '../../Account'
import bestSell from '../../../../../images/sell.png'
import Banner from '../../../../../images/banner.png'
import newProduct from '../../../../../images/newProduct.png'
import photo from '../../../../../images/photo.png'


function HomePageManage() {
    return (
        <div>
            <Navbar />
            <div className='container pt-5 pb-5'>
                <div className='row'>
                    <div className='col-md-3'>
                        <Account></Account>
                    </div>
                    <div className='col-md-9 padding-site'>
                        <div className="row row-cols-2 row-cols-md-3 g-3 admin-logo">
                            <div className="col">
                                <div className="card h-100">
                                    <Link to='/myaccount/admin/manageorder/homepage/bestsellsadd'>
                                        <Button disabled sx={{ color: " black" }} variant="text">
                                            <div className='text-center p-2'>
                                                <img src={bestSell}></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">BEST SELLS ADD</h5>
                                                </div>
                                            </div>
                                        </Button>
                                    </Link>

                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <Link to='/myaccount/admin/manageorder/homepage/banneradd'>
                                        <Button sx={{ color: " black" }} variant="text">
                                            <div className='text-center p-2'>
                                                <img src={Banner}></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">BANNER ADD</h5>
                                                </div>
                                            </div>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <Link to='/myaccount/admin/manageorder/homepage/newproductadd'>
                                        <Button sx={{ color: " black" }} variant="text">
                                            <div className='text-center p-2'>
                                                <img src={newProduct}></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">NEW PRODUCT ADD</h5>
                                                </div>
                                            </div>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <Link to='/myaccount/admin/manageorder/homepage/photoadd'>
                                        <Button disabled sx={{ color: " black" }} variant="text">
                                            <div className='text-center p-2'>
                                                <img src={photo}></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">GALLERY PHOTO ADD</h5>
                                                </div>
                                            </div>
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePageManage