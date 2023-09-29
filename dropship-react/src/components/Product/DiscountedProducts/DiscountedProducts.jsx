import "./_main.scss";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../../../store/selectors/productSelector";
import ProductCard from "../ProductCard/ProductCard";

const getRandomProducts = (products, count) => {
  const copiedProducts = [...products];
  const shuffled = copiedProducts.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

function DiscountedProducts() {
  const allProducts = useSelector(selectProducts);

  const discountedProducts = allProducts.filter((product) => product.sale);

  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    const randomProducts = getRandomProducts(discountedProducts, 10);
    setRandomProducts(randomProducts);
  }, []);

  return (
    <>
      <div className="discounted-container">
        <h2 className="discounted-text upDown">
          <span className="arrow-left ">&#8630;</span>Discounted Products
          <span className="arrow-right ">&#8631;</span>
        </h2>
      </div>
      <div className="discounted-div">
        {randomProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default DiscountedProducts;
