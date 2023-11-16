import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"

function SearchItem({ item }) {
    const isMobile = useSelector((state) => state.mobile.isMobile)
    return (
        <li>
            <Link>
                <div className="resultTitle">
                    <img src={item.image} alt="product" />
                    <h3>{item.title}</h3>
                </div>
                <p>
                    {!isMobile && <><span>{item.categorytitle}</span>|</>}
                    <span>{item.subcategorytitle}</span>
                </p>
            </Link>
        </li>
    )
}

export default SearchItem