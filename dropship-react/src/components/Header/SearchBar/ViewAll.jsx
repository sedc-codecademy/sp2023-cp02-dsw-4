import React from 'react'

function ViewAll(props) {
    return (
        <li className='resultsViewAll'>
            <button onClick={props.handleClick}>
                <p>
                    View All <span>({props.amount} more)</span>
                </p>
            </button>
        </li>
    )
}

export default ViewAll