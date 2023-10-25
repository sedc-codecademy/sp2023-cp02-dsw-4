import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import "./styles.scss" // Import Master css file

import Home from "./components/Home/Home"
import ProductDetails from "./components/Product/ProductDetails/ProductDetails"
import CategoriesList from "./components/Categories/CategoriesList/CategoriesList"
import CategoriesDetails from "./components/Categories/CategoriesDetails/CategoriesDetails"
import User from "./components/User/User"
import Cart from "./components/Cart/Cart"

import NotFound from "./components/NotFound/NotFound"
import UserSettings from './components/UserSettings/UserSettings'
import AccountDropDown from './components/AccountDropDown/AccountDropDown'

import { applyDarkTheme, applyLightTheme, applySystemTheme } from "./shared/themeFunctions"
import { applyNoScroll, applyScroll } from './shared/scrollFunctions'
import { setIsMobile } from "./store/slices/mobile/mobileSlice"
import { setIsSettingsOn } from "./store/slices/nav/navSettingsSlice"
import { setIsDDOn, setIsScrollOn } from "./store/slices/dropdowns/ddBkgSlice"
import { setMobileFiltersOn } from './store/slices/filters/filtersSlice'

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import DDBkgf from "./components/DDBkg/DDBkgf" // Background for popups
import ScrollToTop from "./shared/scrollToTop"

function App() {
  const dispatch = useDispatch()

  const themeMode = useSelector((state) => state.theme.themeMode)
  const isMobile = useSelector((state) => state.mobile.isMobile)
  const isSettingsOn = useSelector((state) => state.navSettings.isSettingsOn)
  const showCatDropDown = useSelector((state) => state.catDropDown.showDropDown)
  const isDDOn = useSelector((state) => state.ddBkg.isDDOn)
  const allowScroll = useSelector((state) => state.ddBkg.isScrollOn)
  const mobileFiltersOn = useSelector((state) => state.filters.mobileFiltersOn)
  const showAccDropDown = useSelector((state) => state.acDropDown.showAccDropDown)
  const [mediaQueryList, setMediaQueryList] = useState(window.matchMedia("(prefers-color-scheme: dark)"))

  useEffect(() => {
    if (isMobile) {
      if (isSettingsOn || showCatDropDown) {
        dispatch(setIsDDOn(true))
        dispatch(setIsScrollOn(true))
      } else if (mobileFiltersOn || showAccDropDown) {
        dispatch(setIsScrollOn(true))
      }
      else {
        dispatch(setIsDDOn(false))
        dispatch(setIsScrollOn(false))
      }
    } else if (!isMobile && showAccDropDown) {
      dispatch(setIsScrollOn(true))
    } else if (!isMobile && !showAccDropDown) {
      dispatch(setIsScrollOn(false))
    }
  }, [dispatch, isMobile, isSettingsOn, showCatDropDown, mobileFiltersOn, showAccDropDown]) // Drop Downs and Pop-Ups checker UseEffect

  useEffect(() => {
    if (allowScroll) {
      applyNoScroll()
    } else {
      applyScroll()
    }
  }, [allowScroll]) // Body Scroll setter UseEffect

  useEffect(() => {
    dispatch(setIsMobile(window.innerWidth <= 800))
  }, [dispatch]) // Mobile Width setter UseEffect

  useEffect(() => {
    const updateIsMobile = () => {
      dispatch(setIsMobile(window.innerWidth <= 800))
      if (window.innerWidth <= 800 && !isMobile) {
        closeSettings()
      } else if (window.innerWidth >= 800 && isMobile) {
        closeSettings()
      }
    }

    const closeSettings = () => {
      if (isSettingsOn) dispatch(setIsSettingsOn(false))
      if (isDDOn) dispatch(setIsDDOn(false))
      if (allowScroll) dispatch(setIsScrollOn(false))
      if (mobileFiltersOn) dispatch(setMobileFiltersOn(false))
    }

    window.addEventListener('resize', updateIsMobile)

    return () => {
      window.removeEventListener('resize', updateIsMobile)
    }
  }, [dispatch, isMobile, isSettingsOn, isDDOn, allowScroll, mobileFiltersOn]) // Mobile Width checker UseEffect

  useEffect(() => {
    if (themeMode === "system") {
      applySystemTheme(themeMode)
    } else if (themeMode === "dark") {
      applyDarkTheme()
    } else if (themeMode === "light") {
      applyLightTheme()
    }
  }, [themeMode, mediaQueryList]) // Theme checker UseEffect

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (themeMode === "system") {
        setMediaQueryList(window.matchMedia("(prefers-color-scheme: dark)"))
      }
    })

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <AccountDropDown />
        <Header></Header>
        <DDBkgf></DDBkgf>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/categories" element={<CategoriesList />} />
          <Route path="/category/:id" element={<CategoriesList />} />
          <Route path="/subcategories/:id" element={<CategoriesDetails />} />
          {/* <Route path="/search" element={<CategoriesList />} /> */}
          <Route path="/search/:id" element={<CategoriesList />} />
          <Route path="/productDetails/:productId" element={<ProductDetails />} />
          <Route path="/user" element={<User />} />
          <Route path="/settings" element={<UserSettings />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="*" element={<NotFound link={"/"} title={"oh no... disaster!!!"} message={"stop trying to break our website, please ;)"}/>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
