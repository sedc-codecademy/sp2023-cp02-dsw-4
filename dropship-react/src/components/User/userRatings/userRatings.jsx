import React, { useState } from "react";
import Stars from "../../Stars/Stars";
import { Link } from "react-router-dom";

function UserRatings(props) {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li className="rating-li">
      <div className="rating-header">
        <img src="user.png" alt="user" />
        <h3 className="color-title">Title: {props.rateObject.title}</h3>

        <Stars
          id={props.rateObject.id}
          initialRating={props.rateObject.rate}
        ></Stars>
        <button className={`rating-expand-btn ${isExpanded ? "expanded" : ""}`} onClick={handleExpand}>
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

      {isExpanded && (
        <div className="additional-rating-info">
          <Link to={`/product/${props.rateObject.id}`}>
            {props.rateObject.productTitle}
          </Link>

          <p>Review: {props.rateObject.review}</p>
        </div>
      )}
    </li>
  );
}

export default UserRatings;
