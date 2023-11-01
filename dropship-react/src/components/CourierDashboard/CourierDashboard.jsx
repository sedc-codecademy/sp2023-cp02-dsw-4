import React from "react"
import { useSelector } from "react-redux"
import { selectProducts } from "../../store/selectors/productSelector"
import ProductCard from "../Product/ProductCard/ProductCard"

function CourierDashboard() {
  const allProducts = useSelector(selectProducts)

  return (
    <>
      <div className="productSwipe">
        <ul>
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
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
  )
}

export default CourierDashboard
