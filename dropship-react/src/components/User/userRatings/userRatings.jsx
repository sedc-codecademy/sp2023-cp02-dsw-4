import React, { useState } from "react";
import { Link } from "react-router-dom";

function UserRatings(props) {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // return (
  //   <li className="rating-li">
  //     <div className="rating-header">
  //       <img src="user.png" alt="user" />
  //       <Link to={`/product/${props.rateObject.id}`}>{props.rateObject.productTitle}</Link>

  //       <p>{props.rateObject.rate}</p>
  //       <button className="rating-expand-btn" onClick={handleExpand}>abc</button>
  //     </div>

  //     {isExpended && (
  //       <div className="additional-rating-info">
  //         <h3 className="color-title">Title: {props.rateObject.title}</h3>
  //         <p>Review: {props.rateObject.review}</p>
  //       </div>
  //     )}
  //   </li>
  // );

  return (
    <li className="rating-li">
      <div className="rating-header">
        <img src="user.png" alt="user" />
        <h3 className="color-title">Title: {props.rateObject.title}</h3>

        <p>{props.rateObject.rate}</p>
        <button className="rating-expand-btn" onClick={handleExpand}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
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
