import React, { useEffect, useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { CSSTransition } from "react-transition-group"
import { setShowAccDropDown } from "../../store/slices/acDropDownSlice"

function AccountDropDown() {
    const dispatch = useDispatch()
    const csstransitionRef = useRef()
    const showDropDown = useSelector((state) => state.acDropDown.showAccDropDown)

    const [currentMode, setCurrentMode] = useState("login")

    useEffect(() => {
        if (showDropDown) {
            csstransitionRef.current.showModal()
        }
    })

    const handleCloseLogin = () => {
        dispatch(setShowAccDropDown(false))
    }

    return (
        <CSSTransition
            in={showDropDown}
            timeout={350}
            classNames="loginDropdown"
            unmountOnExit
            nodeRef={csstransitionRef}
        >
            <dialog class="loginDropdown" ref={csstransitionRef}>
                <button class="closeLoginButton" onClick={handleCloseLogin}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                    >
                        <path
                            fill="currentColor"
                            d="M17.414 16L26 7.414L24.586 6L16 14.586L7.414 6L6 7.414L14.586 16L6 24.586L7.414 26L16 17.414L24.586 26L26 24.586L17.414 16z"
                        />
                    </svg>
                </button>

                <form class="loginUi">
                    <h1>
                        Sign <span>In</span>
                    </h1>

                    <div class="loginIcons">
                        <p>Or sign up with</p>
                        <div>
                            <a>
                                <svg viewBox="0 0 256 256">
                                    <path
                                        fill="#1877F2"
                                        d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                                    />
                                    <path
                                        fill="#FFF"
                                        d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825"
                                    />
                                </svg>
                            </a>
                            <a>
                                <svg viewBox="0 0 128 128">
                                    <path
                                        fill="#fff"
                                        d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.33 74.33 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.16 36.16 0 0 1-13.93 5.5a41.29 41.29 0 0 1-15.1 0A37.16 37.16 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.31 38.31 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.28 34.28 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38z"
                                    />
                                    <path
                                        fill="#e33629"
                                        d="M44.59 4.21a64 64 0 0 1 42.61.37a61.22 61.22 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21z"
                                    />
                                    <path
                                        fill="#f8bd00"
                                        d="M3.26 51.5a62.93 62.93 0 0 1 5.5-15.9l20.73 16.09a38.31 38.31 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9z"
                                    />
                                    <path
                                        fill="#587dbd"
                                        d="M65.27 52.15h59.52a74.33 74.33 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68z"
                                    />
                                    <path
                                        fill="#319f43"
                                        d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.16 37.16 0 0 0 14.08 6.08a41.29 41.29 0 0 0 15.1 0a36.16 36.16 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.73 63.73 0 0 1 8.75 92.4z"
                                    />
                                </svg>
                            </a>
                            <a>
                                <svg viewBox="0 0 256 256">
                                    <g fill="none">
                                        <rect width="256" height="256" fill="#0A66C2" rx="60" />
                                        <path
                                            fill="#fff"
                                            d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
                                        />
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div class="fields">
                        <div class="uname">
                            <input
                                class="uname"
                                type="text"
                                maxlength="22"
                                minlength="4"
                                required
                                placeholder=""
                            ></input>
                            <label for="uname">Enter username</label>
                        </div>

                        <div class="pass">
                            <input
                                class="password"
                                type="password"
                                maxlength="16"
                                minlength="8"
                                required
                                placeholder=""
                            ></input>
                            <label for="password">Enter password</label>
                        </div>
                    </div>
                    <button class="forgotPassButton" target="_blank">
                        Forgot Password
                    </button>
                    <button className="signInButton">Sign in</button>
                </form>

                {currentMode === "createAccount" && (
                    <form class="forgotPass">
                        <button class="cancelFP">
                            <svg viewBox="0 0 48 48">
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
                        <h1>
                            Forgot <span>Password</span>{" "}
                        </h1>
                        <p>
                            Enter recovery <span>email</span>
                        </p>
                        <section class="fields">
                            <div class="email">
                                <input
                                    class="email"
                                    type="email"
                                    required
                                    placeholder="&nbsp"
                                ></input>
                                <label for="email">Enter email</label>
                            </div>
                            <button>Send Code</button>
                        </section>
                    </form>
                )}

                <form class="registerUi">
                    {currentMode === "createAccount" && (
                        <button class="cancel">
                            <svg viewBox="0 0 48 48">
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
                    )}
                    <h1>
                        Create <span>account</span>
                    </h1>
                    <p>
                        Don't have an account?
                        Create one now, and unlock themes!
                    </p>
                    {currentMode === "createAccount" && (
                        <div class="fields">
                            <div class="uname">
                                <input
                                    class="uname"
                                    type="text"
                                    maxlength="22"
                                    minlength="4"
                                    required
                                    placeholder=""
                                ></input>
                                <label for="uname">Enter username</label>
                            </div>
                            <div class="email">
                                <input
                                    class="email"
                                    type="email"
                                    required
                                    placeholder=""
                                ></input>
                                <label for="email">Enter email</label>
                            </div>
                            <div class="pass">
                                <input
                                    class="password"
                                    type="password"
                                    maxlength="16"
                                    minlength="8"
                                    required
                                    placeholder=""
                                ></input>
                                <label for="password">Enter password</label>
                            </div>
                            <div class="checkBoxes">
                                <input type="checkbox" name="" id="agree" required></input>
                                <p for="agree" id="agreelbl">
                                    I accept the <span>Terms of Use</span> &{" "}
                                    <span>Privacy Policy</span>.
                                </p>
                            </div>
                        </div>
                    )}
                    <button class="registerButton">Sign Up</button>
                </form>
            </dialog>
        </CSSTransition>
    )
}

export default AccountDropDown
