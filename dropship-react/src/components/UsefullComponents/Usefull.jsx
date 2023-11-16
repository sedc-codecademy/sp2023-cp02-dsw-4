import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { selectProducts } from "../../store/selectors/productSelector"
import { setMobileFiltersOn } from '../../store/slices/filters/filtersSlice'
import ProductCard from '../Product/ProductCard/ProductCard'

export function DetailsNav(props) {
  return (
    <div className='categoriesHeader'>
      <NavLink to={"/"}>Home</NavLink>
      <svg viewBox="0 0 32 32"><path fill="currentColor" d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z" /></svg>
      <NavLink to={`/category/${props.categoryid}`}>{props.categorytitle}</NavLink>
      {props.subcategoryid && (
        <>
          <svg viewBox="0 0 32 32"><path fill="currentColor" d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z" /></svg>
          <NavLink to={`/subcategory/${props.subcategoryid}`}>{props.subcategorytitle}</NavLink>
        </>
      )}
    </div>
  )
}

export function DetailsFilters(props) {
  const dispatch = useDispatch()
  const isMobile = useSelector((state) => state.mobile.isMobile)
  const mobileFiltersOn = useSelector((state) => state.filters.mobileFiltersOn)

  const handleCloseButtonClick = () => {
    dispatch(setMobileFiltersOn(!mobileFiltersOn))
  }

  return (
    <div className='filtersContainer'>
      <h2>Filters
        {isMobile ?
          <button onClick={handleCloseButtonClick}>
            <svg viewBox="0 0 32 32"><path fill="currentColor" d="M17.414 16L26 7.414L24.586 6L16 14.586L7.414 6L6 7.414L14.586 16L6 24.586L7.414 26L16 17.414L24.586 26L26 24.586L17.414 16z"></path></svg>
          </button> : <button>Clear</button>
        }
      </h2>
      {isMobile &&
        <div className='orderByDiv'>
          <h3>Order By</h3>
          <ul>
            <li>
              <button className='active'>Popularity</button>
            </li>
            <li>
              <button>Price ascending</button>
            </li>
            <li>
              <button>Price descending</button>
            </li>
            <li>
              <button>Rating descending</button>
            </li>
            <li>
              <button>Rating ascending</button>
            </li>
          </ul>
        </div>}
      <div className="priceRangeFilter">
        {isMobile ? <h3>
          Price Range
        </h3> : <p>
          Price Range
          <button>
            <svg viewBox="0 0 32 32"><path fill="currentColor" d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z" /></svg>
          </button>
        </p>}
        <PriceRangeSlider></PriceRangeSlider>
      </div>
      {props.origin !== "manufacturer" &&
        <div className="manufacturersFilter">
          {isMobile ? <h3>Manufacturers</h3> : <p>Manufacturers</p>}
          <ManufacturersFilter></ManufacturersFilter>
        </div>
      }
      <div className="availabilityFilter">
        {isMobile ? <h3>Availability</h3> : <p>Availability</p>}
        <AvailabilityFilter></AvailabilityFilter>
      </div>
      <div className="colorFilter">
        {isMobile ? <h3>Colour</h3> : <p>Colour</p>}
        <ProductColorList></ProductColorList>
      </div>
      {isMobile &&
        <div className='mobileButtons'>
          <button>Clear</button>
          <button>Apply</button>
        </div>
      }
    </div>
  )
}

const ProductColorList = () => {
  const isMobile = useSelector((state) => state.mobile.isMobile)
  const products = useSelector(selectProducts)
  const allColors = products.reduce((acc, product) => {
    if (product.colors && product.colors.length > 0) {
      acc.push(...product.colors)
    } else {
      acc.push('Other')
    }
    return acc
  }, [])

  const uniqueColors = [...new Set(allColors)]

  return (
    <ul>
      {uniqueColors.map((color, index) => (
        <li key={index}>
          <button>
            {isMobile ?
              <>
                <div style={{
                  '--color': color === 'Other'
                    ? `conic-gradient(from 90deg,violet,indigo,blue,green,yellow,orange,red,violet)`
                    : color,
                }}>
                  <svg viewBox="0 0 32 32">
                    <path d="M13.8232 21.7668L14 21.9435L14.1768 21.7668L23.1828 12.7628L23.3601 12.5855L23.1822 12.4087L21.5862 10.8227L21.4095 10.647L21.2332 10.8232L14 18.0564L10.7668 14.8232L10.59 14.6464L10.4132 14.8232L8.82323 16.4132L8.64645 16.59L8.82323 16.7668L13.8232 21.7668ZM8.36092 4.56729C10.6221 3.05642 13.2805 2.25 16 2.25C19.6467 2.25 23.1441 3.69866 25.7227 6.27728C28.3013 8.85591 29.75 12.3533 29.75 16C29.75 18.7195 28.9436 21.3779 27.4327 23.6391C25.9218 25.9003 23.7744 27.6626 21.2619 28.7033C18.7494 29.744 15.9848 30.0163 13.3175 29.4858C10.6503 28.9552 8.20026 27.6457 6.27729 25.7227C4.35432 23.7997 3.04476 21.3497 2.51421 18.6825C1.98366 16.0153 2.25596 13.2506 3.29666 10.7381C4.33737 8.22562 6.09974 6.07816 8.36092 4.56729Z" stroke="currentColor" stroke-width="1" />
                  </svg>

                </div>
              </>
              :
              <>
                <svg viewBox="0 0 150 150">
                  <path d="M121.875 18.75H28.125C25.6386 18.75 23.254 19.7377 21.4959 21.4959C19.7377 23.254 18.75 25.6386 18.75 28.125V121.875C18.75 124.361 19.7377 126.746 21.4959 128.504C23.254 130.262 25.6386 131.25 28.125 131.25H121.875C124.361 131.25 126.746 130.262 128.504 128.504C130.262 126.746 131.25 124.361 131.25 121.875V28.125C131.25 25.6386 130.262 23.254 128.504 21.4959C126.746 19.7377 124.361 18.75 121.875 18.75ZM28.125 121.875V28.125H121.875V121.875H28.125Z" fill={color === 'Other' ? 'url(#gradient)' : color} />
                  <rect x="40" y="40" width="70" height="70" rx="5" fill={color === 'Other' ? 'url(#gradient)' : color} />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="violet" />
                      <stop offset="12.5%" stopColor="indigo" />
                      <stop offset="25%" stopColor="blue" />
                      <stop offset="37.5%" stopColor="green" />
                      <stop offset="50%" stopColor="yellow" />
                      <stop offset="62.5%" stopColor="orange" />
                      <stop offset="75%" stopColor="red" />
                      <stop offset="100%" stopColor="violet" />
                    </linearGradient>
                  </defs>
                </svg>
              </>
            }
            <p>{color === 'Other' ? 'Other' : color}</p>
            <span>({allColors.filter(c => c === color).length})</span>
          </button>
        </li>
      ))}
    </ul>
  )
}

const AvailabilityFilter = () => {
  const isMobile = useSelector((state) => state.mobile.isMobile)
  const products = useSelector(selectProducts)

  const inStockCount = products.filter(product => product.stock > 0).length
  const outOfStockCount = products.filter(product => product.stock === 0).length
  const inStockClass = inStockCount === 0 || outOfStockCount === 0 ? 'inactive' : ''
  return (
    <ul>
      <li>
        <button className={inStockClass}>
          <svg viewBox="0 0 32 32">
            <path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z" />
            <path fill="currentColor" d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6Z" />
          </svg>
          {isMobile ?
            <>
              <div>
                <p>In Stock</p>
                <span>({inStockCount})</span>
              </div>
            </>
            :
            <>
              <p>In Stock</p>
              <span>({inStockCount})</span>
            </>
          }
        </button>
      </li>
      <li>
        <button className={inStockClass}>
          <svg viewBox="0 0 32 32">
            <path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z" />
            <path fill="currentColor" d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6Z" />
          </svg>
          {isMobile ?
            <>
              <div>
                <p>Out Of Stock</p>
                <span>({inStockCount})</span>
              </div>
            </>
            :
            <>
              <p>Out Of Stock</p>
              <span>({inStockCount})</span>
            </>
          }
        </button>
      </li>
      <li>
        <button className='active'>
          <svg viewBox="0 0 32 32">
            <path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z" />
            <path fill="currentColor" d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6Z" />
          </svg>
          {isMobile ?
            <>
              <div>
                <p>All</p>
                <span>({inStockCount})</span>
              </div>
            </>
            :
            <>
              <p>All</p>
              <span>({inStockCount})</span>
            </>
          }
        </button>
      </li>
    </ul>
  )
}

const ManufacturersFilter = () => {
  const isMobile = useSelector((state) => state.mobile.isMobile)
  const products = useSelector(selectProducts)

  const manufacturerCounts = {}

  products.forEach((product) => {
    const manufacturer = product.manufacturer || 'Unknown'
    manufacturerCounts[manufacturer] = (manufacturerCounts[manufacturer] || 0) + 1
  })

  const manufacturerNames = Object.keys(manufacturerCounts)

  return (
    <ul className='manufacturer-list'>
      {manufacturerNames.map((manufacturerName) => (
        <li key={manufacturerName}>
          <button>
            {isMobile ?
              <>
                <div>
                  <p>{manufacturerName}</p>
                  <span>({manufacturerCounts[manufacturerName]})</span>
                </div>
                <svg viewBox="0 0 150 150">
                  <path d="M121.875 18.75H28.125C25.6386 18.75 23.254 19.7377 21.4959 21.4959C19.7377 23.254 18.75 25.6386 18.75 28.125V121.875C18.75 124.361 19.7377 126.746 21.4959 128.504C23.254 130.262 25.6386 131.25 28.125 131.25H121.875C124.361 131.25 126.746 130.262 128.504 128.504C130.262 126.746 131.25 124.361 131.25 121.875V28.125C131.25 25.6386 130.262 23.254 128.504 21.4959C126.746 19.7377 124.361 18.75 121.875 18.75ZM28.125 121.875V28.125H121.875V121.875H28.125Z" fill="currentColor" />
                  <rect x="40" y="40" width="70" height="70" rx="5" fill="currentColor" />
                </svg>
              </>
              :
              <>
                <svg viewBox="0 0 150 150">
                  <path d="M121.875 18.75H28.125C25.6386 18.75 23.254 19.7377 21.4959 21.4959C19.7377 23.254 18.75 25.6386 18.75 28.125V121.875C18.75 124.361 19.7377 126.746 21.4959 128.504C23.254 130.262 25.6386 131.25 28.125 131.25H121.875C124.361 131.25 126.746 130.262 128.504 128.504C130.262 126.746 131.25 124.361 131.25 121.875V28.125C131.25 25.6386 130.262 23.254 128.504 21.4959C126.746 19.7377 124.361 18.75 121.875 18.75ZM28.125 121.875V28.125H121.875V121.875H28.125Z" fill="currentColor" />
                  <rect x="40" y="40" width="70" height="70" rx="5" fill="currentColor" />
                </svg>
                <p>{manufacturerName}</p>
                <span>({manufacturerCounts[manufacturerName]})</span>
              </>
            }
          </button>
        </li>
      ))}
    </ul>
  )
}

const PriceRangeSlider = () => {
  const products = useSelector(selectProducts)
  const initialMinPrice = products.length > 0 ? Math.min(...products.map(product => {
    return product.sale > 1 ? product.price - (product.price * (product.sale / 100)) : product.price
  })) : 1
  const initialMaxPrice = products.length > 0 ? Math.max(...products.map(product => {
    return product.sale > 1 ? product.price - (product.price * (product.sale / 100)) : product.price
  })) : 1000

  const priceGap = initialMinPrice
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(initialMaxPrice)

  const minRangeValue = initialMinPrice
  const maxRangeValue = initialMaxPrice

  const handlePriceInputChange = (e) => {
    const { name, value } = e.target
    if (name === "minPrice" && (value < (maxPrice - priceGap)) && value > 0) {
      setMinPrice(parseInt(value))
    } else if (name === "maxPrice" && (value - minPrice >= priceGap) && value <= maxRangeValue) {
      setMaxPrice(parseInt(value))
    }
  }

  const handleRangeInputChange = (e) => {
    const { name, value } = e.target

    if (name === "minRangeValue" && (value < (maxPrice - priceGap))) {
      setMinPrice(parseInt(value))
    } else if (name === "maxRangeValue" && (value > (minPrice + priceGap))) {
      setMaxPrice(parseInt(value))
    }
  }
  const progressWidth = ((maxPrice - minPrice) / (maxRangeValue - 0)) * 100
  const progressLeft = ((minPrice - 0) / (maxRangeValue - 0)) * 100

  return (
    <>
      <div className="price-input">
        <div>
          <input
            type="text"
            name="minPrice"
            value={minPrice}
            onChange={handlePriceInputChange}
          />
          <input
            type="text"
            name="maxPrice"
            value={maxPrice}
            onChange={handlePriceInputChange}
          />
        </div>
      </div>
      <div className="slider">
        <div className='progress' style={{ width: `${progressWidth}%`, left: `${progressLeft}%` }}></div>
        <div className="range-input">
          <input
            className="range-min"
            type="range"
            name="minRangeValue"
            value={minPrice}
            min={0}
            max={maxRangeValue}
            onChange={handleRangeInputChange}
          />
          <input
            className="range-max"
            type="range"
            name="maxRangeValue"
            value={maxPrice}
            min={minRangeValue}
            max={maxRangeValue}
            onChange={handleRangeInputChange}
          />
        </div>

        <PillarGraph products={products} minPrice={initialMinPrice} maxPrice={initialMaxPrice} progressLeft={progressLeft} progressWidth={progressWidth} sensitivityMargin={4}></PillarGraph>
      </div>

      <ProductList minPrice={initialMinPrice} maxPrice={initialMaxPrice}></ProductList>
    </>
  )
}

const ProductList = ({ minPrice, maxPrice }) => {
  const isMobile = useSelector((state) => state.mobile.isMobile)
  const products = useSelector(selectProducts)

  const salePrices = products.map(product => {
    return product.sale > 1 ? product.price - (product.price * (product.sale / 100)) : product.price
  })

  const range = (maxPrice - minPrice) / 4

  let sectionOne = 0
  let sectionTwo = 0
  let sectionThree = 0
  let sectionFour = 0

  salePrices.forEach(price => {
    if (price <= minPrice + range) {
      sectionOne++
    } else if (price <= minPrice + range * 2) {
      sectionTwo++
    } else if (price <= minPrice + range * 3) {
      sectionThree++
    } else {
      sectionFour++
    }
  })

  return (
    <ul className="price-list">
      <li>
        <button className='active'>
          {!isMobile && <svg viewBox="0 0 32 32"><path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z" /><path fill="currentColor" d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6Z" /></svg>}
          <p>Up to {(minPrice + range).toFixed(2)} $</p>
          <span>({sectionOne})</span>
        </button>
      </li>
      <li>
        <button>
          {!isMobile && <svg viewBox="0 0 32 32"><path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z" /><path fill="currentColor" d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6Z" /></svg>}
          <p>{(minPrice + range).toFixed(2)} - {(minPrice + range * 2).toFixed(2)} $</p>
          <span>({sectionTwo})</span>
        </button>
      </li>
      <li>
        <button>
          {!isMobile && <svg viewBox="0 0 32 32"><path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z" /><path fill="currentColor" d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6Z" /></svg>}
          <p>{(minPrice + range * 2).toFixed(2)} - {(minPrice + range * 3).toFixed(2)} $</p>
          <span>({sectionThree})</span>
        </button>
      </li>
      <li>
        <button>
          {!isMobile && <svg viewBox="0 0 32 32"><path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z" /><path fill="currentColor" d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6Z" /></svg>}
          <p>{(minPrice + range * 3).toFixed(2)} $ and above</p>
          <span>({sectionFour})</span>
        </button>
      </li>
    </ul>
  )
}

const PillarGraph = ({ products, minPrice, maxPrice, progressLeft, progressWidth, sensitivityMargin }) => {
  const range = maxPrice - minPrice
  const numPillars = 15

  const pillarElements = Array(numPillars).fill().map((_, index) => {
    const pillarLeft = (index * (100 / numPillars))
    const pillarRight = pillarLeft + (100 / numPillars)
    const pillarFill = progressLeft >= (pillarRight - sensitivityMargin) || (progressLeft + progressWidth) <= (pillarLeft + sensitivityMargin)
      ? 'var(--tertColor2)'
      : 'var(--paleAccentThree)'
    const pillarStroke = progressLeft >= (pillarRight - sensitivityMargin) || (progressLeft + progressWidth) <= (pillarLeft + sensitivityMargin)
      ? 'var(--tertColor)'
      : 'var(--paleAccentThree)'
    const pillarHeight = products.reduce((height, product) => {
      const productPosition = ((product.price - minPrice) / range) * 100
      if (productPosition >= pillarLeft && productPosition < pillarRight) {

        if (height <= 50) {
          return height + 5
        } else {
          return 50
        }
      }
      return height
    }, 10)

    return (
      <rect
        key={index}
        x={`${pillarLeft}%`}
        y={100 - pillarHeight}
        width={`${(100 / numPillars)}%`}
        height={pillarHeight}
        fill={pillarFill}
        stroke={pillarStroke}
        strokeWidth="1.5"
      />
    )
  })

  return (
    <svg width="100%" height="100">
      {pillarElements}
    </svg>
  )
}

export const DetailsAllProducts = ({ dataObject, origin }) => {
  const products = dataObject.products
  const isMobile = useSelector((state) => state.mobile.isMobile)

  const filters = [{
    title: 'Xiaomi'
  }, {
    title: 'Price 1100 - 2000'
  }, {
    title: 'Red'
  }]

  const itemsPerPage = 16
  const [currentPage, setCurrentPage] = useState(1)

  const indexOfLastProduct = currentPage * itemsPerPage
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

  const totalPages = Math.ceil(products.length / itemsPerPage)

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className='listContainer'>
      <div className='listContainerHeader'>
        <div>
          <h1>{dataObject.title} <span>{products.length} products</span></h1>
          {!isMobile && <button>Price ASC</button>}
        </div>

        <div className='rightHeader'>
          <ul className='addedFilters'>
            <>
              {filters?.map((filter, index) => (
                <li key={index}>
                  <button>
                    <p>{filter.title}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M17.414 16L24 9.414L22.586 8L16 14.586L9.414 8L8 9.414L14.586 16L8 22.586L9.414 24L16 17.414L22.586 24L24 22.586L17.414 16z" /></svg>
                  </button>
                </li>
              ))}
              {filters.length > 1 && (
                <li className='clearAll'>
                  <button>
                    <p>Clear All</p>
                  </button>
                </li>
              )}
            </>
          </ul>

          {(!isMobile || products.length >= 16) && (
            <div className="pagination top">
              <button onClick={prevPage} disabled={currentPage === 1}>
                <svg viewBox="0 0 32 32"><path fill="currentColor" d="M10 16L20 6l1.4 1.4l-8.6 8.6l8.6 8.6L20 26z" /></svg>
              </button>
              <div>
                {currentPage > 2 && (
                  <>
                    <span onClick={() => setCurrentPage(1)}>1</span>
                    {currentPage > 3 && <span className='dots'>...</span>}
                  </>
                )}
                {Array.from({ length: Math.min(3, totalPages) }).map((_, index) => {
                  const pageToShow = currentPage - 1 + index;
                  if (pageToShow <= totalPages - 1) {
                    return (
                      <span
                        key={pageToShow}
                        onClick={() => setCurrentPage(pageToShow + 1)}
                        className={currentPage === pageToShow + 1 ? 'currentPage' : ''}
                      >
                        {pageToShow + 1}
                      </span>
                    )
                  } return null
                })}
                {currentPage < totalPages - 2 && (
                  <>
                    {currentPage < totalPages - 3 && <span className='dots'>...</span>}
                    <span onClick={() => setCurrentPage(totalPages)}>{totalPages}</span>
                  </>
                )}
              </div>
              <button onClick={nextPage} disabled={currentPage === totalPages}>
                <svg viewBox="0 0 32 32"><path fill="currentColor" d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z" /></svg>
              </button>
            </div>
          )}
        </div>
      </div>

      {origin !== 'manufacturer' && <div className='topProducts'>
        <h3>Most Popular {dataObject.title} products</h3>
        <ul>
          {currentProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>}

      <ul className="allProducts">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>

      {products.length >= 16 &&
        <div className="pagination bottom">
          <button onClick={prevPage} disabled={currentPage === 1}>
            <svg viewBox="0 0 32 32"><path fill="currentColor" d="M10 16L20 6l1.4 1.4l-8.6 8.6l8.6 8.6L20 26z" /></svg>
          </button>
          <div>
            {currentPage > 2 && (
              <>
                <span onClick={() => setCurrentPage(1)}>1</span>
                {currentPage > 3 && <span className='dots'>...</span>}
              </>
            )}
            {Array.from({ length: Math.min(3, totalPages) }).map((_, index) => {
              const pageToShow = currentPage - 1 + index;
              if (pageToShow <= totalPages - 1) {
                return (
                  <span
                    key={pageToShow}
                    onClick={() => setCurrentPage(pageToShow + 1)}
                    className={currentPage === pageToShow + 1 ? 'currentPage' : ''}
                  >
                    {pageToShow + 1}
                  </span>
                )
              } return null
            })}
            {currentPage < totalPages - 2 && (
              <>
                {currentPage < totalPages - 3 && <span className='dots'>...</span>}
                <span onClick={() => setCurrentPage(totalPages)}>{totalPages}</span>
              </>
            )}
          </div>
          <button onClick={nextPage} disabled={currentPage === totalPages}>
            <svg viewBox="0 0 32 32"><path fill="currentColor" d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z" /></svg>
          </button>
        </div>
      }
    </div>
  )
}

export function formatDate(inputDate) {
  let tempDate = inputDate || new Date()

  const date = new Date(tempDate)
  const day = date.getDate()
  const month = date.getMonth() + 1 // Months are 0-indexed, so add 1
  const year = date.getFullYear()

  // Pad single digits with leading zero
  const formattedDay = String(day).padStart(2, '0')
  const formattedMonth = String(month).padStart(2, '0')

  return `${formattedDay}/${formattedMonth}/${year}`
}

export function addSpaceAfterComma(str) {
  return str.replace(/,(?=\S)/g, ', ');
}



