import React, { useEffect, useState } from "react"
import "./_main.scss"
import { useParams, Navigate } from 'react-router-dom'
import { useSelector } from "react-redux"
import { selectProducts } from "../../../store/selectors/productSelector"
import ProductCard from "../ProductCard/ProductCard"
import Stars from '../../Stars/Stars'

const getRandomProducts = (products, count) => {
  const copiedProducts = [...products]
  const shuffled = copiedProducts.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

function ProductDetails() {
  const { productId } = useParams()
  const products = useSelector(selectProducts)

  const [randomProducts, setRandomProducts] = useState([])
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    const randomProducts = getRandomProducts(products, 5)
    setRandomProducts(randomProducts)
  }, [products])

  const product = products.find((p) => p.id === productId)

  if (!product) {
    return <Navigate to="/not-found" />
  }

  const discountedPrice = product.sale
    ? (product.price - product.price * (product.sale / 100)).toFixed(2)
    : null;
  const discount = product.price - discountedPrice

  const totalPrice = (
    product.sale
      ? product.price + product.shippingPrice - discount
      : product.price + product.shippingPrice
  ).toFixed(2)


  return (
    <div className="product-page">
      <div className="product-details">
        <div className="product-image">
          <img
            src="https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png"
            alt="product"
          />
        </div>
        <div className="product-info">
          <h2 className="product-title">{product.title}</h2>
          <Stars initialRating={product.rating.rate} id={productId}></Stars>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <p className="product-shipping">Shipping: ${product.shippingPrice}</p>
          {product.sale && (
            <p className="product-discount">Discount: ${discount.toFixed(2)}</p>
          )}
          <p className="product-total">Total: ${totalPrice}</p>
          <div className="product-buttons">
            <div className="count">
              <button
                className="quantity-btn"
                onClick={() => setQuantity((prev) => Math.max(0, prev + 1))}
              >
                +
              </button>
              <p className="product-count">{quantity}</p>
              <button
                className="quantity-btn"
                onClick={() => setQuantity((prev) => Math.max(0, prev - 1))}
              >
                -
              </button>
            </div>
            <button className="buy-button">Buy Now</button>
            <button className="buy-button">Add To Cart</button>
          </div>
        </div>
      </div>
      <div className="suggested-for-you">
        <h1>Customer Reviews</h1>
      </div>
      <div className="reviews">
        <div className="review">
          <div className="review-header">
            <img
              src="https://via.placeholder.com/50"
              alt="Reviewer Avatar"
              className="review-avatar"
            />
            <div className="review-author-info">
              <p className="review-author">John Doe</p>
              <p className="review-date">September 15, 2023</p>
            </div>
          </div>
          <p className="review-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ullamcorper odio a lorem tempor, vel fermentum ante pulvinar."
          </p>
        </div>
        <div className="review">
          <div className="review-header">
            <img
              src="https://via.placeholder.com/50"
              alt="Reviewer Avatar"
              className="review-avatar"
            />
            <div className="review-author-info">
              <p className="review-author">Jane Smith</p>
              <p className="review-date">September 10, 2023</p>
            </div>
          </div>
          <p className="review-text">
            "Sed at tristique nisi, eu varius tortor. Duis vestibulum, nisl vel
            vehicula facilisis, risus felis tristique turpis."
          </p>
        </div>
      </div>
      <div className="suggested-for-you">
        <h1>Suggested for you</h1>
      </div>
      <div className="bestsellers-div">
        {randomProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductDetails
