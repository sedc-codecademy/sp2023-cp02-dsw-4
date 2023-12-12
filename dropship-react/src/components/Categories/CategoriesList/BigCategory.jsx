import React from 'react'
import { NavLink } from 'react-router-dom'

function BigCategory({subcategory}) {
    return (
        <li>
            <NavLink to={`/subcategory/${subcategory.id}`}>
                <img src={subcategory.image} alt="category" />
                <div>
                    <h3>{subcategory.name}</h3>
                    <p>{subcategory.description}</p>
                </div>
            </NavLink>
        </li>
    )
}

export default BigCategory