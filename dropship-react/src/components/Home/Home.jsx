import React from "react";

import ProductList from "../Product/ProductList/ProductList";
import CategoryScrollHome from "../CategoriesScrollHome/CategoryScrollHome";
import ParentPictureScroll from "../ParentPictureScroll/ParentPictureScroll";

function Home() {
  return (
    <>
      <ParentPictureScroll />
      <CategoryScrollHome />
      <ProductList></ProductList>
    </>
  );
}

export default Home;
