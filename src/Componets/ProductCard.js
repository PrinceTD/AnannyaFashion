import React from 'react'
import { Link } from 'react-router-dom'
import './product.css'
import mukti from '../images/Card.jpg'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';

function ProductCard() {
    return (
        <div className='container'>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col ">
                    <div className="card border-0 h-100">
                        <Link to={'/women'} className=''>
                            <div className='card border-0'>
                                <img src={mukti} className="card-img-top" alt="..." />
                                <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                    <p className="rounded card-title pe-3 ps-3 bg-light"><VisibilityIcon /> <span>/</span> <ShoppingCartOutlinedIcon /> </p>
                                </div>
                            </div>
                        </Link>
                        <div className='text-center pt-2'>
                            <h6>Bilashita</h6>
                            <h5>1230-2000</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;