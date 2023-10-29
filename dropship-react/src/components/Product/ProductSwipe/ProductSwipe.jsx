import React from "react";
import Carousel from "react-elastic-carousel";
import ProductCard from "../ProductCard/ProductCard";

function ProductSwipe({ products }) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <>
      <div className="productSwipe">
        <Carousel breakPoints={breakPoints}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default ProductSwipe;
