import React from "react";
import { NavLink } from "react-router-dom"
import Stars from '../../Stars/Stars'
import ImageLoader from '../../ImageLoader/ImageLoader'

export default function ProductCard({ product }) {

  return (
    <li className="product-card">
      <NavLink to={`/productDetails/${product.id}`}>
        <ImageLoader
          url={product.image}
          alt={product.title}
          backupUrl="/imgs/404/product404.png"
          backupAlt="Product Image 404"
        ></ImageLoader>
        <div className='infoDiv'>
          <p className='title'>{product.title}</p>
          <div className='ratingDiv'>
            <Stars initialRating={product.rating.rate} id={product.id} shouldHover={false}></Stars>
            <p>({product.rating.count})</p>
          </div>
          <div className='priceDiv'>
            {product.discount > 1 ?
              <>
                <p>${product.price}</p>
                <h4>
                  ${product.total}
                </h4>
              </>
              :
              <h4>${product.total}</h4>
            }
          </div>
        </div>
      </NavLink>
    </li>
  )
}

