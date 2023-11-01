import React from "react";
import { NavLink } from "react-router-dom"
import Stars from '../../Stars/Stars'
import ImageLoader from '../../ImageLoader/ImageLoader'

export default function ProductCard(props) {
  const { product } = props
  
  return (
    <li className="product-card">
      <NavLink to={`/productDetails/${product.id}`}>
        <ImageLoader
          url={props.product.image || ''}
          alt={props.product.title}
          backupUrl="/imgs/404/product404.png"
          backupAlt="Product Image 404"
        ></ImageLoader>
        <div className='infoDiv'>
          <p className='title'>{props.product.title}</p>
          <div className='ratingDiv'>
            <Stars initialRating={props.product.rating.rate} id={props.product.id} shouldHover={false}></Stars>
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

