import React from 'react'
import { NavLink } from "react-router-dom"

function SmallCategory(props) {
    return (
        <li>
            <NavLink>
            <img src={props.category.image} alt="category" />
            <div>
                <h4>{props.category.title}</h4>
                <p>({props.category.sub.length} Products)</p>
            </div>
            </NavLink>
        </li>
    )
}

export default SmallCategory