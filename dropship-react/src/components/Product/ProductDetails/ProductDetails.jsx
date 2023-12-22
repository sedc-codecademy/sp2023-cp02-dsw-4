import React, { useEffect, useState } from "react"
import { useParams, NavLink } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux"

import ProductCard from "../ProductCard/ProductCard"
import Stars, { EditStars } from "../../Stars/Stars"
import { DetailsNav } from "../../UsefullComponents/Usefull"
import Reviews, { EditReview } from "../../Reviews/Reviews"
import ImageLoader from "../../ImageLoader/ImageLoader"
import { ReviewSvg } from "../../Reviews/review"
import NotFound from "../../NotFound/NotFound"
import { useQuery } from "@tanstack/react-query"
import { getProductByID } from "../../../helpers/API/product-api"
import { BigLoadingDiv, LoadingErrorDiv } from "../../PageLoader/PageLoader"

import { addOrderItems } from "../../../store/slices/cartSlice/cartSlice"
import { getSubCategoryByID } from "../../../helpers/API/sub-category-api"
import { getUser } from "../../../helpers/API/user-api"
import { setNotificationData, setShowNotification } from "../../../store/slices/notificationSlice/notificationSlice"

function ProductDetails() {
  const { productId } = useParams()
  const dispatch = useDispatch()
  const tokens = useSelector((state) => state.role.authTokens)
  const userid = useSelector(state => state.role.userid)
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
  const orderItems = useSelector((state) => state.cart.orderItems)
  const [isInCart, setIsInCart] = useState(false)

  const { data: userData } = useQuery({
    queryKey: ['userQuery', userid],
    queryFn: () => getUser(userid, tokens),
    enabled: !!(tokens?.accessToken && tokens?.refreshToken && userid?.length > 0)
  })

  const {
    data: productData,
    error: productError,
    isError: isProdError,
    isPending: isProdPending,
    isSuccess: prodSuccess,
    refetch: prodRefetch,
  } = useQuery({
    queryKey: ["productQuery", productId],
    queryFn: () => getProductByID(productId),
  })

  const {
    data: subData,
    error: subError,
    isError: isSubError,
    isPending: isSubPending,
    isSuccess: subSuccess,
    refetch: subRefetch,
  } = useQuery({
    queryKey: ["subcategoryQuery", productData?.subcategory.id],
    queryFn: () => getSubCategoryByID(productData?.subcategory.id),
    enabled: !!productData
  })

  const [createReview, setCreateReview] = useState(false)
  const [tempRating, setTempRating] = useState(0)
  const [userReview, setUserReview] = useState(false)

  const [selectedColor, setSelectedColor] = useState('')
  const [selectedSize, setSelectedSize] = useState('')
  const [currentProductSize, setCurrentProductSize] = useState(null)

  const [allColors, setAllColors] = useState([])
  const [allSizes, setAllSizes] = useState([])
  const [uniqueColors, setUniqueColors] = useState([])
  const [uniqueSizes, setUniqueSizes] = useState([])
  const [filteredSizes, setFilteredSizes] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [allReviewsInvalid, setAllReviewsInvalid] = useState(false)

  useEffect(() => {
    setAllColors(productData?.productSizes?.reduce((acc, productSize) => {
      if (productSize.color) {
        acc.push(productSize.color)
      }
      return acc
    }, []))
    setAllSizes(productData?.productSizes?.reduce((acc, productSize) => {
      if (productSize.size) {
        acc.push(productSize.size)
      }
      return acc
    }, []))
  }, [productData])

  useEffect(() => {
    if (allSizes && allColors) {
      setUniqueColors([...new Set(allColors)])
      setUniqueSizes([...new Set(allSizes)])
    }
  }, [allColors, allSizes])

  useEffect(() => {
    setUserReview(isLoggedIn && productData ? productData.ratings.some((e) => e.userId === userData?.id) : false)
  }, [userReview, productData, isLoggedIn, userData])

  useEffect(() => {
    if (productData) {
      setAllReviewsInvalid(!userReview && productData?.ratings?.every((review) => review.review === "" && review.pros === "" && review.cons === ""))
    }
  }, [userReview, productData])

  useEffect(() => {
    if (productData) {
      if (productData.productSizes.length === 1) {
        setCurrentProductSize(productData.productSizes[0])
      } else if (selectedColor) {
        if (uniqueSizes.length !== 1 && selectedSize) {
          setCurrentProductSize(productData.productSizes.find(pSize => pSize.color === selectedColor && pSize.size === selectedSize))
        } else if (uniqueSizes.length === 1) {
          setCurrentProductSize(productData.productSizes.find(pSize => pSize.color === selectedColor))
        }
      } else {
        setCurrentProductSize(null)
      }
    } else {
      setCurrentProductSize(null)
    }
  }, [productData, selectedColor, selectedSize, uniqueSizes])

  useEffect(() => {
    setFilteredSizes(selectedColor && productData ? productData.productSizes.filter(e => e.color === selectedColor) : [])
  }, [selectedColor, productData])

  useEffect(() => {
    if (orderItems && currentProductSize) {
      const isInCart = orderItems.some(item => item.id === currentProductSize.id)
      setIsInCart(isInCart)
    }
  }, [orderItems, currentProductSize])

  const handleStarsClick = (e) => {
    setTempRating(e)
    setCreateReview(true)
  }

  const handleCancel = () => {
    setCreateReview(false)
  }

  const handleQuantityIncrement = () => {
    if (currentProductSize !== null && quantity < currentProductSize.stock) {
      setQuantity(quantity + 1)
    }
  }

  const handleQuantityDecrement = () => {
    if (currentProductSize !== null && quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleColorSelection = (color) => {
    setSelectedColor(color)
    setSelectedSize('')
    setCurrentProductSize(null)
    setQuantity(1)
  }

  const handleSizeSelection = (size) => {
    setSelectedSize(size)
    setQuantity(1)
  }

  const handleAddToCart = () => {
    let tempProduct = {
      ...currentProductSize,
      quantity: quantity,
      name: productData.name,
      price: productData.price,
      total: productData.discountedPrice,
      image: productData.image,
      discount: productData.discountPercentage,
      productId: productData.id
    }
    dispatch(addOrderItems(tempProduct))
    dispatch(setNotificationData({ title: 'Product added to cart', success: 'You can add different colors and sizes too, and change quantity in the Cart.', error: '' }))
    dispatch(setShowNotification(true))
  }

  return (
    <>
      {isProdPending ? (
        <BigLoadingDiv
          link={"/"}
          title={"loading product..."}
          message={"you can click here to retry if its taking too long"}
          refetch={prodRefetch}
        ></BigLoadingDiv>
      ) : prodSuccess && productData ? (
        <main className="product-page">
          <DetailsNav
            categoryid={productData.category.id}
            categorytitle={productData.category.name}
            subcategoryid={productData.subcategory.id}
            subcategorytitle={productData.subcategory.name}
          ></DetailsNav>

          <div className="product-details">
            <div className="product-image">
              <ImageLoader
                url={productData.image}
                alt={productData.name}
                backupUrl="/imgs/404/product404.png"
                backupAlt="Product Image 404"
              ></ImageLoader>
            </div>

            <div className="product-info">
              <div className="product-header">
                <h2 className="product-title">
                  <span>{productData.name}</span>
                  <NavLink to={`/manufacturer/${productData.manufacturer.id}`}>
                    <p>{productData.manufacturer.name}</p>
                    <ImageLoader
                      url={productData.manufacturer.image}
                      alt={productData.manufacturer.name}
                      backupUrl="/imgs/404/category404.png"
                      backupAlt="Manufacturer"
                    ></ImageLoader>
                  </NavLink>
                </h2>
                <div className="product-rating">
                  {userReview || !isLoggedIn || createReview ? (
                    <Stars
                      initialRating={productData.rating}
                      id={productId}
                    ></Stars>
                  ) : (
                    <EditStars
                      initialRating={productData.rating}
                      id={productId}
                      onClick={handleStarsClick}
                    ></EditStars>
                  )}
                  <p>({productData.ratings.length || 0})</p>
                </div>
              </div>
              <div className="variants">
                <div className="description-div">
                  <h3>Description</h3>
                  <p className="product-description">
                    {productData.description}
                  </p>
                </div>

                {uniqueColors.length > 1 && (
                  <div className="colors">
                    <h3>Colours</h3>
                    <ul>
                      {uniqueColors.map((color, index) => (
                        <ProductColor
                          key={index}
                          color={color}
                          handleColorSelection={handleColorSelection}
                          selectedColor={selectedColor}
                        ></ProductColor>
                      ))}
                    </ul>
                  </div>
                )}

                {uniqueSizes?.length > 1 && (
                  <div className="sizes">
                    <h3>Sizes</h3>
                    <ul>
                      {uniqueSizes?.map((size, index) => (
                        <ProductSizesLi
                          key={index}
                          uniqueSize={size}
                          handleSizeSelection={handleSizeSelection}
                          currentSize={filteredSizes.find(e => e.size === size)}
                          selectedSize={selectedSize}
                          selectedColor={selectedColor}
                        ></ProductSizesLi>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="paymentDiv">
                <div className="count">
                  <button
                    className="amount-btn"
                    onClick={handleQuantityDecrement}
                    disabled={quantity <= 1 || isInCart}
                  >
                    -
                  </button>
                  <p className="product-count">Amount: {quantity}</p>
                  <p className="product-count">
                    Available: {currentProductSize !== null ? currentProductSize.stock : "?"}
                  </p>
                  <button
                    className="amount-btn"
                    onClick={handleQuantityIncrement}
                    disabled={currentProductSize === null || quantity >= currentProductSize.stock || isInCart}
                  >
                    +
                  </button>
                </div>
                <div className="prices">
                  <p className="product-price">
                    <span>Price:</span>
                    <span>${productData.price}</span>
                  </p>
                  {productData.discountPercentage > 1 && (
                    <p className="product-discount">
                      <span>Discount:</span> <span>{productData.discountPercentage}%</span>
                    </p>
                  )}
                  <p className="product-total">
                    <span>Total:</span> <span>${productData.discountedPrice * quantity}</span>
                  </p>
                </div>

                <button disabled={currentProductSize === null || isInCart} className="buy-button" onClick={handleAddToCart}>
                  <svg viewBox="0 0 32 32">
                    <circle cx="10" cy="28" r="2" fill="currentColor" />
                    <circle cx="24" cy="28" r="2" fill="currentColor" />
                    <path
                      fill="currentColor"
                      d="M4.98 2.804A1 1 0 0 0 4 2H0v2h3.18l3.84 19.196A1 1 0 0 0 8 24h18v-2H8.82l-.8-4H26a1 1 0 0 0 .976-.783L29.244 7h-2.047l-1.999 9H7.62Z"
                    />
                    <path
                      fill="currentColor"
                      d="M18 6V2h-2v4h-4v2h4v4h2V8h4V6h-4z"
                    />
                  </svg>
                  <p>Add To Cart</p>
                </button>
              </div>
            </div>
          </div>

          <div className="block-header">
            <div>
              <h1>Customer Reviews</h1>
              <button
                disabled={createReview || userReview || !userData || !isLoggedIn}
                onClick={() => setCreateReview(true)}
              >
                <p>Review this product</p>
                <svg viewBox="0 0 32 32">
                  <path
                    fill="currentColor"
                    d="M2 26h28v2H2zM25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4l15-15zm-5-5L24 7.6l-3 3L17.4 7l3-3zM6 22v-3.6l10-10l3.6 3.6l-10 10H6z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {(!allReviewsInvalid || (userReview && isLoggedIn) || createReview) ? (
            <div className="reviews">
              <ul className="reviews-ul">
                {createReview && (
                  <EditReview
                    shouldEdit={true}
                    handleCancel={handleCancel}
                    review={{
                      author: `${userData?.firstName} ${userData?.lastName}`,
                      date: Date(),
                      title: "",
                      rate: tempRating,
                      review: "",
                      id: Date.now(),
                      pros: "",
                      cons: "",
                    }}
                    productId={productData.id}
                    userId={userData?.id}
                    new={true}
                  />
                )}
                {productData?.ratings?.map((review) =>
                  (review.userId === userData?.id && isLoggedIn && userReview) ? (
                    <EditReview key={review.id} review={review} userId={userData?.id} productId={productData.id} new={false}/>
                  ) : (
                    (review.review !== "" || review.pros !== "" || review.cons !== "") && <Reviews key={review.id} review={review} />
                  )
                )}
              </ul>
            </div>
          ) : (
            <div className="reviewIllustration">
              <ReviewSvg></ReviewSvg>
              <div>
                <h3>No reviews found.</h3>
                <p>Be The first one to review this product</p>
              </div>
            </div>
          )}

          <div className="block-header">
            <div>
              <h1>Related products</h1>
              <NavLink to={subData ? `/subcategory/${subData.id}` : '/'}>
                <p>Browse All</p>
                <svg viewBox="0 0 32 32">
                  <path
                    fill="currentColor"
                    d="m30 28.586l-4.689-4.688a8.028 8.028 0 1 0-1.414 1.414L28.586 30zM19 25a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6zM2 12h8v2H2zM2 2h16v2H2zm0 5h16v2H2z"
                  />
                </svg>
              </NavLink>
            </div>
          </div>
          <div className="related-products">
            {
              isSubPending || isSubError ? (
                <LoadingErrorDiv
                  isError={isSubError}
                  classTitle={"relatedProductsMain"}
                  errorMessage={subError?.message}
                  refetch={subRefetch}
                  loadMessage={"Loading Related Products"}
                ></LoadingErrorDiv>
              ) : subSuccess && subData ? (
                <>
                  {subData.products.slice(0, 4).map((product) => (
                    <ProductCard key={product.id} product={product} subCatImage={subData.image} />
                  ))}
                </>
              ) : (<></>)
            }
          </div>
        </main>
      ) : isProdError ? (
        <NotFound
          link={"/"}
          title={"dont have that one"}
          message={productError.message}
        ></NotFound>
      ) : (
        <></>
      )}
    </>
  )
}

const ProductColor = ({ color, handleColorSelection, selectedColor }) => {
  return (
    <li>
      <button disabled={color === selectedColor} onClick={() => handleColorSelection(color)}>
        <svg viewBox="0 0 150 150">
          <path
            d="M121.875 18.75H28.125C25.6386 18.75 23.254 19.7377 21.4959 21.4959C19.7377 23.254 18.75 25.6386 18.75 28.125V121.875C18.75 124.361 19.7377 126.746 21.4959 128.504C23.254 130.262 25.6386 131.25 28.125 131.25H121.875C124.361 131.25 126.746 130.262 128.504 128.504C130.262 126.746 131.25 124.361 131.25 121.875V28.125C131.25 25.6386 130.262 23.254 128.504 21.4959C126.746 19.7377 124.361 18.75 121.875 18.75ZM28.125 121.875V28.125H121.875V121.875H28.125Z"
            fill={color}
          />
          <rect x="40" y="40" width="70" height="70" rx="5" fill={color} />
        </svg>
        <p>{color}</p>
      </button>
    </li>
  )
}

const ProductSizesLi = ({ uniqueSize, currentSize, handleSizeSelection, selectedSize, selectedColor }) => {
  return (
    <li>
      <button disabled={!currentSize || currentSize?.size === selectedSize || currentSize?.stock < 1 || !selectedColor} className={currentSize?.size === selectedSize ? 'active' : ''} onClick={() => handleSizeSelection(currentSize?.size)}>
        <p>{uniqueSize}</p>
      </button>
    </li>
  )
}

export default ProductDetails
