import React, { useRef, useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { CSSTransition } from "react-transition-group"
import { setShowLoading } from "../../store/slices/loaderSlice/loaderSlice"
import { LoadingSvg } from "./LoadingSvg"
import { FooterLogo } from "../Footer/footerLogo"
import { useLogout } from "../../helpers/UserHelper/UserHelper"

function PageLoader() {
    const dispatch = useDispatch()
    const logout = useLogout()
    const loaderRef = useRef()
    const showLoading = useSelector((state) => state.loader.showLoading)
    const isFetching = useSelector((state) => state.loader.isFetching)
    const isError = useSelector((state) => state.loader.isError)
    const isMobile = useSelector((state) => state.mobile.isMobile)

    const handleReload = () => {
        window.location.reload()
    }
    const handleReset = () => {
        logout()
        setTimeout(() => {
            window.location.reload()
        }, 500);
    }

    useEffect(() => {
        let timer;
        if (showLoading && !isFetching && !isError) {
            timer = setTimeout(() => {
                dispatch(setShowLoading(false));
            }, 5200);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [showLoading, isFetching, dispatch, isError]);

    return (
        <CSSTransition
            in={showLoading}
            timeout={500}
            classNames="pageLoader"
            unmountOnExit
            nodeRef={loaderRef}
        >
            <div className="pageLoader" ref={loaderRef}>
                {isMobile ?
                    <FooterLogo></FooterLogo>
                    : <h1>
                        <span style={{ '--i': '1' }}>C</span>
                        <span style={{ '--i': '2' }}>l</span>
                        <span style={{ '--i': '3' }}>i</span>
                        <span style={{ '--i': '4' }}>c</span>
                        <span style={{ '--i': '5' }}>k</span>
                        <span className="svgSpan">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 156 169"
                            >
                                <path
                                    fill="url(#a)"
                                    d="m104 23-13-4c-5-3-12-6-23-6-19 0-39 11-39 31 0 9 4 18 12 29C20 83 0 96 0 121c0 33 29 48 49 48 24 0 39-13 53-26 2 6 4 12 4 18v8h28v-8c0-12-4-23-11-35a118 118 0 0 0-15-19L86 86C70 70 56 57 56 45c0-8 6-11 12-11s12 2 17 4 10 4 16 4m-2 0-4 20 61-19-49-43-3 23M52 142c-9 0-23-6-23-23 0-12 11-20 29-28l8 8 23 24c-12 11-22 19-37 19Z"
                                />
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
                        <span style={{ '--i': '6' }}>S</span>
                        <span style={{ '--i': '7' }}>h</span>
                        <span style={{ '--i': '8' }}>i</span>
                        <span style={{ '--i': '9' }}>p</span>
                    </h1>}

                <div className={`somethingWrong ${isError && "true"}`}>
                    <p>Something went wrong, log-out or reload the page.</p>
                    <div>
                        <button disabled={!isError} onClick={handleReset}>
                            <span>Log out</span>
                        </button>
                        <button disabled={!isError} onClick={handleReload}>
                            <span>Reload</span>
                        </button>
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}

export function LoadingErrorDiv(props) {
    return (
        <div className={`loadingDiv ${props.classTitle}`}>
            {props.isError ? (
                <>
                    <h1>Ooops, error!</h1>
                    <p>{props.errorMessage}</p>
                    <button onClick={props.refetch}>Retry</button>
                </>
            ) : (
                <>
                    <h1>{props.loadMessage}</h1>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                    >
                        <rect width="10" height="10" x="1" y="1" fill="var(--accent)" rx="1">
                            <animate
                                id="svgSpinnersBlocksShuffle30"
                                fill="freeze"
                                attributeName="x"
                                begin="0;svgSpinnersBlocksShuffle3b.end"
                                dur="0.2s"
                                values="1;13"
                            />
                            <animate
                                id="svgSpinnersBlocksShuffle31"
                                fill="freeze"
                                attributeName="y"
                                begin="svgSpinnersBlocksShuffle38.end"
                                dur="0.2s"
                                values="1;13"
                            />
                            <animate
                                id="svgSpinnersBlocksShuffle32"
                                fill="freeze"
                                attributeName="x"
                                begin="svgSpinnersBlocksShuffle39.end"
                                dur="0.2s"
                                values="13;1"
                            />
                            <animate
                                id="svgSpinnersBlocksShuffle33"
                                fill="freeze"
                                attributeName="y"
                                begin="svgSpinnersBlocksShuffle3a.end"
                                dur="0.2s"
                                values="13;1"
                            />
                        </rect>
                        <rect width="10" height="10" x="1" y="13" fill="var(--secAccent)" rx="1">
                            <animate
                                id="svgSpinnersBlocksShuffle34"
                                fill="freeze"
                                attributeName="y"
                                begin="svgSpinnersBlocksShuffle30.end"
                                dur="0.2s"
                                values="13;1"
                            />
                            <animate
                                id="svgSpinnersBlocksShuffle35"
                                fill="freeze"
                                attributeName="x"
                                begin="svgSpinnersBlocksShuffle31.end"
                                dur="0.2s"
                                values="1;13"
                            />
                            <animate
                                id="svgSpinnersBlocksShuffle36"
                                fill="freeze"
                                attributeName="y"
                                begin="svgSpinnersBlocksShuffle32.end"
                                dur="0.2s"
                                values="1;13"
                            />
                            <animate
                                id="svgSpinnersBlocksShuffle37"
                                fill="freeze"
                                attributeName="x"
                                begin="svgSpinnersBlocksShuffle33.end"
                                dur="0.2s"
                                values="13;1"
                            />
                        </rect>
                        <rect width="10" height="10" x="13" y="13" fill="var(--tertAccent)" rx="1">
                            <animate
                                id="svgSpinnersBlocksShuffle38"
                                fill="freeze"
                                attributeName="x"
                                begin="svgSpinnersBlocksShuffle34.end"
                                dur="0.2s"
                                values="13;1"
                            />
                            <animate
                                id="svgSpinnersBlocksShuffle39"
                                fill="freeze"
                                attributeName="y"
                                begin="svgSpinnersBlocksShuffle35.end"
                                dur="0.2s"
                                values="13;1"
                            />
                            <animate
                                id="svgSpinnersBlocksShuffle3a"
                                fill="freeze"
                                attributeName="x"
                                begin="svgSpinnersBlocksShuffle36.end"
                                dur="0.2s"
                                values="1;13"
                            />
                            <animate
                                id="svgSpinnersBlocksShuffle3b"
                                fill="freeze"
                                attributeName="y"
                                begin="svgSpinnersBlocksShuffle37.end"
                                dur="0.2s"
                                values="1;13"
                            />
                        </rect>
                    </svg>
                </>
            )}
        </div>
    );
}

export function BigLoadingDiv(props) {
    const [clickCount, setClickCount] = useState(0);

    const handleButtonClick = () => {
        if (clickCount < 5) {
            setClickCount((prevCount) => prevCount + 1);
            props.refetch();
        }
    };
    return (
        <main className="bigLoading">
            <LoadingSvg></LoadingSvg>
            <button onClick={handleButtonClick} disabled={clickCount > 4}>
                <h1>{props.title}</h1>
                <p>
                    {clickCount > 4
                        ? `sorry somehting went wrong please reload the page`
                        : props.message}
                </p>
            </button>
        </main>
    );
}

export default PageLoader
