import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Layout";

import Home from "./components/Home/Home";
import ProductDetails from "./components/Product/ProductDetails/ProductDetails";
import CategoriesList from "./components/Categories/CategoriesList/CategoriesList";
import CategoriesDetails from "./components/Categories/CategoriesDetails/CategoriesDetails";
import User from "./components/User/User";
import Cart from "./components/Cart/Cart";
import "./styles.scss";
import "./styles.scss";
import "./styles.scss";

import NotFound from "./components/NotFound/NotFound";
import UserSettings from "./components/UserSettings/UserSettings";
import AccountDropDown from "./components/AccountDropDown/AccountDropDown";

import {
  applyDarkTheme,
  applyLightTheme,
  applySystemTheme,
} from "./shared/themeFunctions";
import { setIsMobile } from "./store/slices/mobileSlice";
import { setIsSettingsOn } from "./store/slices/navSettingsSlice";
import CourierDashboard from "./components/CourierDashboard/CourierDashboard";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";

function App() {
  const dispatch = useDispatch();
  const showAccDropDown = false;

  const themeMode = useSelector((state) => state.theme.themeMode);
  const isMobile = useSelector((state) => state.mobile.isMobile);
  const isSettingsOn = useSelector((state) => state.navSettings.isSettingsOn);
  const [mediaQueryList, setMediaQueryList] = useState(
    window.matchMedia("(prefers-color-scheme: dark)")
  );

  useEffect(() => {
    dispatch(setIsMobile(window.innerWidth <= 800));
  }, [dispatch]);

  useEffect(() => {
    const updateIsMobile = () => {
      dispatch(setIsMobile(window.innerWidth <= 800));
      if (window.innerWidth <= 800 && !isMobile) {
        closeSettings();
      } else if (window.innerWidth >= 800 && isMobile) {
        closeSettings();
      }
    };

    const closeSettings = () => {
      if (isSettingsOn) dispatch(setIsSettingsOn(false));
    };

    window.addEventListener("resize", updateIsMobile);

    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, [dispatch, isMobile, isSettingsOn]);

  useEffect(() => {
    if (themeMode === "system") {
      applySystemTheme(themeMode);
    } else if (themeMode === "dark") {
      applyDarkTheme();
    } else if (themeMode === "light") {
      applyLightTheme();
    }
  }, [themeMode, mediaQueryList]);

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (themeMode === "system") {
        setMediaQueryList(window.matchMedia("(prefers-color-scheme: dark)"));
      }
    });

  return (
    <>
      <BrowserRouter>
        {showAccDropDown && <AccountDropDown />}
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/productDetails/:productId"
              element={<ProductDetails />}
            />
            <Route path="/categories" element={<CategoriesList />} />
            <Route path="/categories/:id" element={<CategoriesDetails />} />
            {/* <Route path="/search" element={<CategoriesList />} /> */}
            <Route path="/search/:id" element={<CategoriesList />} />
            {/* <Route path="/product" element={<CategoriesDetails />} /> */}
            <Route path="/product/:id" element={<CategoriesDetails />} />
            <Route path="/user" element={<User />} />
            <Route path="/user/settings" element={<UserSettings />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/courier" element={<CourierDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
