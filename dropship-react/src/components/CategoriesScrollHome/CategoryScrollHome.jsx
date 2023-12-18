import React, { useState, useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import { BiggerCategory } from "../Categories/CategoriesList/SmallCategory"

function CategoryScrollHome({ categories }) {
    const catArray = categories
    const isMobile = useSelector((state) => state.mobile.isMobile)
    const ulRef = useRef(null)
    const [scrollPosition, setScrollPosition] = useState(0)
    const [maxScroll, setMaxScroll] = useState(0)
    const [categoryCardWidth, setCategoryCardWidth] = useState(0)

    useEffect(() => {
        const calculateDimensions = () => {
            if (!isMobile) {
                const ulElement = ulRef.current
                setMaxScroll(ulElement ? ulElement.scrollWidth - ulElement.clientWidth : 0)
                setCategoryCardWidth(ulElement ? ulElement.scrollWidth / catArray.length : 0)

                if (scrollPosition < categoryCardWidth / 2 && scrollPosition !== 0) {
                    ulElement.scrollLeft = 0
                    setScrollPosition(0)
                } else if (maxScroll - scrollPosition < categoryCardWidth / 2 && scrollPosition !== maxScroll) {
                    ulElement.scrollLeft = maxScroll
                    setScrollPosition(maxScroll)
                }
            }
        }
        const timeoutId = setTimeout(calculateDimensions, 500)

        return () => clearTimeout(timeoutId)
    }, [scrollPosition, maxScroll, categoryCardWidth, isMobile, ulRef, catArray.length])

    const handleScrollLeft = () => {
        const ulElement = ulRef.current
        if (ulElement) {
            const newScrollPosition = ulElement.scrollLeft - categoryCardWidth * 1.1
            ulElement.scrollLeft = newScrollPosition
            setScrollPosition(newScrollPosition)
        }
    }

    const handleScrollRight = () => {
        const ulElement = ulRef.current
        if (ulElement) {
            const newScrollPosition = ulElement.scrollLeft + categoryCardWidth * 1.1
            ulElement.scrollLeft = newScrollPosition
            setScrollPosition(newScrollPosition)
        }
    }
    return (
        <div className={`catDiv ${scrollPosition === 0 ? "hideLeft" : ""} ${scrollPosition === maxScroll ? "hideRight" : ""}`}>
            {!isMobile && <button disabled={scrollPosition === 0} className="scrollLeft" onClick={handleScrollLeft}>
                <svg viewBox="0 0 32 32">
                    <path fill="currentColor" d="M10 16L20 6l1.4 1.4l-8.6 8.6l8.6 8.6L20 26z" />
                </svg>
            </button>}
            <ul className="category-list" ref={ulRef}>
                {catArray.map((cat) => (
                    <BiggerCategory key={cat.id} category={cat} />
                ))}
            </ul>
            {!isMobile && <button disabled={scrollPosition === maxScroll} className="scrollright" onClick={handleScrollRight}>
                <svg viewBox="0 0 32 32">
                    <path fill="currentColor" d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z" />
                </svg>
            </button>}
        </div>
    )
}

export default CategoryScrollHome

