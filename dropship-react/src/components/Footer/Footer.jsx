import React, { useRef, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { FooterLogo } from "./footerLogo"
import { useSubscribe } from "../../helpers/UserHelper/UserHelper"

function skewSelector(y, x, centerX, centerY, skewThreshold, maxSkewAngle) {
    if (Math.abs(x - centerX) <= skewThreshold) {
        return 0
    } else {
        const deltaX = x - centerX
        const deltaY = y - centerY
        let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)

        angle = Math.max(-maxSkewAngle, Math.min(maxSkewAngle, angle))

        if (x < centerX) {
            angle = -angle
        }
        return angle
    }
}

function radiusSelector(x, skewThreshold, rect, borderRadiusValues) {
    let borderRadius = ""

    if (x <= rect.width / 2) {
        borderRadius = borderRadiusValues.left
    } else {
        borderRadius = borderRadiusValues.right
    }

    if (Math.abs(x - rect.width / 2) <= skewThreshold) {
        borderRadius = borderRadiusValues.center
    }
    return borderRadius
}

function hueSelector(x, y, rect, hueValues) {
    let hue = 0

    if (x <= rect.width / 2 && y <= rect.height / 2) {
        hue = hueValues.topLeft
    } else if (x <= rect.width / 2 && y > rect.height / 2) {
        hue = hueValues.bottomLeft
    } else if (x > rect.width / 2 && y <= rect.height / 2) {
        hue = hueValues.topRight
    } else if (x > rect.width / 2 && y > rect.height / 2) {
        hue = hueValues.bottomRight
    }

    if (document.querySelector('body').classList.contains('dark-mode')) {
        hue = -hue
    }

    return hue
}

function Footer() {
    const cardContainerRef = useRef(null)
    const subscribe = useSubscribe()
    const isMobile = useSelector((state) => state.mobile.isMobile)
    const [subscriber, setSubscriber] = useState('')

    const hueValues = {
        topLeft: -80,
        bottomLeft: -50,
        topRight: -50,
        bottomRight: -80,
        center: 50,
    }

    const borderRadiusValues = {
        left: "100% 50% 50% 50%/100% 50% 50% 50%",
        right: "50% 100% 100% 100%/50% 100% 100% 100%",
        center: "50%",
    }

    const handleMouseMove = (event) => {
        const cardContainer = cardContainerRef.current
        const rect = cardContainer.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const maxSkewAngle = 30
        const skewThreshold = rect.width * .25

        cardContainer.style.setProperty("--origin-x", `${x}px`)
        cardContainer.style.setProperty("--origin-y", `${y}px`)
        cardContainer.style.setProperty("--skew", `${skewSelector(y, x, centerX, centerY, skewThreshold, maxSkewAngle)}deg`)
        cardContainer.style.setProperty("--radius", `${radiusSelector(x, skewThreshold, rect, borderRadiusValues)}`)
        cardContainer.style.setProperty("--hue", `${hueSelector(x, y, rect, hueValues)}deg`)
    }

    const handleMouseOut = () => {
        const cardContainer = cardContainerRef.current
        cardContainer.style.setProperty("--opacity", 0)
    }

    const handleMouseIn = () => {
        const cardContainer = cardContainerRef.current
        cardContainer.style.setProperty("--opacity", 1)
    }

    const handleSubscribe = (e) => {
        e.preventDefault()
        subscribe({email: subscriber, id: ''})
        setSubscriber('')
    }

    return (
        <footer>
            <div className="footerBody">
                <div className="footerLogo">

                    <div
                        className="logoContainer"
                        ref={cardContainerRef}
                        onMouseEnter={!isMobile ? handleMouseIn : undefined}
                        onMouseMove={!isMobile ? handleMouseMove : undefined}
                        onMouseLeave={!isMobile ? handleMouseOut : undefined}
                    >
                        <FooterLogo></FooterLogo>
                    </div>

                    <div className="socials">
                        <h2>socials</h2>
                        <ul>
                            <li>
                                <a
                                    href="https://www.instagram.com/real_clickandship/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <svg id="insta" viewBox="0 0 24 24">
                                        <path className="mainPath"
                                            d="M12 8.40625C10 8.40625 8.40625 10.0312 8.40625 12C8.40625 14 10 15.5938 12 15.5938C13.9688 15.5938 15.5938 14 15.5938 12C15.5938 10.0312 13.9688 8.40625 12 8.40625ZM12 14.3438C10.7188 14.3438 9.65625 13.3125 9.65625 12C9.65625 10.7188 10.6875 9.6875 12 9.6875C13.2812 9.6875 14.3125 10.7188 14.3125 12C14.3125 13.3125 13.2812 14.3438 12 14.3438ZM16.5625 8.28125C16.5625 7.8125 16.1875 7.4375 15.7188 7.4375C15.25 7.4375 14.875 7.8125 14.875 8.28125C14.875 8.75 15.25 9.125 15.7188 9.125C16.1875 9.125 16.5625 8.75 16.5625 8.28125ZM18.9375 9.125C18.875 8 18.625 7 17.8125 6.1875C17 5.375 16 5.125 14.875 5.0625C13.7188 5 10.25 5 9.09375 5.0625C7.96875 5.125 7 5.375 6.15625 6.1875C5.34375 7 5.09375 8 5.03125 9.125C4.96875 10.2812 4.96875 13.75 5.03125 14.9062C5.09375 16.0312 5.34375 17 6.15625 17.8438C7 18.6562 7.96875 18.9062 9.09375 18.9688C10.25 19.0312 13.7188 19.0312 14.875 18.9688C16 18.9062 17 18.6562 17.8125 17.8438C18.625 17 18.875 16.0312 18.9375 14.9062C19 13.75 19 10.2812 18.9375 9.125ZM17.4375 16.125C17.2188 16.75 16.7188 17.2188 16.125 17.4688C15.1875 17.8438 13 17.75 12 17.75C10.9688 17.75 8.78125 17.8438 7.875 17.4688C7.25 17.2188 6.78125 16.75 6.53125 16.125C6.15625 15.2188 6.25 13.0312 6.25 12C6.25 11 6.15625 8.8125 6.53125 7.875C6.78125 7.28125 7.25 6.8125 7.875 6.5625C8.78125 6.1875 10.9688 6.28125 12 6.28125C13 6.28125 15.1875 6.1875 16.125 6.5625C16.7188 6.78125 17.1875 7.28125 17.4375 7.875C17.8125 8.8125 17.7188 11 17.7188 12C17.7188 13.0312 17.8125 15.2188 17.4375 16.125Z"
                                        ></path>

                                        <path className="hoverPath" fill="url(#socialGradient)"
                                            d="M12 8.40625C10 8.40625 8.40625 10.0312 8.40625 12C8.40625 14 10 15.5938 12 15.5938C13.9688 15.5938 15.5938 14 15.5938 12C15.5938 10.0312 13.9688 8.40625 12 8.40625ZM12 14.3438C10.7188 14.3438 9.65625 13.3125 9.65625 12C9.65625 10.7188 10.6875 9.6875 12 9.6875C13.2812 9.6875 14.3125 10.7188 14.3125 12C14.3125 13.3125 13.2812 14.3438 12 14.3438ZM16.5625 8.28125C16.5625 7.8125 16.1875 7.4375 15.7188 7.4375C15.25 7.4375 14.875 7.8125 14.875 8.28125C14.875 8.75 15.25 9.125 15.7188 9.125C16.1875 9.125 16.5625 8.75 16.5625 8.28125ZM18.9375 9.125C18.875 8 18.625 7 17.8125 6.1875C17 5.375 16 5.125 14.875 5.0625C13.7188 5 10.25 5 9.09375 5.0625C7.96875 5.125 7 5.375 6.15625 6.1875C5.34375 7 5.09375 8 5.03125 9.125C4.96875 10.2812 4.96875 13.75 5.03125 14.9062C5.09375 16.0312 5.34375 17 6.15625 17.8438C7 18.6562 7.96875 18.9062 9.09375 18.9688C10.25 19.0312 13.7188 19.0312 14.875 18.9688C16 18.9062 17 18.6562 17.8125 17.8438C18.625 17 18.875 16.0312 18.9375 14.9062C19 13.75 19 10.2812 18.9375 9.125ZM17.4375 16.125C17.2188 16.75 16.7188 17.2188 16.125 17.4688C15.1875 17.8438 13 17.75 12 17.75C10.9688 17.75 8.78125 17.8438 7.875 17.4688C7.25 17.2188 6.78125 16.75 6.53125 16.125C6.15625 15.2188 6.25 13.0312 6.25 12C6.25 11 6.15625 8.8125 6.53125 7.875C6.78125 7.28125 7.25 6.8125 7.875 6.5625C8.78125 6.1875 10.9688 6.28125 12 6.28125C13 6.28125 15.1875 6.1875 16.125 6.5625C16.7188 6.78125 17.1875 7.28125 17.4375 7.875C17.8125 8.8125 17.7188 11 17.7188 12C17.7188 13.0312 17.8125 15.2188 17.4375 16.125Z"
                                        ></path>

                                        <defs>
                                            <linearGradient
                                                x1="50%"
                                                y1="0%"
                                                x2="50%"
                                                y2="100%"
                                                id="socialGradient"
                                            >
                                                <stop
                                                    stopColor="var(--reverseAccent)"
                                                    offset="0%"
                                                ></stop>
                                                <stop stopColor="var(--accent)" offset="100%"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </a>
                            </li>
                            <li className="socials-divider"></li>
                            <li>
                                <a
                                    href="https://www.facebook.com/ClickShip-107599562366486"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <svg id="facebook" viewBox="0 0 24 24">
                                        <path className="mainPath"
                                            d="M15.4764 12.875L15.8836 10.3594H13.2945V8.71875C13.2945 8.00781 13.6436 7.35156 14.8073 7.35156H16V5.19141C16 5.19141 14.9236 5 13.9055 5C11.7818 5 10.3855 6.23047 10.3855 8.41797V10.3594H8V12.875H10.3855V19H13.2945V12.875H15.4764Z"></path>
                                        <path className="hoverPath" fill="url(#socialGradient)"
                                            d="M15.4764 12.875L15.8836 10.3594H13.2945V8.71875C13.2945 8.00781 13.6436 7.35156 14.8073 7.35156H16V5.19141C16 5.19141 14.9236 5 13.9055 5C11.7818 5 10.3855 6.23047 10.3855 8.41797V10.3594H8V12.875H10.3855V19H13.2945V12.875H15.4764Z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li className="socials-divider"></li>
                            <li>
                                <a
                                    href="https://twitter.com/clipandship1"
                                    target="_blank"
                                    rel="noreferrer noopener">
                                    <svg id="twitter" viewBox="0 0 32 32">
                                        <path className="mainPath"
                                            d="M 28 8.558594 C 27.117188 8.949219 26.167969 9.214844 25.171875 9.332031 C 26.1875 8.722656 26.96875 7.757813 27.335938 6.609375 C 26.386719 7.171875 25.332031 7.582031 24.210938 7.804688 C 23.3125 6.847656 22.03125 6.246094 20.617188 6.246094 C 17.898438 6.246094 15.691406 8.453125 15.691406 11.171875 C 15.691406 11.558594 15.734375 11.933594 15.820313 12.292969 C 11.726563 12.089844 8.097656 10.128906 5.671875 7.148438 C 5.246094 7.875 5.003906 8.722656 5.003906 9.625 C 5.003906 11.332031 5.871094 12.839844 7.195313 13.722656 C 6.386719 13.695313 5.628906 13.476563 4.964844 13.105469 C 4.964844 13.128906 4.964844 13.148438 4.964844 13.167969 C 4.964844 15.554688 6.660156 17.546875 8.914063 17.996094 C 8.5 18.109375 8.066406 18.171875 7.617188 18.171875 C 7.300781 18.171875 6.988281 18.140625 6.691406 18.082031 C 7.316406 20.039063 9.136719 21.460938 11.289063 21.503906 C 9.605469 22.824219 7.480469 23.609375 5.175781 23.609375 C 4.777344 23.609375 4.386719 23.585938 4 23.539063 C 6.179688 24.9375 8.765625 25.753906 11.546875 25.753906 C 20.605469 25.753906 25.558594 18.25 25.558594 11.742188 C 25.558594 11.53125 25.550781 11.316406 25.542969 11.105469 C 26.503906 10.410156 27.339844 9.542969 28 8.558594 Z" />
                                        <path className="hoverPath" fill="url(#socialGradient)"
                                            d="M 28 8.558594 C 27.117188 8.949219 26.167969 9.214844 25.171875 9.332031 C 26.1875 8.722656 26.96875 7.757813 27.335938 6.609375 C 26.386719 7.171875 25.332031 7.582031 24.210938 7.804688 C 23.3125 6.847656 22.03125 6.246094 20.617188 6.246094 C 17.898438 6.246094 15.691406 8.453125 15.691406 11.171875 C 15.691406 11.558594 15.734375 11.933594 15.820313 12.292969 C 11.726563 12.089844 8.097656 10.128906 5.671875 7.148438 C 5.246094 7.875 5.003906 8.722656 5.003906 9.625 C 5.003906 11.332031 5.871094 12.839844 7.195313 13.722656 C 6.386719 13.695313 5.628906 13.476563 4.964844 13.105469 C 4.964844 13.128906 4.964844 13.148438 4.964844 13.167969 C 4.964844 15.554688 6.660156 17.546875 8.914063 17.996094 C 8.5 18.109375 8.066406 18.171875 7.617188 18.171875 C 7.300781 18.171875 6.988281 18.140625 6.691406 18.082031 C 7.316406 20.039063 9.136719 21.460938 11.289063 21.503906 C 9.605469 22.824219 7.480469 23.609375 5.175781 23.609375 C 4.777344 23.609375 4.386719 23.585938 4 23.539063 C 6.179688 24.9375 8.765625 25.753906 11.546875 25.753906 C 20.605469 25.753906 25.558594 18.25 25.558594 11.742188 C 25.558594 11.53125 25.550781 11.316406 25.542969 11.105469 C 26.503906 10.410156 27.339844 9.542969 28 8.558594 Z" />
                                    </svg>
                                </a>
                            </li>
                            <li className="socials-divider"></li>
                            <li>
                                <a
                                    href="https://github.com/sedc-codecademy/sp2023-cp02-dsw-4"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <svg id="git" viewBox="0 0 32 32">
                                        <path className="mainPath" fillRule="evenodd"
                                            d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"
                                        />
                                        <path className="hoverPath" fill="url(#socialGradient)" fillRule="evenodd"
                                            d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footerMain">
                    <div className="foooterCard getintouch">
                        <p className="footerCardTitle">get in touch</p>
                        <ul>
                            <li>
                                <a href="mailto:click@ship.and">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M16 3A12.92 12.92 0 0 0 3 16v1a13 13 0 0 0 13 13h7v-2h-7A11 11 0 0 1 5 17v-1A10.94 10.94 0 0 1 16 5a10.64 10.64 0 0 1 11 11c0 3.59-1.4 5-3.66 5c-1.58 0-2.34-1.29-2.34-3v-8h-2v1.94A3.84 3.84 0 0 0 15.5 10a5.48 5.48 0 0 0-5.5 5.44v2.12A5.48 5.48 0 0 0 15.5 23a4.28 4.28 0 0 0 4-2.46A4.35 4.35 0 0 0 23.41 23c3.07 0 5.59-2 5.59-7A12.72 12.72 0 0 0 16 3Zm3 14.56a3.5 3.5 0 0 1-7 0v-2.12a3.5 3.5 0 0 1 7 0Z" /></svg>
                                    <p>click@ship<span>.</span>and</p>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+389  335 33 33">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M26 29h-.17C6.18 27.87 3.39 11.29 3 6.23A3 3 0 0 1 5.76 3h5.51a2 2 0 0 1 1.86 1.26L14.65 8a2 2 0 0 1-.44 2.16l-2.13 2.15a9.37 9.37 0 0 0 7.58 7.6l2.17-2.15a2 2 0 0 1 2.17-.41l3.77 1.51A2 2 0 0 1 29 20.72V26a3 3 0 0 1-3 3ZM6 5a1 1 0 0 0-1 1v.08C5.46 12 8.41 26 25.94 27a1 1 0 0 0 1.06-.94v-5.34l-3.77-1.51l-2.87 2.85l-.48-.06c-8.7-1.09-9.88-9.79-9.88-9.88l-.06-.48l2.84-2.87L11.28 5Z" /></svg>
                                    <p><span>+</span>389 (75) 500 000</p>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="adress"
                                    href="https://goo.gl/maps/gFbza85mvGDDCzuw7?coh=178573&entry=tt"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="m16 30l-8.436-9.949a35.076 35.076 0 0 1-.348-.451A10.889 10.889 0 0 1 5 13a11 11 0 0 1 22 0a10.884 10.884 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447ZM8.812 18.395c.002 0 .234.308.287.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.901 8.901 0 0 0 25 13a9 9 0 0 0-18 0a8.905 8.905 0 0 0 1.813 5.395Z" /><path fill="currentColor" d="M21 18h-2v-8h-6v8h-2v-8a2.002 2.002 0 0 1 2-2h6a2.002 2.002 0 0 1 2 2Z" /><path fill="currentColor" d="M15 16h2v2h-2zm0-4h2v2h-2z" /></svg>
                                    <p>
                                        MK<span>,</span>Boulevard Ilinden<span>,</span> Skopje 1000
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="foooterCard newsletter">
                        <p className="footerCardTitle">stay in touch</p>
                        <h1>subscribe to our newsletter</h1>
                        <form className="email" onSubmit={handleSubscribe}>
                            <div>
                                <input
                                    className="footerEmail"
                                    id="footerEmail"
                                    type="email"
                                    pattern="^[a-zA-Z0-9+._]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$"
                                    required
                                    placeholder=""
                                    value={subscriber}
                                    onChange={(e) => setSubscriber(e.target.value)}
                                ></input>
                                <label htmlFor="footerEmail">Enter email</label>
                            </div>
                            <button type="submit">
                                <svg viewBox="0 0 48 48" transform="scale(-1, 1)">
                                    <g>
                                        <g>
                                            <path
                                                d="M8.532,18.531l8.955-8.999c-0.244-0.736-0.798-1.348-1.54-1.653c-1.01-0.418-2.177-0.185-2.95,0.591L1.047,20.479
                c-1.396,1.402-1.396,3.67,0,5.073l11.949,12.01c0.771,0.775,1.941,1.01,2.951,0.592c0.742-0.307,1.295-0.918,1.54-1.652l-8.956-9
                C6.07,25.027,6.071,21.003,8.532,18.531z"
                                            />
                                            <path
                                                d="M45.973,31.64c-1.396-5.957-5.771-14.256-18.906-16.01v-5.252c0-1.095-0.664-2.082-1.676-2.5
                c-0.334-0.138-0.686-0.205-1.033-0.205c-0.705,0-1.398,0.276-1.917,0.796L10.49,20.479c-1.396,1.402-1.396,3.669-0.001,5.073
                l11.95,12.009c0.517,0.521,1.212,0.797,1.92,0.797c0.347,0,0.697-0.066,1.031-0.205c1.012-0.418,1.676-1.404,1.676-2.5V30.57
                c4.494,0.004,10.963,0.596,15.564,3.463c0.361,0.225,0.77,0.336,1.176,0.336c0.457,0,0.91-0.139,1.297-0.416
                C45.836,33.429,46.18,32.515,45.973,31.64z"
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footerBottom">
                <div className="legal">
                    <p>© 2023 Click & Ship All Rights and Lefts reserved.</p>
                    <ul>
                        <li>
                            <Link to={"/privacy"}>Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to={"/disclaimer"}>Disclaimer</Link>
                        </li>
                        <li>
                            <Link to={"/location"}>Location Services</Link>
                        </li>
                    </ul>
                </div>

                {/* <ul className="footerLanguage">
                    <li>
                        <button className="english">
                            english
                        </button>
                    </li>
                    <li className="divider"></li>
                    <li>
                        <button className="macedonian">
                            macedonian
                        </button>
                    </li>
                </ul> */}
            </div>
        </footer>
    )
}

export default Footer
