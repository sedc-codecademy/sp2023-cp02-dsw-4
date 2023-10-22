import React, { useEffect, useState } from "react"
import { useParams, Navigate, NavLink } from 'react-router-dom'

import { useSelector } from "react-redux"
import { selectProducts } from "../../../store/selectors/productSelector"

import ProductCard from "../ProductCard/ProductCard"
import Stars from '../../Stars/Stars'
import { DetailsNav } from "../../UsefullComponents/Usefull"
import Reviews from "../../Reviews/Reviews"
import ImageLoader from "../../ImageLoader/ImageLoader"
import { ReviewSvg } from "../../Reviews/review"
import NotFound from "../../NotFound/NotFound"

const getRandomProducts = (products, count) => {
  const copiedProducts = [...products]
  const shuffled = copiedProducts.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

const reviews = [
]

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

  const discountedPrice = product?.sale
    ? (product?.price - product?.price * (product?.sale / 100)).toFixed(2)
    : null;
  const discount = product?.price - discountedPrice

  const totalPrice = (
    product?.sale
      ? product?.price + product?.shippingPrice - discount
      : product?.price + product?.shippingPrice
  ).toFixed(2)

  return (
    <>
      {product ?
        <main className="product-page">
          <DetailsNav
            categoryid={product.categoryid}
            categorytitle={product.categorytitle}
            subcategoryid={product.subcategoryid}
            subcategorytitle={product.subcategorytitle}
          ></DetailsNav>

          <div className="product-details">
            <div className="product-image">
              <ImageLoader
                url={product.image || ''}
                alt={product.title}
                backupUrl="/imgs/404/product404.png"
                backupAlt="Product Image 404"
              ></ImageLoader>
            </div>

            <div className="product-info">
              <div className="product-header">
                <h2 className="product-title">{product.title}</h2>
                <div className="product-rating">
                  <Stars initialRating={product.rating.rate} id={productId}></Stars>
                  <p>(28)</p>
                </div>
              </div>
              <div className="variants">
                <div className="description-div">
                  <h3>Description</h3>
                  <p className="product-description">{product.description}</p>
                </div>
                {product.colors.length > 1 && <div className="colors">
                  <h3>Colours</h3>
                  <ul>
                    {product.colors.map((color, index) => (
                      <li key={index}>
                        <button>
                          <svg viewBox="0 0 150 150">
                            <path d="M121.875 18.75H28.125C25.6386 18.75 23.254 19.7377 21.4959 21.4959C19.7377 23.254 18.75 25.6386 18.75 28.125V121.875C18.75 124.361 19.7377 126.746 21.4959 128.504C23.254 130.262 25.6386 131.25 28.125 131.25H121.875C124.361 131.25 126.746 130.262 128.504 128.504C130.262 126.746 131.25 124.361 131.25 121.875V28.125C131.25 25.6386 130.262 23.254 128.504 21.4959C126.746 19.7377 124.361 18.75 121.875 18.75ZM28.125 121.875V28.125H121.875V121.875H28.125Z" fill={color} />
                            <rect x="40" y="40" width="70" height="70" rx="5" fill={color} />
                          </svg>
                          <p>{color}</p>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>}

                {product.sizes?.length > 1 && <div className="sizes">
                  <h3>Sizes</h3>
                  <ul>
                    {product.sizes?.map((size, index) => (
                      <li key={index}>
                        <button>
                          <p>{size}</p>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>}

                <div className="sizes">
                  <h3>Sizes</h3>
                  <ul>
                    <li>
                      <button className="active">
                        <p>Large</p>
                      </button>
                    </li>
                    <li>
                      <button>
                        <p>medium</p>
                      </button>
                    </li>
                    <li>
                      <button>
                        <p>Small</p>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="paymentDiv">
                <div className="count">
                  <button
                    className="quantity-btn"
                    onClick={() => setQuantity((prev) => Math.max(0, prev - 1))}
                  >
                    -
                  </button>
                  <p className="product-count">Amount: {quantity}</p>
                  <p className="product-count">Available: 8</p>
                  <button
                    className="quantity-btn"
                    onClick={() => setQuantity((prev) => Math.max(0, prev + 1))}
                    disabled
                  >
                    +
                  </button>
                </div>
                <div className="prices">
                  <p className="product-price"><span>Price:</span> <span>${product.price.toFixed(2)}</span></p>
                  <p className="product-shipping"><span>Shipping:</span> <span>${product.shippingPrice}</span></p>
                  {product.sale && (
                    <p className="product-discount"><span>Discount:</span> <span>${discount.toFixed(2)}</span></p>
                  )}
                  <p className="product-total"><span>Total:</span> <span>${totalPrice}</span></p>
                </div>

                <button className="buy-button"><svg viewBox="0 0 32 32"><circle cx="10" cy="28" r="2" fill="currentColor" /><circle cx="24" cy="28" r="2" fill="currentColor" /><path fill="currentColor" d="M4.98 2.804A1 1 0 0 0 4 2H0v2h3.18l3.84 19.196A1 1 0 0 0 8 24h18v-2H8.82l-.8-4H26a1 1 0 0 0 .976-.783L29.244 7h-2.047l-1.999 9H7.62Z" /><path fill="currentColor" d="M18 6V2h-2v4h-4v2h4v4h2V8h4V6h-4z" /></svg> <p>Add To Cart</p></button>
              </div>
            </div>
          </div>

          <div className="block-header">
            <div>
              <h1>Customer Reviews</h1>
              <button>
                <p>Review this product</p>
                <svg viewBox="0 0 32 32"><path fill="currentColor" d="M2 26h28v2H2zM25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4l15-15zm-5-5L24 7.6l-3 3L17.4 7l3-3zM6 22v-3.6l10-10l3.6 3.6l-10 10H6z" /></svg>
              </button>
            </div>
          </div>

          {reviews?.length ?
            <div className="reviews">
              <ul className="reviews-ul">
                {reviews.map((review) => (
                  <Reviews key={review.id} review={review} />
                ))}
              </ul>
            </div>
            :
            <div className="reviewIllustration">
              <ReviewSvg></ReviewSvg>
              <div>
                <h3>No reviews found.</h3>
                <p>Be The first one to review this product</p>
              </div>
            </div>
          }

          <div className="block-header">
            <div>
              <h1>Related products</h1>
              <NavLink>
                <p>Browse All</p>
                <svg viewBox="0 0 32 32"><path fill="currentColor" d="m30 28.586l-4.689-4.688a8.028 8.028 0 1 0-1.414 1.414L28.586 30zM19 25a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6zM2 12h8v2H2zM2 2h16v2H2zm0 5h16v2H2z" /></svg>
              </NavLink>
            </div>
          </div>
          <div className="related-products">
            {randomProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main> :
        <NotFound link={"/"} title={"dont have that one"} message={"you can try searching for other products"}></NotFound>
      }
    </>
  )
}

export default ProductDetails
