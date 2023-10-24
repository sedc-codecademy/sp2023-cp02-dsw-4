import "./_main.scss";
import React from "react";
import { useNavigate } from "react-router";
function ProductCard(props) {
  const navigate = useNavigate();
  const { product } = props;
  const discount = product.sale
    ? (product.price - product.price * (product.sale / 100)).toFixed(2)
    : null;

  const handleClick = () => {
    navigate("/productDetails/" + product.id);
  };
  return (
    <>
      <div
        className={`card ${product.sale ? "sale" : ""}`}
        onClick={handleClick}
      >
        <img
          src="https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg"
          alt=""
          width={200}
        />
        {product.sale && (
          <div className="sale-badge">
            <p className="sale-percentage">{`${product.sale}% Off`}</p>
          </div>
        )}
        <h3>{product.title}</h3>
        <h4 className="original-price">{product.price}</h4>
        {product.sale && <h3 className="discounted-price">{discount}</h3>}
      </div>
    </>
  );
}

export default ProductCard;
