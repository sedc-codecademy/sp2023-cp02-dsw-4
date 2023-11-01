import React, { useRef } from "react"
import { useSelector } from "react-redux"
import { CSSTransition } from "react-transition-group"

function DDBkgf() {
    const isDDOn = useSelector((state) => state.ddBkg.isDDOn)
    const isTrueRef = useRef()

    return (
        <CSSTransition
            in={isDDOn}
            timeout={150}
            classNames="background-div"
            unmountOnExit
            nodeRef={isTrueRef}
        >
            <div className="background-div" ref={isTrueRef}>
            </div>
        </CSSTransition>
    )
}

export default DDBkgf