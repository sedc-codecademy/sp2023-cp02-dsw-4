import React, { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux"

import "./styles.scss" // Import Master css file

// HELPERS
import { useMobileWidthEffects } from "./helpers/MobileHelper/MobileHelper"
import UseThemeEffects from "./helpers/ThemeHelper/ThemeHelper"
import UserHelper from "./helpers/UserHelper/UserHelper"
import { ACUser } from "./components/User/User"

// COMPONENTS
const Header = lazy(() => import("./components/Header/Header"))
const Footer = lazy(() => import("./components/Footer/Footer"))
const DDBkgf = lazy(() => import("./components/DDBkg/DDBkgf"))
const ScrollToTop = lazy(() => import("./helpers/scrollToTop"))
const UserSettings = lazy(() => import("./components/UserSettings/UserSettings"))
const AccountDropDown = lazy(() => import("./components/AccountDropDown/AccountDropDown"))
const Home = lazy(() => import("./components/Home/Home"))
const ProductDetails = lazy(() => import("./components/Product/ProductDetails/ProductDetails"))
const CategoriesList = lazy(() => import("./components/Categories/CategoriesList/CategoriesList"))
const Manufacturer = lazy(() => import("./components/Manufacturer/Manufacturer"))
const SubCategory = lazy(() => import("./components/SubCategory/SubCategory"))
const User = lazy(() => import("./components/User/User"))
const Cart = lazy(() => import("./components/Cart/Cart"))
const Privacy = lazy(() => import("./components/Rights/Privacy"))
const Disclaimer = lazy(() => import("./components/Rights/Disclaimer"))
const Location = lazy(() => import("./components/Rights/Location"))
const NotFound = lazy(() => import("./components/NotFound/NotFound"))
const CourierDashboard = lazy(() => import("./components/CourierDashboard/CourierDashboard"))
const DashboardHeader = lazy(() => import("./components/Header/DashboardHeader"))
const AdminNav = lazy(() => import("./components/AdminDashboard/AdminNav"))
const AdminSub = lazy(() => import("./components/AdminDashboard/AdminSub"))
const AdminProducts = lazy(() => import("./components/AdminDashboard/AdminProducts"))
const AdminOrders = lazy(() => import("./components/AdminDashboard/AdminOrders"))
const AdminUsers = lazy(() => import("./components/AdminDashboard/AdminUsers"))
const AdminCategories = lazy(() => import("./components/AdminDashboard/AdminCategories"))
const PageLoader = lazy(() => import("./components/PageLoader/PageLoader"))
const Search = lazy(() => import("./components/Search/Search"))
const Notification = lazy(() => import("./components/Notification/Notification"))

function App() {
  UserHelper()
  const role = useSelector((state) => state.role.role)
  const showDropDown = useSelector((state) => state.acDropDown.showAccDropDown)
  UseThemeEffects()
  useMobileWidthEffects()

  return (
    <>
      {role === "Admin" ? (
        <main className="admin-dashboard">
          <BrowserRouter>
            <Suspense fallback={<></>}>
              <PageLoader></PageLoader>
              {!showDropDown && <Notification></Notification>}
              <DashboardHeader></DashboardHeader>
              <AdminNav></AdminNav>
              <Routes>
                <Route path="/" element={<AdminCategories />} />
                <Route path="/sub" element={<AdminSub />} />
                <Route path="/sub/:id" element={<AdminSub />} />
                <Route path="/products" element={<AdminProducts />} />
                <Route path="/orders" element={<AdminOrders />} />
                <Route path="/users" element={<AdminUsers />} />
                <Route path="/user" element={<ACUser />} />
                <Route path="/settings" element={<UserSettings />} />
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
      ) : role === "Courier" ? (
        <BrowserRouter>
          <Suspense fallback={<></>}>
            <PageLoader></PageLoader>
            {!showDropDown && <Notification></Notification>}
            <DashboardHeader></DashboardHeader>
            <Routes>
              <Route path="/" element={<CourierDashboard />} />
              <Route path="/user" element={<ACUser />} />
              <Route path="/settings" element={<UserSettings />} />
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
            {!showDropDown && <Notification></Notification>}
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
  )
}

export default App