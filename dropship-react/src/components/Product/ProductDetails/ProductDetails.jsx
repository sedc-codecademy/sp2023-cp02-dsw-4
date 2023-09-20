import React from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  selectProducts,
  countSelector,
} from "../../../store/selectors/productSelector";
import { decrement, increment } from "../../../store/slices/productsSlice";
function ProductDetails() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const products = useSelector(selectProducts);
  const count = useSelector(countSelector);

  const product = products.find((p) => p.id === productId);

  const discountedPrice = product.sale
    ? (product.price - product.price * (product.sale / 100)).toFixed(2)
    : null;
  const discount = product.price - discountedPrice;

  const totalPrice = (
    product.sale
      ? product.price + product.shippingPrice - discount
      : product.price + product.shippingPrice
  ).toFixed(2);

  const styleForButtons = {
    padding: "10px",
    border: "2px solid black",
    backgroundColor: "lightgreen",
    margin: "10px",
  };

  return (
    <>
      <div>
        <div>
          <h2>Title:{product.title}</h2>
          <p>Rating:{product.rating.rate}</p>
          <p>Price:{product.price.toFixed(2)}$</p>

          <p>Shipping:{product.shippingPrice}$</p>
          <div>
            <p>{product.sale ? `Discount-${discount.toFixed(2)}$` : ""}</p>
          </div>
          <p>
            Total:
            {totalPrice}
          </p>
        </div>
        <button
          onClick={() => dispatch(increment(productId))}
          style={styleForButtons}
        >
          ↑
        </button>
        <p>{count}</p>
        <button onClick={() => dispatch(decrement())} style={styleForButtons}>
          ↓
        </button>
        <button style={styleForButtons}>BUY NOW</button>
        <dir>
          <div>
            <h2>Shipping Details</h2>
            <p>Weight: {product.shipping.weight}</p>
            <p>Dimensions: {product.shipping.dimensions}</p>
            <p>Restrictions: {product.shipping.restrictions}</p>
            <p>Region: {product.shipping.region}</p>
            <p>Subregion: {product.shipping.subregion}</p>
          </div>
        </dir>
      </div>
    </>
  );
}

export default ProductDetails;
