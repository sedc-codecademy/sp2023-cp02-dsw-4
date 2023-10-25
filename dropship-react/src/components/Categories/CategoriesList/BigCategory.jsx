import React from 'react'
import { NavLink } from 'react-router-dom'

function BigCategory(props) {
    return (
        <li>
            <NavLink to={`/subcategories/${props.subcategory.id}`}>
                <img src={props.subcategory.image} alt="category" />
                <div>
                    <h3>{props.subcategory.title}</h3>
                    <p>{props.subcategory.description}</p>
                </div>
            </NavLink>
        </li>
    )
}

export default BigCategory