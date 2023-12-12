import React from 'react'

export function CatDP(props) {
    return (
        <li>
            <button className={`${props.currentCategory.id === props.category.id ? 'active' : ''}`} onClick={() => props.handleCatClick(props.category.id)}>
                <div>
                    <img src={props.category.icon} alt="category" />
                    <h4>{props.category.name}</h4>
                </div>
                <svg viewBox="0 0 32 32"><path fill="currentColor" d="m12 8l10 8l-10 8z" /></svg>
            </button>
        </li>
    )
}

export function CatDPMobile(props) {
    return (
        <li>
            <button className={`${props.currentCategory.id === props.category.id ? 'active' : ''}`} onClick={() => props.handleCatClick(props.category.id)}>
                <img src={props.category.icon} alt="category" />
                <h4>{props.category.name}</h4>
            </button>
        </li>
    )
}

export function SubCatDP(props) {
    return (
        <li>
            <button onClick={() => props.handleSubCatClick(props.subcategory.id)}>
                <img src={props.subcategory.image} alt="Sub Category" />
                <div>
                    <h4>{props.subcategory.name}</h4>
                    <p>{props.subcategory.description}</p>
                </div>
            </button>
        </li>
    )
}

export function ViewAllSub(props) {
    return (
        <button className="viewAllSubCats" onClick={() => props.handleViewAllClick(props.category.id)}>
            <h4>Browse All</h4>
        </button>
    )
}
