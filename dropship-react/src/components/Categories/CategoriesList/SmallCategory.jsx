import React from 'react'
import { NavLink } from "react-router-dom"

function SmallCategory(props) {
    return (
        <li>
            <NavLink to={`/subcategories/${props.subcategory.id}`}>
            <img src={props.subcategory.image} alt="category" />
            <div>
                <h4>{props.subcategory.title}</h4>
                <p>({props.subcategory.products.length} Products)</p>
            </div>
            </NavLink>
        </li>
    )
}

export default SmallCategory