import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../../store/selectors/productSelector";
import "./_main.scss";
import ProductSwipe from "../Product/ProductSwipe/ProductSwipe";

const getRandomProducts = (products, count) => {
  const copiedProducts = [...products];
  const shuffled = copiedProducts.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

function CourierDashboard() {
  const allProducts = useSelector(selectProducts);
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    const randomProducts = getRandomProducts(allProducts, 10);
    setRandomProducts(randomProducts);
  }, [allProducts]);

  return (
    <>
      <div className="productSwipe">
        <ProductSwipe products={randomProducts} />
      </div>

      <div className="order">
        <div className="firstDiv">
          <div className="order_info">ORDER INFO</div>
          <div>
            <button>SET DELIVERED</button>
            <button>SET ON WAY</button>
          </div>
        </div>
        <div className="secondDiv">
          <div className="map">MAP</div>
          <div className="addressInfo">ADDRESS INFO</div>
        </div>
      </div>
    </>
  );
}

export default CourierDashboard;
