import React from "react"
import { useSelector } from "react-redux"
import { selectProducts } from "../../../store/selectors/productSelector"
import ProductCard from "../ProductCard/ProductCard"

const getRandomProducts = (products, count) => {
  const copiedProducts = [...products]
  const shuffled = copiedProducts.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

function DiscountedProducts() {
  const allProducts = useSelector(selectProducts)

  const discountedProducts = allProducts.filter((product) => product.sale)

  const randomDiscountedProducts = getRandomProducts(discountedProducts, 10)

  return (
    <>
      <div className="discounted-container">
        <h2 className="discounted-text upDown">
          <span className="arrow-left">&#8630;</span>Discounted Products
          <span className="arrow-right">&#8631;</span>
        </h2>
      </div>
      <div className="discounted-div">
        {randomDiscountedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default DiscountedProducts;
