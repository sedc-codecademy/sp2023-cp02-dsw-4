import React, { useRef, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { CSSTransition } from "react-transition-group"
import { setShowLoading } from "../../store/slices/loaderSlice/loaderSlice"

function PageLoader() {
    const dispatch = useDispatch()
    const loaderRef = useRef()
    const showLoading = useSelector((state) => state.loader.showLoading)
    const isFetching = useSelector((state) => state.loader.isFetching)
    const isError = useSelector((state) => state.loader.isError)

    const handleReload = () => {
        window.location.reload()
    }

    useEffect(() => {
        let timer
        if (showLoading && !isFetching && !isError) {
            timer = setTimeout(() => {
                dispatch(setShowLoading(false))
            }, 5200)
        }

        return () => {
            clearTimeout(timer)
        }
    }, [showLoading, isFetching, dispatch, isError])

    return (
        <CSSTransition
            in={showLoading}
            timeout={500}
            classNames="pageLoader"
            unmountOnExit
            nodeRef={loaderRef}
        >
            <div className="pageLoader" ref={loaderRef}>
                <h1>
                    <span>Click</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 156 169">
                            <path fill="url(#a)"
                                d="m104 23-13-4c-5-3-12-6-23-6-19 0-39 11-39 31 0 9 4 18 12 29C20 83 0 96 0 121c0 33 29 48 49 48 24 0 39-13 53-26 2 6 4 12 4 18v8h28v-8c0-12-4-23-11-35a118 118 0 0 0-15-19L86 86C70 70 56 57 56 45c0-8 6-11 12-11s12 2 17 4 10 4 16 4m-2 0-4 20 61-19-49-43-3 23M52 142c-9 0-23-6-23-23 0-12 11-20 29-28l8 8 23 24c-12 11-22 19-37 19Z" />
                            <defs>
                                <linearGradient
                                    id="a"
                                    x1="0"
                                    x2="156"
                                    y1="84.5"
                                    y2="84.5"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop offset=".2" stopColor="#0FB" />
                                    <stop offset=".9" stopColor="#00AE91" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>
                    <span>Ship</span>
                </h1>
                <div className={`somethingWrong ${isError && "true"}`}>
                    <p>Something went wrong, please reload the page.</p>
                    <button disabled={!isError} onClick={handleReload}><span>Reload Page</span></button>
                </div>
            </div>
        </CSSTransition>
    )
}

export default PageLoader
