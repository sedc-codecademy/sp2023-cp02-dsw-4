import React from 'react'
import { NavLink } from "react-router-dom"

export function SmallCategory(props) {
    return (
        <li>
            <NavLink to={`/subcategory/${props.subcategory.id}`}>
            <img src={props.subcategory.image} alt="sub-category" />
            <div>
                <h4>{props.subcategory.title}</h4>
                <p>({props.subcategory.products.length} Products)</p>
            </div>
            </NavLink>
        </li>
    )
}

export function BiggerCategory(props) {
    return (
        <li>
            <NavLink to={`/category/${props.category.id}`}>
            <img src={props.category.image} alt="category" />
            <div>
                <h4>{props.category.title}</h4>
                <p>({props.category.sub.length} Categories)</p>
            </div>
            </NavLink>
        </li>
    )
}