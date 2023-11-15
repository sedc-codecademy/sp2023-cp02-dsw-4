import React from 'react'
import { Link } from "react-router-dom"

function SearchItem({item}) {
    return (
        <li>
            <Link>
                <div className="resultTitle">
                    <img src={item.image} alt="product" />
                    <h3>{item.title}</h3>
                </div>
                <p>
                    <span>{item.subcategorytitle}</span>
                </p>
            </Link>
        </li>
    )
}

export default SearchItem