import React from "react";
import { useSelector } from "react-redux"
import { selectProducts } from "../../store/selectors/productSelector"

import CategoryScrollHome from "../CategoriesScrollHome/CategoryScrollHome"
import ParentPictureScroll from "../ParentPictureScroll/ParentPictureScroll"
import ProductList from "../Product/ScrollableProductsList/ScrollableProductList"
import NewArrivals from "../Product/NewArrivals/NewArrivals";
import RandomProductList from "../Product/RandomProductList/RandomProductList"

function Home() {
  const products = useSelector(selectProducts)
  const isMobile = useSelector((state) => state.mobile.isMobile)
  return (
    <main className="homeMain">
      <div className="homeHeader">
        {!isMobile && <ParentPictureScroll />}
        <CategoryScrollHome />
      </div>
      <NewArrivals></NewArrivals>
      <RandomProductList products={products.slice(0, 6)}></RandomProductList>
      <ProductList products={products.slice(0, 10)} origin="popular"></ProductList>
      <RandomProductList products={products.slice(6, 12)}></RandomProductList>
      <ProductList products={products.slice(0, 10)} origin="discount"></ProductList>
    </main>
  )
}

export default Home;
