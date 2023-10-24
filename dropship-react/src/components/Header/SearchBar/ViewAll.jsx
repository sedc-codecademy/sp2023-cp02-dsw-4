import React from 'react'
import { Link } from "react-router-dom"

function ViewAll(props) {
    return (
        <li className='resultsViewAll'>
            <Link>
                <p>
                    View All <span>({props.amount} more)</span>
                </p>
            </Link>
        </li>
    )
}

export default ViewAll