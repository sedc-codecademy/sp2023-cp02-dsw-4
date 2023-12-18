import React, { useState, useEffect } from "react"

import {
    DetailsNav,
    DetailsFilters,
    DetailsAllProducts,
    getSizeCountsInProducts,
    getAllColors,
    getAllSizes,
    filterProducts,
    setFilter,
    removeFilter,
    getColorCountsInProducts,
} from "../../UsefullComponents/Usefull"

import { useSelector, useDispatch } from "react-redux"
import { setMobileFiltersOn } from "../../../store/slices/filters/filtersSlice"

function CategoriesDetails({ dataObject, origin }) {

    const dispatch = useDispatch()
    const isMobile = useSelector((state) => state.mobile.isMobile)
    const mobileFiltersOn = useSelector((state) => state.filters.mobileFiltersOn)

    const handleFilterButtonClick = () => {
        dispatch(setMobileFiltersOn(!mobileFiltersOn))
    }

    const [products] = useState(dataObject.products)
    const [initialsPrices] = useState(products.reduce((range, product) => ({
        min: Math.min(1, product.discountedPrice),
        max: Math.max(range.max, product.discountedPrice),
    }), { min: 0, max: 1 }))

    const [allSizes] = useState(getAllSizes(products))
    const [allColors] = useState(getAllColors(products))
    const [uniqueColors] = useState([...new Set(allColors)])
    const [uniqueColorsCount] = useState(getColorCountsInProducts(products, uniqueColors))

    const [uniqueSizes] = useState([...new Set(allSizes)])
    const [uniqueSizesCount] = useState(getSizeCountsInProducts(products, uniqueSizes))

    const [allManufacturers] = useState(
        products.reduce((counts, product) => {
            counts[product.manufacturer?.name] = (counts[product.manufacturer?.name] || 0) + 1
            return counts
        }, {})
    )

    const [currentFilters, setCurrentFilters] = useState(null)
    const [filteredProducts, setFilteredProducts] = useState([])
    const [previousFilters, setPreviousFilters] = useState(null)
    const [uniqueFilterColors, setUniqueFilterColors] = useState([])
    const [uniqueFilterSizes, setUniqueFilterSizes] = useState([])
    const [filteredManufacturers, setFilteredManufacturers] = useState([])
    const [currentSort, setCurrentSort] = useState({ sort: 'price', order: 'asc' })

    useEffect(() => {
        if (currentFilters && Object.keys(currentFilters).length > 0) {
            const tempFilteredProducts = filterProducts(products, currentFilters)
            setFilteredProducts(tempFilteredProducts)
            if (!isMobile) {
                setPreviousFilters(currentFilters)
            }
        } else {
            setFilteredProducts([])
        }
    }, [isMobile, currentFilters, products])

    useEffect(() => {
        if (filteredProducts.length > 0) {
            const allFilterColors = getAllColors(filteredProducts)
            const allFilterSizes = getAllSizes(filteredProducts)
            setUniqueFilterColors([...new Set(allFilterColors)])
            setUniqueFilterSizes([...new Set(allFilterSizes)])
            setFilteredManufacturers([
                ...new Set(
                    filteredProducts.map((product) => product.manufacturer?.name)
                ),
            ])
        } else {
            setUniqueFilterColors(uniqueColors)
            setUniqueFilterSizes(uniqueSizes)
            setFilteredManufacturers([
                ...new Set(products.map((product) => product.manufacturer?.name)),
            ])
        }
    }, [filteredProducts, uniqueColors, uniqueSizes, products])

    const clearFilters = () => {
        setCurrentFilters(null)
    }

    const sortFilters = (sort) => {
        setCurrentSort(sort)
    }

    const handlePriceChange = (min, max) => {
        const newPriceFilter = { from: min, to: max }
        const updatedFiltersSet = setFilter(
            currentFilters,
            "price",
            newPriceFilter
        )
        setCurrentFilters(updatedFiltersSet)
    }

    const handlePriceRemove = () => {
        const updatedFiltersSet = removeFilter(currentFilters, "price", null)
        setCurrentFilters(updatedFiltersSet)
    }

    const handleOtherFiltersRemove = (values, type) => {
        const updatedFiltersRemove = removeFilter(currentFilters, type, values)
        setCurrentFilters(updatedFiltersRemove)
    }

    const handleOtherFiltersAdd = (values, type) => {
        const updatedFiltersAdd = setFilter(currentFilters, type, values)
        setCurrentFilters(updatedFiltersAdd)
    }

    const handleCloseButtonClick = () => {
        if (mobileFiltersOn) {
            setCurrentFilters(previousFilters || null)
        }
        dispatch(setMobileFiltersOn(!mobileFiltersOn))
    }

    const applyFilters = () => {
        dispatch(setMobileFiltersOn(!mobileFiltersOn))
    }

    return (
        <main className="categoriesDetails">
            {origin !== "search" && (
                <DetailsNav
                    categoryid={dataObject?.category?.id || dataObject.products[0]?.category?.id}
                    categorytitle={dataObject?.category?.name || dataObject.products[0]?.category?.name}
                ></DetailsNav>
            )}

            <div className="detailsListBody">
                {(!isMobile || (isMobile && mobileFiltersOn)) && (
                    <DetailsFilters
                        origin={origin}
                        products={products}
                        initialsPrices={initialsPrices}
                        uniqueColors={uniqueColors}
                        uniqueColorsCount={uniqueColorsCount}
                        uniqueSizes={uniqueSizes}
                        uniqueSizesCount={uniqueSizesCount}
                        allManufacturers={allManufacturers}
                        currentFilters={currentFilters}
                        filteredProducts={filteredProducts}
                        uniqueFilterColors={uniqueFilterColors}
                        uniqueFilterSizes={uniqueFilterSizes}
                        filteredManufacturers={filteredManufacturers}
                        handlePriceChange={handlePriceChange}
                        handlePriceRemove={handlePriceRemove}
                        handleOtherFiltersRemove={handleOtherFiltersRemove}
                        handleOtherFiltersAdd={handleOtherFiltersAdd}
                        handleCloseButtonClick={handleCloseButtonClick}
                        clearFilters={clearFilters}
                        applyFilters={applyFilters}
                    ></DetailsFilters>
                )}
                <DetailsAllProducts
                    dataObject={dataObject}
                    origin={origin}
                    initialProducts={products}
                    currentFilters={currentFilters}
                    filteredProducts={filteredProducts}
                    handlePriceRemove={handlePriceRemove}
                    handleOtherFiltersRemove={handleOtherFiltersRemove}
                    clearFilters={clearFilters}
                    sortFilters={sortFilters}
                    currentSort={currentSort}
                ></DetailsAllProducts>
            </div>

            {isMobile && (
                <button className="filtersButton" onClick={handleFilterButtonClick}>
                    <svg viewBox="0 0 32 32">
                        <path
                            d="M26 6H4v3.17l7.41 7.42l.59.58V26h4v-2h2v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8l-7.41-7.41A2 2 0 0 1 2 9.17V6a2 2 0 0 1 2-2h22z"
                            fill="currentColor"
                        />
                        <path
                            d="M29.71 11.29l-3-3a1 1 0 0 0-1.42 0L16 17.59V22h4.41l9.3-9.29a1 1 0 0 0 0-1.42zM19.59 20H18v-1.59l5-5L24.59 15zM26 13.59L24.41 12L26 10.41L27.59 12z"
                            fill="currentColor"
                        />
                    </svg>
                </button>
            )}
        </main>
    )
}

export default CategoriesDetails
