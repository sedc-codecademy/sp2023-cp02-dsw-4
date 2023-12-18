import React, { useState, useEffect, useRef } from "react"
import { useSelector } from "react-redux"

import ProductCard from '../ProductCard/ProductCard'
import { DiscountSvg, PopularSvg } from "./svgs"

export default function ProductList({ products, origin }) {
    const isMobile = useSelector((state) => state.mobile.isMobile)
    const ulRef = useRef(null)
    const [scrollPosition, setScrollPosition] = useState(0)
    const [maxScroll, setMaxScroll] = useState(0)
    const [productCardWidth, setProductCardWidth] = useState(0)

    useEffect(() => {
        if (!isMobile) {
            const ulElement = ulRef.current
            setProductCardWidth(ulElement ? ulElement.scrollWidth / products.length : 0)
            setMaxScroll(ulElement ? ulElement.scrollWidth - ulElement.clientWidth : 0)

            if (scrollPosition < productCardWidth / 2 && scrollPosition !== 0) {
                ulElement.scrollLeft = 0;
                setScrollPosition(0);
            } else if (maxScroll - scrollPosition < productCardWidth / 2 && scrollPosition !== maxScroll) {
                ulElement.scrollLeft = maxScroll;
                setScrollPosition(maxScroll);
            }
        }
    }, [products, scrollPosition, maxScroll, productCardWidth, isMobile
    ])

    const handleScrollLeft = () => {
        const ulElement = ulRef.current
        if (ulElement) {
            const newScrollPosition = ulElement.scrollLeft - productCardWidth * 1.1
            ulElement.scrollLeft = newScrollPosition
            setScrollPosition(newScrollPosition)
        }
    }

    const handleScrollRight = () => {
        const ulElement = ulRef.current
        if (ulElement) {
            const newScrollPosition = ulElement.scrollLeft + productCardWidth * 1.1
            ulElement.scrollLeft = newScrollPosition
            setScrollPosition(newScrollPosition)
        }
    }

    return (
        <div className={`scrollableProductsList ${origin === 'popular' ? 'popularProducts' : "discountedProducts"}`}>
            {origin === 'popular' ?
                (
                    <>
                        <div className="introDiv">
                            <h1>Popular Products</h1>
                            <p>Pick from the most popular products available</p>
                            {!isMobile &&
                                <PopularSvg></PopularSvg>
                            }
                        </div>
                    </>
                )
                :
                (
                    <>
                        <div className="introDiv">
                            <h1>Products on Sale</h1>
                            <p>Grab them while they're still on sale!</p>
                            {!isMobile &&
                                <DiscountSvg></DiscountSvg>
                            }
                        </div>
                    </>
                )
            }

            <div className={`ulDiv ${scrollPosition === 0 ? "hideLeft" : ""} ${scrollPosition === maxScroll ? "hideRight" : ""}`}>
                {!isMobile && <button disabled={scrollPosition === 0} className="scrollLeft" onClick={handleScrollLeft}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <path fill="currentColor" d="M10 16L20 6l1.4 1.4l-8.6 8.6l8.6 8.6L20 26z" />
                    </svg>
                </button>}
                <ul className="product-list" ref={ulRef}>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </ul>
                {!isMobile && <button disabled={scrollPosition === maxScroll} className="scrollright" onClick={handleScrollRight}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <path fill="currentColor" d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z" />
                    </svg>
                </button>}
            </div>
        </div>
    )
}