import React from "react"
import { useSelector } from "react-redux"

import { selectProducts } from "../../../store/selectors/productSelector"
import ProductCard from "../ProductCard/ProductCard"

const getRandomProducts = (products, count) => {
  const copiedProducts = [...products]
  const shuffled = copiedProducts.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

function BestSelers() {
  const allProducts = useSelector(selectProducts)

  const bestSelers = allProducts.filter((product) => product.rating.rate >= 4)

  const randomProducts = getRandomProducts(bestSelers, 10)

  return (
    <>
      <div className="bestsellers-container">
        <h2 className="bestsellers-text upDown">
          <span className="arrow-left ">&#8630;</span>Best Sellers
          <span className="arrow-right ">&#8631;</span>
        </h2>
      </div>

      <div className="bestsellers-div">
        <ul>
          {randomProducts.slice(0,6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default BestSelers
