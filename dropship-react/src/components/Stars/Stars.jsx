import React, { useEffect, useRef, useState } from 'react'

function Stars({ initialRating, id }) {
    const rating = initialRating || 0
    const [hoverState, setHoverState] = useState(Array(5).fill(false))

    const handleMouseOver = (index) => {
        setHoverState(prev => prev.map((_, i) => i <= index))
    }

    const handleMouseOut = () => {
        setHoverState(Array(5).fill(false))
    }

    const stars = [1, 2, 3, 4, 5].map((starIndex) => {
        const percentage = ((rating + 1) - Math.floor(starIndex)) * 100
        const gradientId = `gradient-${id}-${starIndex}`

        return (
            <Star
                key={`star-${id}-${starIndex}`}
                percentage={percentage}
                gradientId={gradientId}
                isHovered={hoverState[starIndex - 1]}
                handleMouseOver={() => handleMouseOver(starIndex - 1)}
                handleMouseOut={handleMouseOut}
            />
        )
    })

    return (
        <div className="starsDiv">
            {stars}
        </div>
    )
}

function Star({ percentage, gradientId, isHovered, handleMouseOver, handleMouseOut }) {
    const starRef = useRef(null)

    useEffect(() => {
        const star = starRef.current
        const gradient = star.querySelector('linearGradient')
        gradient.children[0].setAttribute('offset', `${percentage}%`)
    }, [percentage])

    return (
        <svg
            viewBox="0 0 24 24"
            fill={`url(#${gradientId})`}
            ref={starRef}
            className={isHovered ? 'hover' : ''}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <path
                d="M12 2L15.09 8.34L22 9.27L17 14.24L18.18 21L12 17.77L5.82 21L7 14.24L2 9.27L8.91 8.34L12 2Z"
            />
            <linearGradient id={gradientId} className='starGradient'>
                <stop offset="0%" stopColor="currentColor" />
                <stop offset="0%" stopColor="gray" />
            </linearGradient>
        </svg>
    )
}

export default Stars
