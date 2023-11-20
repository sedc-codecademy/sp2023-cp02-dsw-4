// import React from "react"
// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import { useSelector } from "react-redux"

// import "./styles.scss" // Import Master css file

// // HELPERS
// import { useMobileWidthEffects } from "./helpers/MobileHelper/MobileHelper"
// import UseThemeEffects from "./helpers/ThemeHelper/ThemeHelper"
// import UserHelper from "./helpers/UserHelper/UserHelper"

// // COMPONENTS
// import Header from "./components/Header/Header"
// import Footer from "./components/Footer/Footer"
// import DDBkgf from "./components/DDBkg/DDBkgf" // Background for popups
// import ScrollToTop from "./helpers/scrollToTop"
// import UserSettings from "./components/UserSettings/UserSettings"
// import AccountDropDown from "./components/AccountDropDown/AccountDropDown"
// import Home from "./components/Home/Home"
// import ProductDetails from "./components/Product/ProductDetails/ProductDetails"
// import CategoriesList from "./components/Categories/CategoriesList/CategoriesList"
// import Manufacturer from "./components/Manufacturer/Manufacturer"
// import SubCategory from "./components/SubCategory/SubCategory"
// import User from "./components/User/User"
// import Cart from "./components/Cart/Cart"
// import Privacy from "./components/Rights/Privacy"
// import Disclaimer from "./components/Rights/Disclaimer"
// import Location from "./components/Rights/Location"
// import NotFound from "./components/NotFound/NotFound"

// import CourierDashboard from "./components/CourierDashboard/CourierDashboard"
// import DashboardHeader from "./components/Header/DashboardHeader"
// import AdminNav from "./components/AdminDashboard/AdminNav"
// import AdminSub from "./components/AdminDashboard/AdminSub"
// import AdminProducts from "./components/AdminDashboard/AdminProducts"
// import AdminOrders from "./components/AdminDashboard/AdminOrders"
// import AdminUsers from "./components/AdminDashboard/AdminUsers"
// import AdminCategories from "./components/AdminDashboard/AdminCategories"

// import PageLoader from './components/PageLoader/PageLoader'
// import Search from "./components/Search/Search"

// function App() {
//   UserHelper()
//   const role = useSelector((state) => state.role.role)
//   UseThemeEffects()
//   useMobileWidthEffects()

//   return (
//     <>
//       {role === "admin" ? (
//         <main className="admin-dashboard">
//           <BrowserRouter>
// <PageLoader></PageLoader>
// <DashboardHeader></DashboardHeader>
// <AdminNav></AdminNav>
// <Routes>
//   <Route path="/" element={<AdminCategories />} />
//   <Route path="/sub" element={<AdminSub />} />
//   <Route path="/products" element={<AdminProducts />} />
//   <Route path="/orders" element={<AdminOrders />} />
//   <Route path="/users" element={<AdminUsers />} />
//   <Route
//     path="*"
//     element={
//       <NotFound
//         link={"/"}
//         title={"oh no... disaster!!!"}
//         message={"stop trying to break our website, please )"}
//       />
//     }
//   />
// </Routes>
// <Footer></Footer>
//           </BrowserRouter>
//         </main>
//       ) : role === "courier" ? (
//         <BrowserRouter>
// <PageLoader></PageLoader>
// <DashboardHeader></DashboardHeader>
// <Routes>
//   <Route path="/" element={<CourierDashboard />} />
//   <Route
//     path="*"
//     element={
//       <NotFound
//         link={"/"}
//         title={"oh no... disaster!!!"}
//         message={"stop trying to break our website, please )"}
//       />
//     }
//   />
// </Routes>
// <Footer></Footer>
//         </BrowserRouter>
//       ) : (
//         <BrowserRouter>
// <PageLoader></PageLoader>
// <ScrollToTop />
// <AccountDropDown />
// <Header></Header>
// <DDBkgf></DDBkgf>
// <Routes>
//   <Route path="/" element={<Home />} />
//   <Route path="/category/:catId" element={<CategoriesList />} />
//   <Route path="/subcategory/:subId" element={<SubCategory />} />
//   <Route path="/manufacturer/:manufacturerId" element={<Manufacturer />} />
//   <Route path="/search/:searchid" element={<Search />} />
//   <Route path="/productDetails/:productId" element={<ProductDetails />} />
//   <Route path="/user" element={<User />} />
//   <Route path="/settings" element={<UserSettings />} />
//   <Route path="/cart" element={<Cart />} />
//   <Route path="/privacy" element={<Privacy />} />
//   <Route path="/disclaimer" element={<Disclaimer />} />
//   <Route path="/location" element={<Location />} />
//   <Route
//     path="*"
//     element={
//       <NotFound
//         link={"/"}
//         title={"oh no... disaster!!!"}
//         message={"stop trying to break our website, please )"}
//       />
//     }
//   />
// </Routes>
// <Footer></Footer>
//         </BrowserRouter>
//       )}
//     </>
//   )
// }

// export default App

import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import "./styles.scss"; // Import Master css file

// HELPERS
import { useMobileWidthEffects } from "./helpers/MobileHelper/MobileHelper";
import UseThemeEffects from "./helpers/ThemeHelper/ThemeHelper";
import UserHelper from "./helpers/UserHelper/UserHelper";

// COMPONENTS
const Header = lazy(() => import("./components/Header/Header"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const DDBkgf = lazy(() => import("./components/DDBkg/DDBkgf"));
const ScrollToTop = lazy(() => import("./helpers/scrollToTop"));
const UserSettings = lazy(() => import("./components/UserSettings/UserSettings"));
const AccountDropDown = lazy(() => import("./components/AccountDropDown/AccountDropDown"));
const Home = lazy(() => import("./components/Home/Home"));
const ProductDetails = lazy(() => import("./components/Product/ProductDetails/ProductDetails"));
const CategoriesList = lazy(() => import("./components/Categories/CategoriesList/CategoriesList"));
const Manufacturer = lazy(() => import("./components/Manufacturer/Manufacturer"));
const SubCategory = lazy(() => import("./components/SubCategory/SubCategory"));
const User = lazy(() => import("./components/User/User"));
const Cart = lazy(() => import("./components/Cart/Cart"));
const Privacy = lazy(() => import("./components/Rights/Privacy"));
const Disclaimer = lazy(() => import("./components/Rights/Disclaimer"));
const Location = lazy(() => import("./components/Rights/Location"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));
const CourierDashboard = lazy(() => import("./components/CourierDashboard/CourierDashboard"));
const DashboardHeader = lazy(() => import("./components/Header/DashboardHeader"));
const AdminNav = lazy(() => import("./components/AdminDashboard/AdminNav"));
const AdminSub = lazy(() => import("./components/AdminDashboard/AdminSub"));
const AdminProducts = lazy(() => import("./components/AdminDashboard/AdminProducts"));
const AdminOrders = lazy(() => import("./components/AdminDashboard/AdminOrders"));
const AdminUsers = lazy(() => import("./components/AdminDashboard/AdminUsers"));
const AdminCategories = lazy(() => import("./components/AdminDashboard/AdminCategories"));
const PageLoader = lazy(() => import("./components/PageLoader/PageLoader"));
const Search = lazy(() => import("./components/Search/Search"));

function App() {
  UserHelper();
  const role = useSelector((state) => state.role.role);
  UseThemeEffects();
  useMobileWidthEffects();

  return (
    <>
      {role === "admin" ? (
        <main className="admin-dashboard">
          <BrowserRouter>
            <Suspense fallback={<></>}>
              <PageLoader></PageLoader>
              <DashboardHeader></DashboardHeader>
              <AdminNav></AdminNav>
              <Routes>
                <Route path="/" element={<AdminCategories />} />
                <Route path="/sub" element={<AdminSub />} />
                <Route path="/products" element={<AdminProducts />} />
                <Route path="/orders" element={<AdminOrders />} />
                <Route path="/users" element={<AdminUsers />} />
                <Route
                  path="*"
                  element={
                    <NotFound
                      link={"/"}
                      title={"oh no... disaster!!!"}
                      message={"stop trying to break our website, please )"}
                    />
                  }
                />
              </Routes>
              <Footer></Footer>
            </Suspense>
          </BrowserRouter>
        </main>
      ) : role === "courier" ? (
        <BrowserRouter>
          <Suspense fallback={<></>}>
            <PageLoader></PageLoader>
            <DashboardHeader></DashboardHeader>
            <Routes>
              <Route path="/" element={<CourierDashboard />} />
              <Route
                path="*"
                element={
                  <NotFound
                    link={"/"}
                    title={"oh no... disaster!!!"}
                    message={"stop trying to break our website, please )"}
                  />
                }
              />
            </Routes>
            <Footer></Footer>
          </Suspense>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Suspense fallback={<></>}>
            <PageLoader></PageLoader>
            <ScrollToTop />
            <AccountDropDown />
            <Header></Header>
            <DDBkgf></DDBkgf>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:catId" element={<CategoriesList />} />
              <Route path="/subcategory/:subId" element={<SubCategory />} />
              <Route path="/manufacturer/:manufacturerId" element={<Manufacturer />} />
              <Route path="/search/:searchid" element={<Search />} />
              <Route path="/productDetails/:productId" element={<ProductDetails />} />
              <Route path="/user" element={<User />} />
              <Route path="/settings" element={<UserSettings />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/location" element={<Location />} />
              <Route
                path="*"
                element={
                  <NotFound
                    link={"/"}
                    title={"oh no... disaster!!!"}
                    message={"stop trying to break our website, please )"}
                  />
                }
              />
            </Routes>
            <Footer></Footer>
          </Suspense>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
