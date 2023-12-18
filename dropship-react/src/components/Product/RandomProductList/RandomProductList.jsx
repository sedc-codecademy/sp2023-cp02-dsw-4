import React from "react"
import ProductCard from "../ProductCard/ProductCard"

function RandomProductList({ products }) {
  return (
    <div className="randomProducts">
      <ul>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  )
}

export default RandomProductList
