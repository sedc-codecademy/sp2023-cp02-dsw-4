import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Home from "./components/Home/Home";
import ProductDetails from "./components/Product/ProductDetails/ProductDetails";
import CategoriesList from "./components/Categories/CategoriesList/CategoriesList";
import CategoriesDetails from "./components/Categories/CategoriesDetails/CategoriesDetails";
import User from "./components/User/User";
import Cart from "./components/Cart/Cart";
import "./styles.scss"; import './styles.scss'
import './styles.scss'

import NotFound from "./components/NotFound/NotFound"; import UserSettings from './components/UserSettings/UserSettings'
import AccountDropDown from './components/AccountDropDown/AccountDropDown'

import { applyDarkTheme, applyLightTheme, applySystemTheme } from "./shared/themeFunctions"
import { applyNoScroll, applyScroll } from './shared/scrollFunctions'
import { setIsMobile } from "./store/slices/mobileSlice"
import { setIsSettingsOn } from "./store/slices/navSettingsSlice"
import { setIsDDOn, setIsScrollOn } from "./store/slices/ddBkgSlice"
import { setMobileFiltersOn } from './store/slices/filters/filtersSlice'

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DDBkgf from "./components/DDBkg/DDBkgf";

function App() {
  const dispatch = useDispatch()
  const showAccDropDown = false

  const themeMode = useSelector((state) => state.theme.themeMode)
  const isMobile = useSelector((state) => state.mobile.isMobile)
  const isSettingsOn = useSelector((state) => state.navSettings.isSettingsOn)
  const showCatDropDown = useSelector((state) => state.catDropDown.showDropDown)
  const isDDOn = useSelector((state) => state.ddBkg.isDDOn)
  const allowScroll = useSelector((state) => state.ddBkg.isScrollOn)
  const mobileFiltersOn = useSelector((state) => state.filters.mobileFiltersOn)
  const [mediaQueryList, setMediaQueryList] = useState(window.matchMedia("(prefers-color-scheme: dark)"))

  useEffect(() => {
    if (isMobile) {
      if (isSettingsOn || showCatDropDown) {
        dispatch(setIsDDOn(true))
        dispatch(setIsScrollOn(true))
      } else if(mobileFiltersOn){
        dispatch(setIsScrollOn(true))
      }
      else {
        dispatch(setIsDDOn(false))
        dispatch(setIsScrollOn(false))
      }
    }
  }, [dispatch, isMobile, isSettingsOn, showCatDropDown, mobileFiltersOn])

  useEffect(() => {
      if (allowScroll) {
        applyNoScroll()
        console.log("dime")
      } else{
        applyScroll()
      }
  }, [allowScroll])

  useEffect(() => {
    dispatch(setIsMobile(window.innerWidth <= 800))
  }, [dispatch])

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

    window.addEventListener('resize', updateIsMobile);

    return () => {
      window.removeEventListener('resize', updateIsMobile);
    }
  }, [dispatch, isMobile, isSettingsOn, isDDOn, allowScroll])

  useEffect(() => {
    if (themeMode === "system") {
      applySystemTheme(themeMode)
    } else if (themeMode === "dark") {
      applyDarkTheme()
    } else if (themeMode === "light") {
      applyLightTheme()
    }
  }, [themeMode, mediaQueryList])

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
        {showAccDropDown && <AccountDropDown />}
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

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
