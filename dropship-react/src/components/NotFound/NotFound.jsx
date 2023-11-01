import React from 'react'
import { NavLink } from 'react-router-dom'
import { NotFoundSvg } from './notFoundSvg'

function NotFound(props) {
    return (
        <main className='notFound'>
            <NotFoundSvg></NotFoundSvg>
            <NavLink to={props.link}>
                <h1>{props.title}</h1>
                <p>{props.message}</p>
            </NavLink>
        </main>
    )
}

export default NotFound