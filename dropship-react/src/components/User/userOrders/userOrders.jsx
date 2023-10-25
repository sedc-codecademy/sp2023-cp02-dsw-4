import React, { useState } from "react";
import { Link } from "react-router-dom";

function UserOrders(props) {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li className="order-li">
      <div className="order-header">
        <div>
          {props.orderObject.status === "DRAFT" && (
            <Link to="/cart" className="view-cart-link">
              View Cart
            </Link>
          )}
          <h2>Total Price: {props.orderObject.totalPrice}</h2>
          <h3>
            Status:{" "}
            <span
              className={
                props.orderObject.status === "DRAFT"
                  ? "red-status"
                  : props.orderObject.status === "PURCHASED"
                  ? "green-status"
                  : ""
              }
            >
              {props.orderObject.status}
            </span>
          </h3>
        </div>

        <div>
          {props.orderObject.status === "DRAFT" ? (
            <p>Created At: {props.orderObject.createdAt}</p>
          ) : (
            <p>Purchased At: {props.orderObject.purchasedAt}</p>
          )}
          <button
            className={`order-expand-btn ${isExpanded ? "expanded" : ""}`}
            onClick={handleExpand}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z"
              />
            </svg>
          </button>
        </div>
      </div>

      {isExpanded && (
        <>
          <div className="additional-order-info">
            <p>Note: {props.orderObject.note}</p>
            <p>Payment: {props.orderObject.paymentStatus}</p>
            <p>City: {props.orderObject.city}</p>
          </div>
          <ul className="order-ul">
            {props.orderObject.orderItems.map((item) => (
              <li key={item.id}>
                <img src="user.png" alt="user" />
                <h3 className="color-title">Title: {item.title}</h3>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </li>
  );
}

export default UserOrders;
