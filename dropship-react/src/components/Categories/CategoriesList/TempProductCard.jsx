import React, { useState } from 'react';
import { NavLink } from "react-router-dom"
import Stars from '../../Stars/Stars'

function TempProductCard(props) {
    const [imageLoaded, setImageLoaded] = useState(true)

    const handleImageError = () => {
        setImageLoaded(false)
    }
    return (
        <li>
            <NavLink>
                {imageLoaded ? (
                    <img
                        src="/imgs/404/product404.jgp"
                        onError={handleImageError}
                        alt="Product"
                    />
                ) : (
                    <img src="/imgs/404/product404.png" alt="Product 404" />
                )}
                <div className='infoDiv'>
                    <p className='title'>{props.product.title}</p>
                    <div className='ratingDiv'>
                        <Stars initialRating={props.product.rating.rate} id={props.product.id}></Stars>
                        <p>({props.product.rating.count})</p>
                    </div>
                    <div className='priceDiv'>
                        {props.product.sale || props.product.sale === 1 ? (
                            <>
                                <p>{props.product.price}</p>
                                <h4>
                                    {(props.product.price - (props.product.price * (props.product.sale / 100)).toFixed(2)).toFixed(2)}
                                </h4>
                            </>) : (<h4>{props.product.price}</h4>)}
                    </div>
                </div>
            </NavLink>
        </li>
    )
}

export default TempProductCard