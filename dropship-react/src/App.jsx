import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Layout";

import Home from "./components/Home/Home";
import ProductDetails from "./components/Product/ProductDetails/ProductDetails";
import CategoriesList from "./components/Categories/CategoriesList/CategoriesList";
import CategoriesDetails from "./components/Categories/CategoriesDetails/CategoriesDetails";
import User from "./components/User/User";
import Cart from "./components/Cart/Cart";
import "./styles.scss";import './styles.scss'

import NotFound from "./components/NotFound/NotFound";import UserSettings from './components/UserSettings/UserSettings'

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/productDetails/:productId"
              element={<ProductDetails />}
            />
            <Route path="/categories" element={<CategoriesList />} />
            <Route path="/categories/:id" element={<CategoriesDetails />} />
            <Route path="/user" element={<User />} />
            <Route path="/user/settings" element={<UserSettings />} />
            <Route path="/cart" element={<Cart />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
