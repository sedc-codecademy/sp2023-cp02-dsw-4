import React from "react";
import { useNavigate } from "react-router";
function ProductCard(props) {
  const navigate = useNavigate();
  const { product } = props;
  const discount = product.sale
    ? (product.price - product.price * (product.sale / 100)).toFixed(2)
    : null;
  // Define the styles for the ProductCard
  const cardStyles = {
    border: "1px solid #000", // 1px black border
    width: "300px", // Set the width to your desired value
    padding: "10px", // Add padding for spacing
    marginBottom: "10px",
  };
  const handleClick = () => {
    // Navigate to the product detail page when clicked
    navigate("/productDetails/" + product.id);
  };
  return (
    <>
      <div style={cardStyles} onClick={handleClick}>
        <div>
          <p>{product.sale ? `${product.sale}%` : ""}</p>
        </div>
        <h3>{product.title}</h3>
        <h4>Price: {product.price}</h4>
        {product.sale && <h3>Discount: {discount}</h3>}
      </div>
    </>
  );
}

export default ProductCard;
