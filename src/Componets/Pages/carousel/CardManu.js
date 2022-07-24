
import React from 'react'
import { Link } from 'react-router-dom'

function CardManu() {
    return (
        <div className='d-flex justify-content-center container'>
            <div>
                <div>
                    <h4>FEATURED PRODUCTS</h4>
                </div>
                <div className='d-flex justify-content-center'>
                    <small>
                        <Link to={'/bestsells'}>

                            <span className='p-2'>
                                BEST SELLERS
                            </span>

                        </Link>
                        <Link to={'/featured'}>

                            <span className='p-2'>
                                FEATURED
                            </span>

                        </Link>
                    </small>
                </div>
            </div>

        </div>
    )
}

export default CardManu