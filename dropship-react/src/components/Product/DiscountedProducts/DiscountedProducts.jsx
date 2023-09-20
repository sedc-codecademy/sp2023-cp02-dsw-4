import React from "react";
import { useSelector } from "react-redux";

import { selectProducts } from "../../../store/selectors/productSelector";
import ProductCard from "../ProductCard/ProductCard";
function DiscountedProducts() {
  const allProducts = useSelector(selectProducts);

  const discountedProducts = allProducts.filter((product) => product.sale);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>DiscountedProducts</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {discountedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default DiscountedProducts;
