import React from 'react'
import { NavLink } from 'react-router-dom'

function BigCategory(props) {
    return (
        <li>
            <NavLink>
                <img src={props.category.image} alt="category" />
                <div>
                    <h3>{props.category.title}</h3>
                    <p>{props.category.description}</p>
                </div>
            </NavLink>
        </li>
    )
}

export default BigCategory