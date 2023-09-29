import React from 'react'
import { Link } from "react-router-dom"

function SearchItem(props) {
    return (
        <li>
            <Link>
                <div className="resultTitle">
                    <img src={props.item.image} alt="product" />
                    <h3>{props.item.title}</h3>
                </div>
                <p>
                    <span>{props.item.category}</span>|<span>{props.item.subcategory}</span>
                </p>
            </Link>
        </li>
    )
}

export default SearchItem