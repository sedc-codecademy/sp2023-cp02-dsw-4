import React from 'react'
import { NavLink } from "react-router-dom"
import Stars from '../../Stars/Stars'
import ImageLoader from '../../ImageLoader/ImageLoader'

function TempProductCard({ product }) {
    return (
        <li>
            <NavLink>
                <ImageLoader
                    url={product.image}
                    alt={product.name}
                    backupUrl="/imgs/404/product404.png"
                    backupAlt="Product Image 404"
                ></ImageLoader>
                <div className='infoDiv'>
                    <p className='title'>{product.name}</p>
                    <div className='ratingDiv'>
                        <Stars initialRating={product.rating.rate} id={product.id}></Stars>
                        <p>({product.rating.count})</p>
                    </div>
                    <div className='priceDiv'>
                        {product.discount > 1 ?
                            <>
                                <p>${product.price}</p>
                                <h4>
                                    ${product.discountedPrice}
                                </h4>
                            </>
                            :
                            <h4>${product.discountedPrice}</h4>
                        }
                    </div>
                </div>
            </NavLink>
        </li>
    )
}

export default TempProductCard