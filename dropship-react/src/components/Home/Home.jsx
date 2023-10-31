import React from "react";
import { useSelector } from "react-redux"
import { selectProducts } from "../../store/selectors/productSelector"

import CategoryScrollHome from "../CategoriesScrollHome/CategoryScrollHome"
import ParentPictureScroll from "../ParentPictureScroll/ParentPictureScroll"
import ProductList from "../Product/ScrollableProductsList/ScrollableProductList"
function Home() {
  const products = useSelector(selectProducts)
  const isMobile = useSelector((state) => state.mobile.isMobile)
  return (
    <main className="homeMain">
      <div className="homeHeader">
        {!isMobile && <ParentPictureScroll />}
        <CategoryScrollHome />
      </div>
      <ProductList products={products.slice(0, 10)} origin="popular"></ProductList>
      <ProductList products={products.slice(0, 10)} origin="discount"></ProductList>
    </main>
  )
}

export default Home;
