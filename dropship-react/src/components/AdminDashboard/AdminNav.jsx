import React from "react"
import { NavLink } from "react-router-dom"

const AdminNav = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <NavLink to={"/"} exact="true">Categories</NavLink>
        </li>
        <li>
          <NavLink to={"/sub"}>Sub-Categories</NavLink>
        </li>
        <li>
          <NavLink to={"/products"}>Products</NavLink>
        </li>
        <li>
          <NavLink to={"/orders"}>Orders</NavLink>
        </li>
        <li>
          <NavLink to={"/users"}>Users</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default AdminNav;
