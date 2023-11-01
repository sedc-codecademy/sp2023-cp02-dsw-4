import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import "./styles.scss" // Import Master css file

// HELPERS
import { useMobileWidthEffects } from "./helpers/MobileHelper/MobileHelper"
import UseThemeEffects from "./helpers/ThemeHelper/ThemeHelepr"

// COMPONENTS
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import DDBkgf from "./components/DDBkg/DDBkgf" // Background for popups
import ScrollToTop from "./helpers/scrollToTop"
import UserSettings from "./components/UserSettings/UserSettings"
import AccountDropDown from "./components/AccountDropDown/AccountDropDown"
import Home from "./components/Home/Home"
import ProductDetails from "./components/Product/ProductDetails/ProductDetails"
import CategoriesList from "./components/Categories/CategoriesList/CategoriesList"
import CategoriesDetails from "./components/Categories/CategoriesDetails/CategoriesDetails"
import User from "./components/User/User"
import Cart from "./components/Cart/Cart"
import Privacy from "./components/Rights/Privacy"
import Disclaimer from "./components/Rights/Disclaimer"
import Location from "./components/Rights/Location"
import NotFound from "./components/NotFound/NotFound"

import CourierDashboard from "./components/CourierDashboard/CourierDashboard"
import AdminDashboard from "./components/AdminDashboard/AdminDashboard"


function App() {
  UseThemeEffects()
  useMobileWidthEffects()

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
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/location" element={<Location />} />
          <Route path="/courier" element={<CourierDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound link={"/"} title={"oh no... disaster!!!"} message={"stop trying to break our website, please )"} />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
