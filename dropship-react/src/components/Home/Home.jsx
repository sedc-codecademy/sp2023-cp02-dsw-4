import React from "react";

import ProductList from "../Product/ProductList/ProductList";
import CategoryScrollHome from "../CategoriesScrollHome/CategoryScrollHome";
import ParentPictureScroll from "../ParentPictureScroll/ParentPictureScroll";
// import Stars from '../Stars/Stars'

function Home() {
  return (
    <>
      <ParentPictureScroll />
      <CategoryScrollHome />
      {/* <Stars initialRating={2} id={"jk312bjk3"}></Stars>
            <Stars initialRating={3.5} id={"jk312bjjfgk3"}></Stars> */}
      <ProductList></ProductList>
    </>
  );
}

export default Home;
