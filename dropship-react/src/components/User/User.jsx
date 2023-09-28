import React from "react";
import { useSelector } from "react-redux";
import UserOrders from "./userOrders/userOrders";
import UserRatings from "./userRatings/userRatings";

function User() {
  const user = useSelector((state) => state.user.user);

  return (
    <main className="user-main">
      <div className="user-parent-info">
        <img src="user.png" alt="user" />

        <div className="user-info">
          <h1>Firstname: {user.firstName}</h1>
          <h1>Lastname: {user.lastName}</h1>
          <h3>Email: {user.email}</h3>
          <h3>Role: {user.role}</h3>
          <p>Address: {user.address}</p>
          <p>Phone Number: {user.phoneNumber}</p>
          <p>Postal Code: {user.postalCode}</p>
          <p>City: {user.city}</p>
        </div>
      </div>

      {user.orders.length ? (
        <ul className="order-parent">
          <h2 className="color-heading">Orders</h2>
          {user.orders.map((order) => (
            <UserOrders key={order.id} orderObject={order} />
          ))}
        </ul>
      ) : (
        <div>The user has not made any orders.</div>
      )}

      {user.ratings.length ? (
        <ul className="rating-parent">
          <h3 className="color-heading">Ratings</h3>
          {user.ratings.map((rate) => (
            <UserRatings key={rate.id} rateObject={rate} />
          ))}
        </ul>
      ) : (
        <div>The user has not rated any products.</div>
      )}
    </main>
  );
}

export default User;
