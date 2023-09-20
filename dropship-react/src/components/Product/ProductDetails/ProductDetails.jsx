import React from "react";
import "./_main.scss";
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
    <div className="product-page">
      <div className="product-details">
        <div className="product-info">
          <div className="product-left">
            <img
              src="https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg"
              alt=""
              width={300}
            />
          </div>
          <div className="product-right">
            <h2 className="product-title">Product Details</h2>
            <h3 className="product-subtitle">{product.title}</h3>
            <p className="product-rating">Rating: {product.rating.rate}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <p className="product-shipping">
              Shipping: ${product.shippingPrice}
            </p>
            {product.sale && (
              <p className="product-discount">
                Discount: ${discount.toFixed(2)}
              </p>
            )}
            <p className="product-total">Total: ${totalPrice}</p>
            <div className="product-buttons">
              <button onClick={() => increment(productId)}>↑</button>
              <p className="product-count">{count}</p>
              <button onClick={decrement}>↓</button>
              <button className="buy-button">BUY NOW</button>
            </div>
          </div>
        </div>
        <div className="shipping-details">
          <h2>Shipping Details</h2>
          <p>Weight: {product.shipping.weight}</p>
          <p>Dimensions: {product.shipping.dimensions}</p>
          <p>Restrictions: {product.shipping.restrictions}</p>
          <p>Region: {product.shipping.region}</p>
          <p>Subregion: {product.shipping.subregion}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
