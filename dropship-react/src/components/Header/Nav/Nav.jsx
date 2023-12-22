import React, { useEffect, useRef, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { setShowAccDropDown } from "../../../store/slices/dropdowns/acDropDownSlice"
import { toggleCatDropDown, turnOffCatDP } from "../../../store/slices/dropdowns/catDropDownSlice"

import { setThemeMode } from "../../../store/slices/theme/themeSlice"
import { setIsSettingsOn } from "../../../store/slices/nav/navSettingsSlice"
import { setShouldFocus } from "../../../store/slices/search/search"

import {
    CatDPMobile,
    SubCatDP,
    ViewAllSub,
} from "../CatDropDown/CatDP"

import { CSSTransition } from "react-transition-group"
import { useLogout } from "../../../helpers/UserHelper/UserHelper"
import { getUser } from "../../../helpers/API/user-api"
import { useQuery } from "@tanstack/react-query"
import ImageLoader from "../../ImageLoader/ImageLoader"
import { getCategories } from "../../../helpers/API/category-api"

export default function Nav() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logout = useLogout()

    const tokens = useSelector(state => state.role.authTokens)
    const userid = useSelector(state => state.role.userid)

    const { data: userData } = useQuery({
        queryKey: ['userQuery', userid],
        queryFn: () => getUser(userid, tokens),
        enabled: !!(tokens?.accessToken && tokens?.refreshToken && userid?.length > 0)
    })

    const {
        data: allCatData,
    } = useQuery({
        queryKey: ["allCategories"],
        queryFn: () => getCategories(),
    })

    const [currentCategory, setCurrentCategory] = useState(null)

    useEffect(() => {
        if (allCatData && currentCategory === null) {
            setCurrentCategory(allCatData[0])
        }
    }, [allCatData, currentCategory])

    const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
    const showDropDown = useSelector((state) => state.acDropDown.showAccDropDown)
    const themeMode = useSelector((state) => state.theme.themeMode)
    const isMobile = useSelector((state) => state.mobile.isMobile)
    const isSettingsOn = useSelector((state) => state.navSettings.isSettingsOn)
    const showCatDropDown = useSelector((state) => state.catDropDown.showDropDown)

    const role = useSelector((state) => state.role.role)

    const csstransitionRef = useRef()
    const mobilecatref = useRef()
    const activeLink = window.location.pathname

    const onLoginBtnClick = () => {
        dispatch(setShowAccDropDown(true))
    }

    const closeSettings = () => {
        setTimeout(() => {
            dispatch(setIsSettingsOn(false))
        }, 100)
    }

    const onAccountIconClick = () => {
        if (isMobile && showCatDropDown) {
            dispatch(toggleCatDropDown())
        }
        dispatch(setIsSettingsOn(!isSettingsOn))
    }

    const handleDarkClick = () => {
        dispatch(setThemeMode("dark"))
    }

    const handleLightClick = () => {
        dispatch(setThemeMode("light"))
    }

    const handleSystemClick = () => {
        dispatch(setThemeMode("system"))
    }

    const handleCategoriesClick = () => {
        if (isMobile && isSettingsOn) {
            dispatch(setIsSettingsOn(false))
        }
        dispatch(toggleCatDropDown())
    }

    const handleLogOutClick = () => {
        logout()
        if (isSettingsOn) {
            dispatch(setIsSettingsOn(false))
        }
    }

    const searchButtonClick = () => {
        dispatch(setShouldFocus(true))
    }

    const handleCatClick = (e) => {
        setCurrentCategory(allCatData.find(cat => cat.id === e))
    }

    const handleSubCatClick = (e) => {
        dispatch(turnOffCatDP())
        setTimeout(() => {
            navigate(`/subcategory/${e}`)
        }, 500)
    }

    const handleViewAllClick = (e) => {
        dispatch(turnOffCatDP())
        setTimeout(() => {
            navigate(`/category/${e}`)
        }, 500)
    }

    return (
        <>
            <nav className={`mainNav ${isMobile ? "mobileNav" : "normalNav"} ${(role !== 'User' && isLoggedIn) && !isMobile && 'dashboardNav'}`}>
                {role === "User" ? (
                    <>
                        <ul
                            className={
                                isLoggedIn ? "navigationLinks loggedIn" : "navigationLinks"
                            }
                        >
                            {isMobile && (
                                <li>
                                    <NavLink
                                        className="mobileLogo"
                                        to="/"
                                        exact="true"
                                        disabled={activeLink === "/"}
                                        onClick={closeSettings}
                                    >
                                        <svg viewBox="0 0 220 220">
                                            <g clipPath="url(#clip0_201_15)">
                                                <path
                                                    d="M97.4204 114.878C100.124 116.886 102.932 118.895 105.636 120.918C113.448 126.292 120.941 132.116 128.077 138.361C119.257 148.932 111.465 157.993 98.6436 159.79C90.5492 160.953 77.7581 157.359 75.659 142.725C74.1489 132.124 82.7719 124.12 97.4204 114.878ZM220 110C220 131.754 213.55 153.02 201.465 171.108C189.38 189.196 172.203 203.295 152.106 211.622C132.008 219.949 109.893 222.13 88.5568 217.89C67.2201 213.649 47.6199 203.177 32.2343 187.798C16.8487 172.418 6.36869 152.823 2.1192 131.488C-2.13029 110.153 0.0416052 88.0369 8.3603 67.9362C16.679 47.8355 30.7709 30.6528 48.8544 18.5604C66.9378 6.46797 88.2007 0.00896897 109.955 9.33052e-06C124.404 -0.00594175 138.713 2.8349 152.064 8.36025C165.415 13.8856 177.547 21.9872 187.766 32.2022C197.985 42.4173 206.092 54.5456 211.622 67.8944C217.153 81.2431 220 95.5508 220 110ZM126.959 67.6249L125.781 84.8558L176.115 60.8745L128.499 30.1579L128.303 50.1222C124.996 50.4393 120.314 49.201 116.901 48.2194C110.367 46.0555 103.418 45.4403 96.6049 46.4223C79.7364 48.8385 63.9704 60.3611 66.4017 77.743C67.5344 85.6864 71.944 93.0862 80.5821 101.483C62.9133 112.764 47.6154 126.279 50.6508 147.407C54.7282 175.903 82.0621 185.538 99.2628 183.077C119.605 180.162 130.855 167.054 141.547 154.142C144.515 158.781 146.49 163.985 147.346 169.425L147.663 171.554L171.735 168.096L171.418 165.982C169.908 155.788 165.453 146.349 157.661 137.183C155.487 134.587 153.184 132.102 150.759 129.738C148.098 127.129 145.301 124.664 142.378 122.353C135.492 116.72 128.167 111.616 121.054 106.663C104.986 95.4572 91.1079 85.777 89.5827 75.1606C88.6615 68.7273 93.9017 64.9972 99.1571 64.2422C104.412 63.4871 109.139 64.6348 114.259 65.7523C118.411 66.8374 122.67 67.4654 126.959 67.6249Z"
                                                    fill="url(#headerLogoMobile)"
                                                    strokeWidth=".3rem"
                                                />
                                            </g>
                                            <defs>
                                                <linearGradient
                                                    id="headerLogoMobile"
                                                    x1="54.9849"
                                                    y1="14.7241"
                                                    x2="165"
                                                    y2="205.276"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop offset="0.27" stopColor="#FF9F00" />
                                                    <stop offset="1" stopColor="#FF7300" />
                                                </linearGradient>
                                                <clipPath id="clip0_201_15">
                                                    <rect width="512" height="512" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </NavLink>
                                </li>
                            )}
                            {isMobile && (
                                <li>
                                    <button onClick={searchButtonClick}>
                                        <svg viewBox="0 0 32 32">
                                            <path
                                                fill="currentColor"
                                                d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9Z"
                                            />
                                        </svg>
                                    </button>
                                </li>
                            )}
                            <li>
                                {isLoggedIn ? (
                                    <button
                                        className={`logInIcon ${isSettingsOn ? "active" : ""}`}
                                        onClick={onAccountIconClick}
                                    >
                                        <ImageLoader
                                            url={userData?.image}
                                            alt={userData?.name}
                                            backupUrl="/imgs/404/user404.png"
                                            backupAlt="User"
                                        ></ImageLoader>
                                    </button>
                                ) : (
                                    <button
                                        className={`logInButton ${showDropDown ? "active" : ""}`}
                                        onClick={onLoginBtnClick}
                                        disabled={showDropDown}
                                    >
                                        {!isMobile && <p>Log In</p>}
                                        <svg viewBox="0 0 32 32">
                                            <path
                                                fill="currentColor"
                                                d="M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5Z"
                                            />
                                            <path
                                                fill="currentColor"
                                                d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2Zm7.992 22.926A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0Z"
                                            />
                                        </svg>
                                    </button>
                                )}
                            </li>
                            {isMobile && (
                                <li>
                                    <button
                                        className="categoriesButton"
                                        onClick={handleCategoriesClick}
                                    >
                                        <svg viewBox="0 0 32 32">
                                            <path
                                                fill="currentColor"
                                                d="M12 4H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 8H6V6h6zm14-8h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 8h-6V6h6zm-14 6H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 8H6v-6h6zm14-8h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 8h-6v-6h6z"
                                            />
                                        </svg>
                                    </button>
                                </li>
                            )}
                            <li>
                                <NavLink
                                    to="/cart"
                                    disabled={activeLink === "/cart"}
                                    onClick={closeSettings}
                                    className='cartLink'
                                >
                                    {(!isMobile && isLoggedIn && userData?.username) && <p className="cartP">{userData.username}</p>}
                                    <svg viewBox="0 0 32 32">
                                        <circle cx="10" cy="28" r="2" fill="currentColor" />
                                        <circle cx="24" cy="28" r="2" fill="currentColor" />
                                        <path
                                            fill="currentColor"
                                            d="M28 7H5.82L5 2.8A1 1 0 0 0 4 2H0v2h3.18L7 23.2a1 1 0 0 0 1 .8h18v-2H8.82L8 18h18a1 1 0 0 0 1-.78l2-9A1 1 0 0 0 28 7Zm-2.8 9H7.62l-1.4-7h20.53Z"
                                        />
                                    </svg>
                                </NavLink>
                            </li>
                        </ul>

                        <CSSTransition
                            in={showCatDropDown && isMobile}
                            timeout={200}
                            classNames="categories-dp-mobile"
                            unmountOnExit
                            nodeRef={mobilecatref}
                        >
                            <div className="categories-dp-mobile" ref={mobilecatref}>
                                <div className="categories-header">
                                    <h2>Categories</h2>
                                    <button onClick={handleCategoriesClick}>
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
                                </div>
                                <div className="divider"></div>
                                <ul className="catsList">
                                    {allCatData?.map((e) => (
                                        <CatDPMobile key={e.id} category={e} currentCategory={currentCategory} handleCatClick={handleCatClick} />
                                    ))}
                                </ul>
                                <div className="divider"></div>
                                <div className="subCatsList">
                                    <ul>
                                        {currentCategory?.subcategory?.slice(0, 5).map((e) => (
                                            <SubCatDP key={e.id} subCategory={e} handleSubCatClick={handleSubCatClick} />
                                        ))}
                                    </ul>
                                    <ViewAllSub category={currentCategory} handleViewAllClick={handleViewAllClick}></ViewAllSub>
                                </div>
                            </div>
                        </CSSTransition>
                    </>
                ) : (
                    <ul
                        className={
                            isLoggedIn ? "navigationLinks loggedIn" : "navigationLinks"
                        }
                    >
                        <li>
                            <h3>{userData?.username}</h3>
                        </li>
                        <li>

                            <button
                                className={`logInIcon ${isSettingsOn ? "active" : ""}`}
                                onClick={onAccountIconClick}
                            >
                                <ImageLoader
                                    url={userData?.image}
                                    alt={userData?.name}
                                    backupUrl="/imgs/404/user404.png"
                                    backupAlt="User"
                                ></ImageLoader>
                            </button>
                        </li>
                    </ul>
                )}

                {isLoggedIn && (
                    <CSSTransition
                        in={isSettingsOn}
                        timeout={500}
                        classNames="settingsContainer"
                        unmountOnExit
                        nodeRef={csstransitionRef}
                    >
                        <div
                            className={`settingsContainer ${isMobile ? "mobileSettings" : "normalSettings"
                                }`}
                            ref={csstransitionRef}
                        >
                            <ul className="accountSettings">
                                <li>
                                    <h3>
                                        Account
                                        <button onClick={handleLogOutClick}>
                                            <span>Logout</span>
                                            <svg viewBox="0 0 32 32">
                                                <path
                                                    fill="currentColor"
                                                    d="M6 30h12a2.002 2.002 0 0 0 2-2v-3h-2v3H6V4h12v3h2V4a2.002 2.002 0 0 0-2-2H6a2.002 2.002 0 0 0-2 2v24a2.002 2.002 0 0 0 2 2Z"
                                                />
                                                <path
                                                    fill="currentColor"
                                                    d="M20.586 20.586L24.172 17H10v-2h14.172l-3.586-3.586L22 10l6 6l-6 6l-1.414-1.414z"
                                                />
                                            </svg>
                                        </button>
                                    </h3>
                                </li>
                                <li>
                                    <NavLink
                                        to="/user"
                                        disabled={activeLink === "/user"}
                                        tabIndex={0}
                                        onClick={closeSettings}
                                    >
                                        <svg height="32" viewBox="0 0 32 32">
                                            <path
                                                fill="currentColor"
                                                d="M22 11h4a1 1 0 0 1 1 1v2h-6v-2a1 1 0 0 1 1-1Z"
                                            />
                                            <circle cx="24" cy="8" r="2" fill="currentColor" />
                                            <path
                                                fill="currentColor"
                                                d="M30 18H18a2.002 2.002 0 0 1-2-2V4a2.002 2.002 0 0 1 2-2h12a2.002 2.002 0 0 1 2 2v12a2.003 2.003 0 0 1-2 2zM18 4v12h12.001L30 4zm-3 26h-2v-4a2.946 2.946 0 0 0-3-3H6a2.946 2.946 0 0 0-3 3v4H1v-4a4.951 4.951 0 0 1 5-5h4a4.951 4.951 0 0 1 5 5zM8 11a3 3 0 0 1 0 6a3 3 0 0 1 0-6m0-2a5 5 0 0 0 0 10A5 5 0 0 0 8 9z"
                                            />
                                        </svg>
                                        <p>Account Info</p>
                                    </NavLink>
                                </li>
                                {!isMobile && <li className="divider"></li>}
                                <li>
                                    <NavLink
                                        to="/settings"
                                        disabled={activeLink === "/settings"}
                                        onClick={closeSettings}
                                    >
                                        <svg viewBox="0 0 32 32">
                                            <path
                                                fill="currentColor"
                                                d="M30 10V8h-2.101a4.968 4.968 0 0 0-.732-1.753l1.49-1.49l-1.414-1.414l-1.49 1.49A4.968 4.968 0 0 0 24 4.101V2h-2v2.101a4.968 4.968 0 0 0-1.753.732l-1.49-1.49l-1.414 1.414l1.49 1.49A4.968 4.968 0 0 0 18.101 8H16v2h2.101a4.968 4.968 0 0 0 .732 1.753l-1.49 1.49l1.414 1.414l1.49-1.49a4.968 4.968 0 0 0 1.753.732V16h2v-2.101a4.968 4.968 0 0 0 1.753-.732l1.49 1.49l1.414-1.414l-1.49-1.49A4.968 4.968 0 0 0 27.899 10zm-7 2a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3zm-7 18h-2v-5a3.003 3.003 0 0 0-3-3H7a3.003 3.003 0 0 0-3 3v5H2v-5a5.006 5.006 0 0 1 5-5h4a5.006 5.006 0 0 1 5 5zM9 10a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0-2a5 5 0 1 0 5 5a5 5 0 0 0-5-5z"
                                            />
                                        </svg>
                                        <p>Account Settings</p>
                                    </NavLink>
                                </li>
                            </ul>
                            <ul className="themeSettings">
                                <li>
                                    <h3>Theme</h3>
                                </li>
                                <li>
                                    <button
                                        disabled={themeMode === "system"}
                                        className={`${themeMode === "system" ? "active" : ""}`}
                                        onClick={handleSystemClick}
                                    >
                                        <svg viewBox="0 0 32 32" fill="currentColor">
                                            <path d="M28 4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM18 28h-4v-4h4Zm10-6H4V6h24Z" />
                                        </svg>
                                        <p>System Default</p>
                                    </button>
                                </li>
                                {!isMobile && <li className="divider"></li>}
                                <li>
                                    <button
                                        disabled={themeMode === "dark"}
                                        className={`${themeMode === "dark" ? "active" : ""}`}
                                        onClick={handleDarkClick}
                                    >
                                        <svg viewBox="0 0 32 32" fill="currentColor">
                                            <path d="M30 19a4.974 4.974 0 0 0-3.206-4.658A6.971 6.971 0 0 0 13.758 12.9a13.142 13.142 0 0 1 .131-8.52A1.015 1.015 0 0 0 12.98 3a.983.983 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.041 13.041 0 0 0 10.29-5.038A4.99 4.99 0 0 0 30 19Zm-15.297 7.998a11.095 11.095 0 0 1-3.2-21.584a15.182 15.182 0 0 0 .844 9.367A4.988 4.988 0 0 0 15 24h7.677a11.1 11.1 0 0 1-7.556 2.998c-.138 0-.278.004-.418 0ZM25 22H15a2.994 2.994 0 0 1-.696-5.908l.658-.157l.099-.67a4.992 4.992 0 0 1 9.878 0l.099.67l.658.157A2.994 2.994 0 0 1 25 22Z" />
                                        </svg>
                                        <p>Dark Mode</p>
                                    </button>
                                </li>
                                {!isMobile && <li className="divider"></li>}
                                <li>
                                    <button
                                        disabled={themeMode === "light"}
                                        className={`${themeMode === "light" ? "active" : ""}`}
                                        onClick={handleLightClick}
                                    >
                                        <svg viewBox="0 0 32 32">
                                            <path
                                                fill="currentColor"
                                                d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"
                                            />
                                        </svg>
                                        <p>Light Mode</p>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </CSSTransition>
                )}
            </nav>
        </>
    )
}
