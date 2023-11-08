import React from 'react'
import { NavLink } from "react-router-dom"
import ImageLoader from "../../ImageLoader/ImageLoader"

export function SmallCategory(props) {
    return (
        <li>
            <NavLink to={`/subcategory/${props.subcategory.id}`}>
                <ImageLoader
                    url={props.subcategory.image || ""}
                    alt={props.subcategory.title || ''}
                    backupUrl="/imgs/404/category404.png"
                    backupAlt={props.subcategory.title || 'Sub-Category'}
                ></ImageLoader>
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
                <ImageLoader
                    url={props.category.image || ""}
                    alt={props.category.title || ''}
                    backupUrl="/imgs/404/category404.png"
                    backupAlt={props.category.title || 'Sub-Category'}
                ></ImageLoader>
                <div>
                    <h4>{props.category.title}</h4>
                    <p>({props.category.sub.length} Categories)</p>
                </div>
            </NavLink>
        </li>
    )
}

export function AdminSmallCategory(props) {
    return (
        <li>
            <button onClick={props.handleClick}>
                <ImageLoader
                    url={props.subcategory.image || ""}
                    alt={props.subcategory.title || ''}
                    backupUrl="/imgs/404/category404.png"
                    backupAlt={props.subcategory.title || 'Sub-Category'}
                ></ImageLoader>
                <div>
                    <h4>{props.subcategory.title}</h4>
                    <p>({props.subcategory.products.length} Products)</p>
                </div>
            </button>
        </li>
    )
}

export function AdminBiggerCategory(props) {
    return (
        <li>
            <button onClick={props.handleClick}>
                <ImageLoader
                    url={props.category.image || ""}
                    alt={props.category.title || ''}
                    backupUrl="/imgs/404/category404.png"
                    backupAlt={props.category.title || 'Sub-Category'}
                ></ImageLoader>
                <div>
                    <h4>{props.category.title}</h4>
                    <p>({props.category.sub.length} Categories)</p>
                </div>
            </button>
        </li>
    )
}