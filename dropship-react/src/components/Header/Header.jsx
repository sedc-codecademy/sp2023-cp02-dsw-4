import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link, useLocation } from "react-router-dom"

import Nav from "./Nav/Nav"
import SearchBar from "./SearchBar/SearchBar"

import { setIsSettingsOn } from "../../store/slices/navSettingsSlice"

export default function Header() {
    const dispatch = useDispatch()

    const isSettingsOn = useSelector((state) => state.navSettings.isSettingsOn)

    const location = useLocation()

    const isSmallHeader = ["/"].includes(location.pathname)

    const closeSettings = () => {
        if (isSettingsOn) {
            dispatch(setIsSettingsOn(false))
        }
    }
    return (
        <header className={!isSmallHeader ? "smallHeader" : ""}>
            <Link className="logo" to="/" onClick={closeSettings}>
                <svg viewBox="0 0 717 241">
                    <path
                        d="M242.468 78C248.599 78.1248 254.654 79.4703 260.314 81.9662L256.967 95.5162C252.733 93.9522 247.979 92.0505 242.574 92.0505C228.489 92.0505 222.67 102.573 222.67 118.925C222.67 135.278 228.702 144.912 242.468 144.912C247.921 144.859 253.274 143.353 258.032 140.533L261 154.295C255.039 157.41 248.477 159.02 241.829 159C219.288 159 207 143.098 207 119.025C207 94.7279 219.075 78 242.468 78Z"
                        fill="var(--secColor)"
                    />
                    <path
                        d="M287.779 147.167C288.836 147.172 289.89 147.058 290.924 146.827L292 159.107C289.506 159.634 286.973 159.933 284.429 160C271.971 160 267 151.558 267 138.045V77.9059L281.937 77V137.819C281.937 143.959 283.449 147.167 287.779 147.167Z"
                        fill="var(--secColor)"
                    />
                    <path
                        d="M307.56 75C312.896 75 316 78.5042 316 83.7162C316 88.9282 312.896 92.4324 307.56 92.4324C302.223 92.4324 299 88.9282 299 83.7162C299 78.5042 302.08 75 307.56 75ZM300.182 158V100.137H314.926V158H300.182Z"
                        fill="var(--secColor)"
                    />
                    <path
                        d="M360.168 112.805C356.476 111.036 352.509 110.067 348.484 109.953C340.105 109.953 335.551 116.448 335.551 127.171C335.551 138.913 340.313 145.001 349.212 145.001C353.18 144.878 357.085 143.869 360.688 142.033L363 154.693C358.315 156.986 353.228 158.113 348.102 157.991C330.928 157.991 321 146.249 321 127.668C321 109.086 330.824 97.0004 347.282 97.0004C352.643 96.9741 357.953 98.1393 362.896 100.426L360.168 112.805Z"
                        fill="var(--secColor)"
                    />
                    <path
                        d="M393.352 134.922C391.165 136.617 388.872 138.312 386.371 139.983V156.975H372V75.7971L386.382 75V124.952C396.168 118.043 400.962 110.11 402.673 99.1281H416.939C416.625 108.87 412.052 117.588 403.709 126.078L421 157H405.338L393.352 134.922Z"
                        fill="var(--secColor)"
                    />
                    <path
                        d="M482.663 156.647L476.761 150.497C470.467 155.473 462.851 158.105 455.058 157.997C439.026 157.997 429 149.385 429 134.848C429 124.848 435.41 118.061 443.473 114.036C439.13 107.786 437.79 103.061 437.79 97.2492C437.79 85.2747 445.956 77 458.673 77C471.39 77 479.244 84.4997 479.244 95.2368C479.244 105.974 473.249 112.461 463.328 117.273L476.333 131.135C478.492 126.352 479.89 121.21 480.468 115.923H493.694C492.91 124.891 490.028 133.494 485.32 140.922L500 156.697L482.663 156.647ZM467.971 141.21L454.11 126.661C452.875 125.323 451.627 124.086 450.645 122.911C445.887 125.598 443.715 129.06 443.715 134.098C443.715 140.81 448.878 144.722 455.6 144.722C459.948 144.841 464.237 143.623 467.971 141.21ZM451.431 97.5742C451.431 101.487 452.782 104.736 456.19 109.099C461.664 106.524 466.111 103.161 466.111 97.0117C466.111 92.6494 463.64 89.6245 458.569 89.6245C454.388 89.6245 451.431 92.3119 451.431 97.5742Z"
                        fill="var(--secColor)"
                    />
                    <path
                        d="M530.827 146.098C538.864 146.098 542.928 142.963 542.928 137.143C542.928 130.099 538.13 128.088 528.742 124.853C516.862 120.494 509.151 114.561 509.151 101.483C509.151 87.2821 518.213 79.0011 534.275 79.0011C541.011 78.9548 547.691 80.3254 553.935 83.0355L551.012 96.3375C546.016 94.1183 540.671 92.9439 535.265 92.8777C527.973 92.8777 524.328 95.5506 524.328 101.034C524.328 107.067 527.973 108.978 536.103 112.1C548.507 116.684 558 121.718 558 137.081C558 152.069 547.156 160 531.514 160C522.546 160 514.206 157.989 509 155.416L511.702 141.889C517.794 144.499 524.27 145.924 530.827 146.098Z"
                        fill="var(--secColor)"
                    />
                    <path
                        d="M565 78.7955L579.534 78V103.09C582.938 101.451 586.648 100.677 590.376 100.83C603.946 100.83 613 108.974 613 124V159.949H598.419V125.25C598.419 117.447 594.738 113.886 588 113.886C585.048 113.937 582.141 114.669 579.475 116.033V160H565V78.7955Z"
                        fill="var(--secColor)"
                    />
                    <path
                        d="M630.554 77C635.906 77 639 80.5042 639 85.7162C639 90.9282 635.906 94.4324 630.554 94.4324C625.202 94.4324 622 90.9282 622 85.7162C622 80.5042 625.094 77 630.554 77ZM623.171 160V102.137H637.889V160H623.171Z"
                        fill="var(--secColor)"
                    />
                    <path
                        d="M667.111 97C684.563 97 695 108.471 695 126.672C695 145.383 685.097 157.823 668.502 157.823C665.462 157.924 662.431 157.418 659.563 156.332V178H645V101.907C651.993 98.7122 659.51 97.044 667.111 97ZM659.563 111.492V143.446C661.69 144.526 664.02 145.071 666.374 145.039C675.73 145.039 680.093 138.883 680.093 127.131C680.093 116.858 676.051 110.014 666.374 110.014C664.039 110.024 661.729 110.527 659.574 111.492H659.563Z"
                        fill="var(--secColor)"
                    />
                    <path
                        d="M90.6371 123.892C92.5416 125.289 94.5206 126.686 96.4251 128.093C101.929 131.831 107.208 135.881 112.236 140.224C106.022 147.575 100.532 153.877 91.4989 155.127C85.796 155.935 76.7841 153.436 75.3052 143.259C74.2412 135.886 80.3165 130.32 90.6371 123.892ZM177 120.5C177 135.629 172.456 150.418 163.941 162.998C155.427 175.577 143.325 185.383 129.165 191.174C115.006 196.965 99.4249 198.482 84.3923 195.532C69.3596 192.583 55.5504 185.3 44.7105 174.605C33.8707 163.909 26.487 150.281 23.4931 135.444C20.4991 120.606 22.0293 105.226 27.8902 91.2465C33.7511 77.2674 43.6795 65.3176 56.4201 56.9079C69.1607 48.4982 84.1414 44.0062 99.4681 44C109.648 43.9959 119.729 45.9715 129.136 49.8142C138.542 53.6568 147.09 59.2911 154.29 66.3952C161.489 73.4993 167.201 81.934 171.098 91.2174C174.994 100.501 177 110.451 177 120.5ZM111.448 91.0301L110.619 103.013L146.081 86.3355L112.534 64.9734L112.395 78.8577C110.065 79.0783 106.767 78.217 104.362 77.5344C99.7583 76.0295 94.8629 75.6017 90.0626 76.2846C78.178 77.965 67.07 85.9784 68.783 98.0667C69.581 103.591 72.6878 108.737 78.7738 114.577C66.3253 122.422 55.5472 131.822 57.6858 146.515C60.5585 166.333 79.8165 173.033 91.9352 171.321C106.267 169.294 114.194 160.178 121.726 151.199C123.817 154.425 125.209 158.044 125.812 161.827L126.036 163.308L142.995 160.903L142.772 159.433C141.708 152.343 138.569 145.779 133.079 139.404C131.548 137.599 129.925 135.871 128.217 134.227C126.342 132.413 124.371 130.698 122.312 129.091C117.46 125.174 112.3 121.624 107.288 118.179C95.9676 110.386 86.1897 103.654 85.1151 96.2708C84.466 91.7967 88.158 89.2026 91.8607 88.6775C95.5633 88.1524 98.8936 88.9506 102.5 89.7278C105.426 90.4824 108.427 90.9191 111.448 91.0301Z"
                        fill="url(#headerLogoGradient)"
                    />
                    <defs>
                        <linearGradient
                            id="headerLogoGradient"
                            x1="60.7394"
                            y1="54.2399"
                            x2="136.75"
                            y2="187.615"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.27" />
                            <stop offset="1" />
                        </linearGradient>
                    </defs>
                </svg>
            </Link>
            <Nav></Nav>
            <SearchBar></SearchBar>
            {/* {isSmallHeader && (
                <svg className="headerBackground" viewBox="0 0 1440 560">
                    <g mask='url("#SvgjsMask1010")'>
                        <path
                            d="M0 0L607.63 0L0 530.9z"
                            filter="url(#SvgjsFilter1011)"
                            fill="url(#primaryGradient)"
                        ></path>
                        <path
                            d="M0 560L607.63 560L0 29.100000000000023z"
                            filter="url(#SvgjsFilter1011)"
                            fill="url(#secondaryGradient)"
                        ></path>
                        <path
                            d="M1440 560L832.37 560L1440 29.100000000000023z"
                            filter="url(#SvgjsFilter1011)"
                            fill="url(#primaryGradient)"
                        ></path>
                        <path
                            d="M1440 0L832.37 0L1440 530.9z"
                            filter="url(#SvgjsFilter1011)"
                            fill="url(#secondaryGradient)"
                        ></path>
                    </g>
                    <defs>
                        <mask id="SvgjsMask1010">
                            <rect width="1440" height="560" fill="#ffffff"></rect>
                        </mask>
                        <filter height="130%" id="SvgjsFilter1011">
                            <feGaussianBlur
                                in="SourceAlpha"
                                stdDeviation="5"
                                result="TopLeftG"
                            ></feGaussianBlur>
                            <feOffset
                                dx="-5"
                                dy="-5"
                                in="TopLeftG"
                                result="TopLeftO"
                            ></feOffset>
                            <feComponentTransfer in="TopLeftO" result="TopLeftC">
                                <feFuncA type="linear" slope="0.7"></feFuncA>
                            </feComponentTransfer>
                            <feGaussianBlur
                                in="SourceAlpha"
                                stdDeviation="5"
                                result="TopRightG"
                            ></feGaussianBlur>
                            <feOffset
                                dx="5"
                                dy="-5"
                                in="TopRightG"
                                result="TopRightO"
                            ></feOffset>
                            <feComponentTransfer in="TopRightO" result="TopRightC">
                                <feFuncA type="linear" slope="0.7"></feFuncA>
                            </feComponentTransfer>
                            <feGaussianBlur
                                in="SourceAlpha"
                                stdDeviation="5"
                                result="BottomLeftG"
                            ></feGaussianBlur>
                            <feOffset
                                dx="-5"
                                dy="5"
                                in="BottomLeftG"
                                result="BottomLeftO"
                            ></feOffset>
                            <feComponentTransfer in="BottomLeftO" result="BottomLeftC">
                                <feFuncA type="linear" slope="0.7"></feFuncA>
                            </feComponentTransfer>
                            <feGaussianBlur
                                in="SourceAlpha"
                                stdDeviation="5"
                                result="BottomRightG"
                            ></feGaussianBlur>
                            <feOffset
                                dx="5"
                                dy="5"
                                in="BottomRightG"
                                result="BottomRightO"
                            ></feOffset>
                            <feComponentTransfer in="BottomRightO" result="BottomRightC">
                                <feFuncA type="linear" slope="0.7"></feFuncA>
                            </feComponentTransfer>
                            <feMerge>
                                <feMergeNode in="TopLeftC"></feMergeNode>
                                <feMergeNode in="TopRightC"></feMergeNode>
                                <feMergeNode in="BottomLeftC"></feMergeNode>
                                <feMergeNode in="BottomRightC"></feMergeNode>
                                <feMergeNode in="SourceGraphic"></feMergeNode>
                            </feMerge>
                        </filter>

                        <linearGradient
                            x1="0%"
                            y1="50%"
                            x2="100%"
                            y2="50%"
                            gradientUnits="userSpaceOnUse"
                            id="primaryGradient"
                        >
                            <stop stopColor="var(--accent)" offset="0"></stop>
                            <stop stopColor="var(--darkAccent)" offset="1"></stop>
                        </linearGradient>

                        <linearGradient
                            x1="50%"
                            y1="50%"
                            x2="50%"
                            y2="50%"
                            gradientUnits="userSpaceOnUse"
                            id="secondaryGradient"
                        >
                            <stop stopColor="var(--darkAccent)" offset="0"></stop>
                            <stop stopColor="var(--reverseSecAccent)" offset="1"></stop>
                        </linearGradient>
                    </defs>
                </svg>
            )} */}
        </header>
    )
}
