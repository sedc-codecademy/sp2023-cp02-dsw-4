import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from "react-redux"
import ProductCard from '../Product/ProductCard/ProductCard'
import { FilterSvg } from './filtersSvg'

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

export function DetailsFilters({
  origin,
  clearFilters,
  applyFilters,
  products,
  initialsPrices,
  uniqueColors,
  uniqueColorsCount,
  uniqueSizes,
  uniqueSizesCount,
  allManufacturers,
  filteredProducts,
  currentFilters,
  uniqueFilterColors,
  uniqueFilterSizes,
  filteredManufacturers,
  handlePriceChange,
  handlePriceRemove,
  handleOtherFiltersRemove,
  handleOtherFiltersAdd,
  handleCloseButtonClick
}) {
  const isMobile = useSelector((state) => state.mobile.isMobile)

  return (
    <div className='filtersContainer'>
      <h2>Filters
        {isMobile ?
          <button onClick={handleCloseButtonClick}>
            <svg viewBox="0 0 32 32"><path fill="currentColor" d="M17.414 16L26 7.414L24.586 6L16 14.586L7.414 6L6 7.414L14.586 16L6 24.586L7.414 26L16 17.414L24.586 26L26 24.586L17.414 16z"></path></svg>
          </button> : !isMobile && currentFilters ? <button onClick={clearFilters}>Clear</button> : <></>
        }
      </h2>
      <div className="priceRangeFilter">
        {isMobile ? <h3>
          Price Range
        </h3> : <p>
          Price Range
          <button>
            <svg viewBox="0 0 32 32"><path fill="currentColor" d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z" /></svg>
          </button>
        </p>}
        <PriceRangeSlider products={products} currentPrices={currentFilters?.price} initialPrices={initialsPrices} handlePriceRemove={handlePriceRemove} handlePriceChange={handlePriceChange}></PriceRangeSlider>
      </div>
      {origin !== "manufacturer" &&
        <div className="manufacturersFilter">
          {isMobile ? <h3>Manufacturers</h3> : <p>Manufacturers</p>}
          <ManufacturersFilter allManufacturers={allManufacturers} selectedManufacturers={currentFilters?.manufacturer} filteredManufacturers={filteredManufacturers} handleOtherFiltersAdd={handleOtherFiltersAdd} handleOtherFiltersRemove={handleOtherFiltersRemove}></ManufacturersFilter>
        </div>
      }
      <div className="sizeFilter">
        {isMobile ? <h3>Sizes</h3> : <p>Sizes</p>}
        <SizeFilter uniqueSizes={uniqueSizes} uniqueSizesCount={uniqueSizesCount} selectedSizes={currentFilters?.size} handleOtherFiltersAdd={handleOtherFiltersAdd} handleOtherFiltersRemove={handleOtherFiltersRemove} uniqueFilterSizes={uniqueFilterSizes}></SizeFilter>
      </div>
      <div className="colorFilter">
        {isMobile ? <h3>Colour</h3> : <p>Colour</p>}
        <ProductColorList handleOtherFiltersAdd={handleOtherFiltersAdd} handleOtherFiltersRemove={handleOtherFiltersRemove} uniqueColors={uniqueColors} uniqueColorsCount={uniqueColorsCount} selectedColors={currentFilters?.color} uniqueFilterColors={uniqueFilterColors}></ProductColorList>
      </div>
      {isMobile &&
        <div className='mobileButtons'>
          <button onClick={clearFilters} disabled={!currentFilters} >Clear</button>
          <button onClick={applyFilters} disabled={currentFilters && Object.keys(currentFilters).length > 0 && filteredProducts.length < 1} >Apply {currentFilters && Object.keys(currentFilters).length > 0 && <span>({filteredProducts.length})</span>}</button>
        </div>
      }
    </div>
  )
}

const ProductColorList = ({ selectedColors, uniqueColors, uniqueColorsCount, uniqueFilterColors, handleOtherFiltersAdd, handleOtherFiltersRemove }) => {
  const isMobile = useSelector((state) => state.mobile.isMobile)
  const handleClick = (color) => {
    if (selectedColors?.includes(color)) {
      handleOtherFiltersRemove([color], 'color')
    } else {
      handleOtherFiltersAdd([color], 'color')
    }
  }
  return (
    <ul>
      {uniqueColors.map((color, index) => (
        <li key={index}>
          <button
            onClick={() => handleClick(color)}
            disabled={(uniqueFilterColors?.length > 0 && !uniqueFilterColors?.includes(color) && !selectedColors?.includes(color))}
            className={selectedColors?.includes(color) ? 'active' : ''}
          >
            {isMobile ?
              <>
                <div style={{
                  '--color': color === 'Other'
                    ? `conic-gradient(from 90deg,violet,indigo,blue,green,yellow,orange,red,violet)`
                    : color,
                }}>
                  <svg viewBox="0 0 32 32">
                    <path d="M13.8232 21.7668L14 21.9435L14.1768 21.7668L23.1828 12.7628L23.3601 12.5855L23.1822 12.4087L21.5862 10.8227L21.4095 10.647L21.2332 10.8232L14 18.0564L10.7668 14.8232L10.59 14.6464L10.4132 14.8232L8.82323 16.4132L8.64645 16.59L8.82323 16.7668L13.8232 21.7668ZM8.36092 4.56729C10.6221 3.05642 13.2805 2.25 16 2.25C19.6467 2.25 23.1441 3.69866 25.7227 6.27728C28.3013 8.85591 29.75 12.3533 29.75 16C29.75 18.7195 28.9436 21.3779 27.4327 23.6391C25.9218 25.9003 23.7744 27.6626 21.2619 28.7033C18.7494 29.744 15.9848 30.0163 13.3175 29.4858C10.6503 28.9552 8.20026 27.6457 6.27729 25.7227C4.35432 23.7997 3.04476 21.3497 2.51421 18.6825C1.98366 16.0153 2.25596 13.2506 3.29666 10.7381C4.33737 8.22562 6.09974 6.07816 8.36092 4.56729Z" stroke="currentColor" strokeWidth={{ sort: 'title', order: 'desc' }} />
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
            <span>({uniqueColorsCount[color]})</span>
          </button>
        </li>
      ))}
    </ul>
  )
}

const ManufacturersFilter = ({ handleOtherFiltersAdd, handleOtherFiltersRemove, selectedManufacturers, allManufacturers, filteredManufacturers }) => {
  const isMobile = useSelector((state) => state.mobile.isMobile)

  const handleClick = (manufacturer) => {
    if (selectedManufacturers?.includes(manufacturer)) {
      handleOtherFiltersRemove([manufacturer], 'manufacturer')
    } else {
      handleOtherFiltersAdd([manufacturer], 'manufacturer')
    }
  }

  const manufacturerNames = Object.keys(allManufacturers)

  return (
    <ul className='manufacturer-list'>
      {manufacturerNames.map((manufacturerName) => (
        <li key={manufacturerName}>
          <button
            onClick={() => handleClick(manufacturerName)}
            disabled={(filteredManufacturers?.length > 0 && !filteredManufacturers?.includes(manufacturerName) && !selectedManufacturers?.includes(manufacturerName))}
            className={selectedManufacturers?.includes(manufacturerName) ? 'active' : ''}
          >
            {isMobile ?
              <>
                <div>
                  <p>{manufacturerName}</p>
                  <span>({allManufacturers[manufacturerName]})</span>
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
                <span>({allManufacturers[manufacturerName]})</span>
              </>
            }
          </button>
        </li>
      ))}
    </ul>
  )
}

const SizeFilter = ({ selectedSizes, uniqueSizes, uniqueSizesCount, uniqueFilterSizes, handleOtherFiltersAdd, handleOtherFiltersRemove }) => {
  const isMobile = useSelector((state) => state.mobile.isMobile)
  const handleClick = (size) => {
    if (selectedSizes?.includes(size)) {
      handleOtherFiltersRemove([size], 'size')
    } else {
      handleOtherFiltersAdd([size], 'size')
    }
  }
  return (
    <ul className='sizeUl'>
      {uniqueSizes.map((size, index) => (
        <li key={index}>
          <button
            onClick={() => handleClick(size)}
            disabled={(uniqueFilterSizes?.length > 0 && !uniqueFilterSizes?.includes(size) && !selectedSizes?.includes(size))}
            className={selectedSizes?.includes(size) ? 'active' : ''}
          >
            {isMobile ?
              <>
                <div>
                  <p>{size === 'Other' ? 'Other' : size}</p>
                  <span>({uniqueSizesCount[size]})</span>
                </div>
                <svg viewBox="0 0 150 150">
                  <path d="M121.875 18.75H28.125C25.6386 18.75 23.254 19.7377 21.4959 21.4959C19.7377 23.254 18.75 25.6386 18.75 28.125V121.875C18.75 124.361 19.7377 126.746 21.4959 128.504C23.254 130.262 25.6386 131.25 28.125 131.25H121.875C124.361 131.25 126.746 130.262 128.504 128.504C130.262 126.746 131.25 124.361 131.25 121.875V28.125C131.25 25.6386 130.262 23.254 128.504 21.4959C126.746 19.7377 124.361 18.75 121.875 18.75ZM28.125 121.875V28.125H121.875V121.875H28.125Z" fill='currentColor' />
                  <rect x="40" y="40" width="70" height="70" rx="5" fill="currentColor" />
                </svg>
              </>
              :
              <>
                <svg viewBox="0 0 150 150">
                  <path d="M121.875 18.75H28.125C25.6386 18.75 23.254 19.7377 21.4959 21.4959C19.7377 23.254 18.75 25.6386 18.75 28.125V121.875C18.75 124.361 19.7377 126.746 21.4959 128.504C23.254 130.262 25.6386 131.25 28.125 131.25H121.875C124.361 131.25 126.746 130.262 128.504 128.504C130.262 126.746 131.25 124.361 131.25 121.875V28.125C131.25 25.6386 130.262 23.254 128.504 21.4959C126.746 19.7377 124.361 18.75 121.875 18.75ZM28.125 121.875V28.125H121.875V121.875H28.125Z" fill='currentColor' />
                  <rect x="40" y="40" width="70" height="70" rx="5" fill="currentColor" />
                </svg>
                <p>{size === 'Other' ? 'Other' : size}</p>
                <span>({uniqueSizesCount[size]})</span>
              </>
            }
          </button>
        </li>
      ))}
    </ul>
  )
}

const PriceRangeSlider = ({ handlePriceChange, handlePriceRemove, products, initialPrices, currentPrices }) => {
  const priceGap = initialPrices.min
  const [minRangeValue] = useState(initialPrices.min)
  const [maxRangeValue] = useState(initialPrices.max)
  const [progressWidth, setProgressWidth] = useState(((currentPrices?.from || 0 - currentPrices?.to || initialPrices.max) / (maxRangeValue - 0)) * 100)
  const [progressLeft, setProgressLeft] = useState(((currentPrices?.to || initialPrices.max - 0) / (maxRangeValue - 0)) * 100)


  useEffect(() => {
    if (currentPrices) {
      setProgressWidth(((currentPrices?.to - currentPrices?.from) / (maxRangeValue - 0)) * 100)
      setProgressLeft(((currentPrices?.from - 0) / (maxRangeValue - 0)) * 100)
    } else {
      setProgressWidth(((initialPrices.max - initialPrices.min) / (maxRangeValue - 0)) * 100)
      setProgressLeft(((initialPrices.min - 0) / (maxRangeValue - 0)) * 100)
    }
  }, [currentPrices, minRangeValue, maxRangeValue, initialPrices])

  const handlePriceInputChange = (e) => {
    const { name, value } = e.target
    if (name === "minPrice" && (value < (currentPrices?.to || initialPrices.max - priceGap)) && value > 0) {
      handlePriceChangeExtra(Number(value), currentPrices?.to || initialPrices.max)
    } else if (name === "maxPrice" && (value - currentPrices?.from || 0 >= priceGap) && value <= maxRangeValue) {
      handlePriceChangeExtra(currentPrices?.from || initialPrices.min, Number(value))
    }
  }

  const handleRangeInputChange = (e) => {
    const { name, value } = e.target
    if (name === "minRangeValue" && (value < (currentPrices?.to || initialPrices.max - priceGap))) {
      handlePriceChangeExtra(Number(value), currentPrices?.to || initialPrices.max)
    } else if (name === "maxRangeValue" && (value > (currentPrices?.from || 0 + priceGap))) {
      handlePriceChangeExtra(currentPrices?.from || initialPrices.min, Number(value))
    }
  }

  const handlePriceChangeExtra = (min, max) => {
    if (min === initialPrices.min && max === initialPrices.max) {
      handlePriceRemove()
    } else {
      handlePriceChange(min, max)
    }
  }

  const handlePriceSectionExtra = (min, max) => {
    if (min === currentPrices?.from && max === currentPrices?.to) {
      handlePriceRemove()
    } else {
      handlePriceChange(min, max)
    }
  }

  return (
    <>
      <div className="price-input">
        <div>
          <input
            type="text"
            name="minPrice"
            value={currentPrices?.from || initialPrices.min}
            onChange={handlePriceInputChange}
          />
          <input
            type="text"
            name="maxPrice"
            value={currentPrices?.to || initialPrices.max}
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
            value={currentPrices?.from || initialPrices.min}
            min={0}
            max={maxRangeValue}
            onChange={handleRangeInputChange}
          />
          <input
            className="range-max"
            type="range"
            name="maxRangeValue"
            value={currentPrices?.to || initialPrices.max}
            min={minRangeValue}
            max={maxRangeValue}
            onChange={handleRangeInputChange}
          />
        </div>

        <PillarGraph products={products} minPrice={initialPrices.min} maxPrice={initialPrices.max} progressLeft={progressLeft} progressWidth={progressWidth} sensitivityMargin={4}></PillarGraph>
      </div>

      {products.length > 2 && <ProductList from={currentPrices?.from} to={currentPrices?.to} products={products} handlePriceSectionExtra={handlePriceSectionExtra}></ProductList>}
    </>
  )
}

const ProductList = ({ products, from, to, handlePriceSectionExtra }) => {
  const isMobile = useSelector((state) => state.mobile.isMobile)
  const [sections, setSections] = useState([])

  useEffect(() => {
    const totalValues = products.map(product => product.total)
    const maxTotal = Math.max(...totalValues)
    const minTotal = Math.min(...totalValues)
    const range = maxTotal - minTotal
    const numSections = totalValues.length % 2 === 0 ? 4 : 3
    const sectionSize = range / numSections;

    const newSections = []
    for (let i = 0; i < numSections; i++) {
      const lowerBound = minTotal + sectionSize * i
      const upperBound = lowerBound + sectionSize
      const productsInSection = products.filter(product => product.total >= lowerBound && product.total <= upperBound)
      newSections.push({ lowerBound, upperBound, products: productsInSection })
    }
    setSections(newSections)
  }, [products])

  return (
    <ul className="price-list">
      {sections.map((section, index) => (
        <li key={index}>
          <button
            onClick={() => handlePriceSectionExtra(section.lowerBound, section.upperBound)}
            disabled={section.products?.length < 1 || section.lowerBound < from || section.upperBound > to}
            className={section.lowerBound === from && section.upperBound === to ? 'active' : ''}
          >
            {!isMobile && (
              <svg viewBox="0 0 32 32">
                <path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z" />
                <path fill="currentColor" d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6Z" />
              </svg>
            )}
            <p>{section.lowerBound} - {section.upperBound} <span>({section.products?.length})</span></p>
          </button>
        </li>
      ))}
    </ul>
  );
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

export const DetailsAllProducts = ({
  dataObject,
  origin,
  clearFilters,
  initialProducts,
  currentFilters,
  filteredProducts,
  handlePriceRemove,
  handleOtherFiltersRemove,
  currentSort,
  sortFilters,
}) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    let productsToSet = [];
    if (filteredProducts?.length > 0 || (currentFilters ? Object.keys(currentFilters).length === 0 : true)) {
      productsToSet = filteredProducts.length > 0 ? filteredProducts : initialProducts;

      if (currentSort) {
        const sortedProducts = sortProducts(productsToSet, currentSort.sort, currentSort.order);
        productsToSet = sortedProducts;
      }
    }

    setProducts(productsToSet);
  }, [filteredProducts, initialProducts, currentSort, currentFilters])

  const handleSortChange = (e) => {
    const selectedValue = JSON.parse(e.target.value);
    sortFilters(selectedValue)
  }

  const itemsPerPage = 16
  const [currentPage, setCurrentPage] = useState(1)

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
          <select className='sorterSelect' name="sort" onChange={(e) => handleSortChange(e)}>
            <option value={JSON.stringify({ sort: 'title', order: 'asc' })}>Title ASC</option>
            <option value={JSON.stringify({ sort: 'title', order: 'desc' })}>Title DESC</option>
            <option value={JSON.stringify({ sort: 'price', order: 'asc' })}>Price ASC</option>
            <option value={JSON.stringify({ sort: 'price', order: 'desc' })}>Price DESC</option>
            <option value={JSON.stringify({ sort: 'rating', order: 'asc' })}>Rating ASC</option>
            <option value={JSON.stringify({ sort: 'rating', order: 'desc' })}>Rating DESC</option>
          </select>
        </div>

        <div className='rightHeader'>
          {currentFilters && Object.keys(currentFilters).length > 0 && <Filters clearFilters={clearFilters} handlePriceRemove={handlePriceRemove} handleOtherFiltersRemove={handleOtherFiltersRemove} currentFilters={currentFilters} ></Filters>}
          {/* {!isMobile || (products.length >= 16 && (
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
          ))} */}
        </div>
      </div>

      {(origin === 'subcategory') && <div className='topProducts'>
        <h3>Most Popular {dataObject.title} products</h3>
        <ul>
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>}

      {products.length > 0 ?
        <ul className="allProducts">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
        :
        <div className='noFilteredProducts'>
          <FilterSvg></FilterSvg>
          <button onClick={clearFilters}>
            <h1>Nothing found</h1>
            <p>you can click here to clear filters</p>
          </button>
        </div>
      }

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

export function filterProducts(products, filters) {
  return products.filter(product => {
    // Check each filter criterion
    return Object.keys(filters).every(filterKey => {
      const productValue = product[filterKey];

      if (filterKey === 'manufacturer') {
        // Handle 'manufacturer' filter
        return filters[filterKey].includes(productValue && productValue.title);
      } else if (filterKey === 'color' || filterKey === 'size') {
        // Handle 'colors' and 'sizes' filters
        const productSizes = product.productSizes || [];
        return productSizes.some(productSize => filters[filterKey].includes(productSize[filterKey]));
      } else if (Array.isArray(productValue) && filters[filterKey].length > 0) {
        // If the property is an array, check if any of the values match
        return productValue.some(value => filters[filterKey].includes(value));
      } else if (typeof productValue === 'number' && filters[filterKey].from !== undefined && filters[filterKey].to !== undefined) {
        // If the property is a number, check if it falls within the specified range
        return productValue >= filters[filterKey].from && productValue <= filters[filterKey].to;
      } else {
        // For other types, perform a direct equality check
        return filters[filterKey].includes(productValue);
      }
    })
  })
}

export function setFilter(currentFilters, filterType, selectedValues) {
  const newFilters = { ...currentFilters };

  if (filterType === 'price') {
    newFilters[filterType] = {
      from: selectedValues.from,
      to: selectedValues.to
    };
  } else {
    newFilters[filterType] = newFilters[filterType] || [];
    newFilters[filterType] = Array.from(new Set([...newFilters[filterType], ...selectedValues]));
  }

  return newFilters;
}

export function removeFilter(currentFilters, filterType, selectedValues) {
  const newFilters = { ...currentFilters };

  if (filterType === 'price') {
    delete newFilters[filterType];
  } else {
    if (newFilters[filterType]) {
      newFilters[filterType] = newFilters[filterType].filter(value => !selectedValues.includes(value));

      if (newFilters[filterType].length === 0) {
        delete newFilters[filterType];
      }
    }
  }

  return newFilters;
}

export function getAllColors(products) {
  return (products || []).reduce((acc, product) => {
    return acc.concat((product.productSizes || []).reduce((colors, productSize) => {
      if (productSize.color) {
        colors.push(productSize.color)
      }
      return colors
    }, []))
  }, [])
}

export function getAllSizes(products) {
  return (products || []).reduce((acc, product) => {
    return acc.concat((product.productSizes || []).reduce((sizes, productSize) => {
      if (productSize.size) {
        sizes.push(productSize.size)
      }
      return sizes
    }, []))
  }, [])
}

export const getColorCountsInProducts = (products, uniqueColors) => {
  const colorCounts = {}

  products.forEach((product) => {
    const productSizes = product.productSizes || []

    uniqueColors.forEach((color) => {
      if (productSizes.some((sizeObj) => sizeObj.color === color)) {
        colorCounts[color] = (colorCounts[color] || 0) + 1;
      }
    })
  })

  return colorCounts
}

export const getSizeCountsInProducts = (products, uniqueSizes) => {
  const sizeCounts = {};

  products.forEach((product) => {
    const productSizes = product.productSizes || []

    uniqueSizes.forEach((size) => {
      if (productSizes.some((sizeObj) => sizeObj.size === size)) {
        sizeCounts[size] = (sizeCounts[size] || 0) + 1
      }
    })
  })

  return sizeCounts
}

export function sortProducts(products, sortBy, sortOrder) {
  // Create a new copy of the array
  let productsCopy = [...products];

  return productsCopy.sort((a, b) => {
    let aValue, bValue;

    switch (sortBy) {
      case 'price':
        aValue = a.total;
        bValue = b.total;
        break;
      case 'rating':
        aValue = a.rating.rate;
        bValue = b.rating.rate;
        break;
      case 'title':
        aValue = a.title.toLowerCase();
        bValue = b.title.toLowerCase();
        break;
      default:
        aValue = a.title.toLowerCase();
        bValue = b.title.toLowerCase();
        break;
    }

    if (sortOrder === 'desc') {
      if (aValue > bValue) {
        return -1;
      } else if (aValue < bValue) {
        return 1;
      } else {
        return 0;
      }
    } else if (sortOrder === 'asc') {
      if (aValue < bValue) {
        return -1;
      } else if (aValue > bValue) {
        return 1;
      } else {
        return 0;
      }
    }

    return 0; // Default case, no sorting
  });
}

const Filters = ({ currentFilters, handlePriceRemove, handleOtherFiltersRemove, clearFilters }) => {
  return (
    <ul className='addedFilters'>
      {Object.entries(currentFilters).map(([key, value]) => {
        if (key === 'price') {
          return (
            <li key={key}>
              <button onClick={handlePriceRemove}>{`Price: ${value.from} - ${value.to}`} <svg viewBox="0 0 32 32"><path fill="currentColor" d="M17.414 16L24 9.414L22.586 8L16 14.586L9.414 8L8 9.414L14.586 16L8 22.586L9.414 24L16 17.414L22.586 24L24 22.586L17.414 16z" /></svg></button>
            </li>
          );
        } else {
          return value.map((item, index) => (
            <li key={`${key}-${index}`}>
              <button onClick={() => handleOtherFiltersRemove([item], key)}>{item} <svg viewBox="0 0 32 32"><path fill="currentColor" d="M17.414 16L24 9.414L22.586 8L16 14.586L9.414 8L8 9.414L14.586 16L8 22.586L9.414 24L16 17.414L22.586 24L24 22.586L17.414 16z" /></svg></button>
            </li>
          ));
        }
      })}
      <li className='clearAll'>
        <button onClick={clearFilters}>
          <p>Clear All</p>
        </button>
      </li>
    </ul>
  );
}



