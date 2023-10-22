import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setShippingLocation } from '../../../store/slices/shipping/shippingSlice'
import { CSSTransition } from 'react-transition-group'

export function LocationPicker() {
    const isMobile = useSelector((state) => state.mobile.isMobile)
    const showShipping = useSelector((state) => state.shipping.showShipping)

    const shippingRef = useRef()

    return (
        <CSSTransition
            in={showShipping && !isMobile}
            timeout={200}
            classNames="shippingContainer"
            unmountOnExit
            nodeRef={shippingRef}
        >
            <div className="shippingContainer" ref={shippingRef}>
                <MiniLocationPicker></MiniLocationPicker>
            </div>
        </CSSTransition>
    )
}

export function MiniLocationPicker() {
    const shippingArray = useSelector((state) => state.shipping.shippingArray)
    const shippingLocation = useSelector((state) => state.shipping.shippingLocation)

    const dispatch = useDispatch()

    const handleShippingLocationChange = (selectedLocation) => {
        dispatch(setShippingLocation(selectedLocation))
    }

    return (
        <ul className='shippingUl'>
            {shippingArray.map((e) => (
                <li key={e}>
                    <button
                        className='shippingButtons'
                        disabled={shippingLocation.toLowerCase() === e}
                        onClick={() => handleShippingLocationChange(e)}
                    >
                        <span>{e}</span>
                    </button>
                </li>
            ))}
        </ul>
    )
}