import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import ProductCard from "../ProductCard/ProductCard"

function NewArrivals({products}) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const isMobile = useSelector((state) => state.mobile.isMobile)

    useEffect(() => {
        if (!isMobile) {
            const timer = setTimeout(autoRotateImages, 7500)

            return () => {
                clearTimeout(timer)
            }
        }
    }, [currentIndex, isMobile])

    function nextImage() {
        setCurrentIndex((index) => {
            if (index === 4 - 1) return 0
            return index + 1
        })
    }

    function prevImage() {
        setCurrentIndex((index) => {
            if (index === 0) return 4 - 1
            return index - 1
        })
    }

    const autoRotateImages = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 4 - 1 ? 0 : prevIndex + 1
        )
    }

    return (
        <div className="newArrivals">
            {!isMobile &&
                <>
                    <ul style={{ '--translateVar': `calc(${-100 * currentIndex}% - ${currentIndex}rem) ` }}>
                        {products.slice(0, 4).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </ul>
                    <ul style={{ '--translateVar': `calc(${-100 * currentIndex}% - ${currentIndex}rem) ` }}>
                        {products.slice(4, 8).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </ul>
                </>
            }

            <div className="arrivalsBody">
                {!isMobile &&
                    <div>
                        <h1><span>New</span><span>Arrivals</span></h1>
                    </div>
                }
                {isMobile &&
                    <div>
                        <h1>New Arrivals</h1>
                        <p>Get these exciting new additions to our store!</p>
                    </div>
                }
                {!isMobile && <div>
                    <button onClick={prevImage}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                        >
                            <path
                                fill="currentColor"
                                d="M10 16L20 6l1.4 1.4l-8.6 8.6l8.6 8.6L20 26z"
                            />
                        </svg>
                    </button>
                    <button onClick={nextImage}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                        >
                            <path
                                fill="currentColor"
                                d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z"
                            />
                        </svg>
                    </button>
                </div>}
            </div>

            {!isMobile ?
                <>
                    <ul style={{ '--translateVar': `calc(${-100 * currentIndex}% - ${currentIndex}rem) ` }}>
                        {products.slice(8, 12).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </ul>
                    <ul style={{ '--translateVar': `calc(${-100 * currentIndex}% - ${currentIndex}rem) ` }}>
                        {products.slice(12, 16).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </ul>
                </>
                :
                <ul>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </ul>
            }
        </div>
    )
}

export default NewArrivals;
