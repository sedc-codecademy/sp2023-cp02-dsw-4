import "./AdminDashboard.scss";
import React from "react";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <header className="header">
        <div className="logo">
          <svg viewBox="0 0 220 220">
            <g clipPath="url(#clip0_201_14)">
              <path
                d="M97.4204 114.878C100.124 116.886 102.932 118.895 105.636 120.918C113.448 126.292 120.941 132.116 128.077 138.361C119.257 148.932 111.465 157.993 98.6436 159.79C90.5492 160.953 77.7581 157.359 75.659 142.725C74.1489 132.124 82.7719 124.12 97.4204 114.878ZM220 110C220 131.754 213.55 153.02 201.465 171.108C189.38 189.196 172.203 203.295 152.106 211.622C132.008 219.949 109.893 222.13 88.5568 217.89C67.2201 213.649 47.6199 203.177 32.2343 187.798C16.8487 172.418 6.36869 152.823 2.1192 131.488C-2.13029 110.153 0.0416052 88.0369 8.3603 67.9362C16.679 47.8355 30.7709 30.6528 48.8544 18.5604C66.9378 6.46797 88.2007 0.00896897 109.955 9.33052e-06C124.404 -0.00594175 138.713 2.8349 152.064 8.36025C165.415 13.8856 177.547 21.9872 187.766 32.2022C197.985 42.4173 206.092 54.5456 211.622 67.8944C217.153 81.2431 220 95.5508 220 110ZM126.959 67.6249L125.781 84.8558L176.115 60.8745L128.499 30.1579L128.303 50.1222C124.996 50.4393 120.314 49.201 116.901 48.2194C110.367 46.0555 103.418 45.4403 96.6049 46.4223C79.7364 48.8385 63.9704 60.3611 66.4017 77.743C67.5344 85.6864 71.944 93.0862 80.5821 101.483C62.9133 112.764 47.6154 126.279 50.6508 147.407C54.7282 175.903 82.0621 185.538 99.2628 183.077C119.605 180.162 130.855 167.054 141.547 154.142C144.515 158.781 146.49 163.985 147.346 169.425L147.663 171.554L171.735 168.096L171.418 165.982C169.908 155.788 165.453 146.349 157.661 137.183C155.487 134.587 153.184 132.102 150.759 129.738C148.098 127.129 145.301 124.664 142.378 122.353C135.492 116.72 128.167 111.616 121.054 106.663C104.986 95.4572 91.1079 85.777 89.5827 75.1606C88.6615 68.7273 93.9017 64.9972 99.1571 64.2422C104.412 63.4871 109.139 64.6348 114.259 65.7523C118.411 66.8374 122.67 67.4654 126.959 67.6249Z"
                fill="url(#headerLogoGradientMobile)"
                strokeWidth=".3rem"
              />
            </g>
            <defs>
              <linearGradient
                id="headerLogoGradientMobile"
                x1="54.9849"
                y1="14.7241"
                x2="165"
                y2="205.276"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.27" stopColor="#FF9F00" />
                <stop offset="1" stopColor="#FF7300" />
              </linearGradient>
              <clipPath id="clip0_201_14">
                <rect width="512" height="512" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <h2>Admin: Admin</h2>
      </header>
      <div className="dashboard">
        <div className="scrollable category-list">
          <h2>Categories</h2>
          <ul className="card-list">
            <li className="card">
              <h3>Category 1</h3>
              <p>Description for Category 1</p>
            </li>
            <li className="card">
              <h3>Category 2</h3>
              <p>Description for Category 2</p>
            </li>
            <li className="card">
              <h3>Category 3</h3>
              <p>Description for Category 3</p>
            </li>
            <li className="card">
              <h3>Category 3</h3>
              <p>Description for Category 3</p>
            </li>
            <li className="card">
              <h3>Category 3</h3>
              <p>Description for Category 3</p>
            </li>
            <li className="card">
              <h3>Category 3</h3>
              <p>Description for Category 3</p>
            </li>
            <li className="card">
              <h3>Category 3</h3>
              <p>Description for Category 3</p>
            </li>
            <li className="card">
              <h3>Category 3</h3>
              <p>Description for Category 3</p>
            </li>
            <li className="card">
              <h3>Category 3</h3>
              <p>Description for Category 3</p>
            </li>
            <li className="card">
              <h3>Category 3</h3>
              <p>Description for Category 3</p>
            </li>
            <li className="card">
              <h3>Category 3</h3>
              <p>Description for Category 3</p>
            </li>
          </ul>
        </div>
        <div className="scrollable category-list">
          <h2>Orders</h2>
          <ul className="card-list">
            <li className="card">
              <h3>Order 1</h3>
              <p>Description for Order 1</p>
            </li>
            <li className="card">
              <h3>Order 2</h3>
              <p>Description for Order 2</p>
            </li>
            <li className="card">
              <h3>Order 3</h3>
              <p>Description for Order 3</p>
            </li>
            <li className="card">
              <h3>Order 3</h3>
              <p>Description for Order 3</p>
            </li>
            <li className="card">
              <h3>Order 3</h3>
              <p>Description for Order 3</p>
            </li>
            <li className="card">
              <h3>Order 3</h3>
              <p>Description for Order 3</p>
            </li>
            <li className="card">
              <h3>Order 3</h3>
              <p>Description for Order 3</p>
            </li>
            <li className="card">
              <h3>Order 3</h3>
              <p>Description for Order 3</p>
            </li>
            <li className="card">
              <h3>Order 3</h3>
              <p>Description for Order 3</p>
            </li>
            <li className="card">
              <h3>Order 3</h3>
              <p>Description for Order 3</p>
            </li>
            <li className="card">
              <h3>Order 3</h3>
              <p>Description for Order 3</p>
            </li>
          </ul>
        </div>
        <div className="scrollable category-list">
          <h2>Products</h2>
          <ul className="card-list">
            <li className="card">
              <h3>Product 1</h3>
              <p>Description for Product 1</p>
            </li>
            <li className="card">
              <h3>Product 2</h3>
              <p>Description for Product 2</p>
            </li>
            <li className="card">
              <h3>Product 3</h3>
              <p>Description for Product 3</p>
            </li>
            <li className="card">
              <h3>Product 3</h3>
              <p>Description for Product 3</p>
            </li>
            <li className="card">
              <h3>Product 3</h3>
              <p>Description for Product 3</p>
            </li>
            <li className="card">
              <h3>Product 3</h3>
              <p>Description for Product 3</p>
            </li>
            <li className="card">
              <h3>Product 3</h3>
              <p>Description for Product 3</p>
            </li>
            <li className="card">
              <h3>Product 3</h3>
              <p>Description for Product 3</p>
            </li>
            <li className="card">
              <h3>Product 3</h3>
              <p>Description for Product 3</p>
            </li>
            <li className="card">
              <h3>Product 3</h3>
              <p>Description for Product 3</p>
            </li>
            <li className="card">
              <h3>Product 3</h3>
              <p>Description for Product 3</p>
            </li>
          </ul>
        </div>
        <div className="scrollable category-list">
          <h2>Users</h2>
          <ul className="card-list">
            <li className="card">
              <h3>User 1</h3>
              <p>Description for User 1</p>
            </li>
            <li className="card">
              <h3>User 2</h3>
              <p>Description for User 2</p>
            </li>
            <li className="card">
              <h3>User 3</h3>
              <p>Description for User 3</p>
            </li>
            <li className="card">
              <h3>User 3</h3>
              <p>Description for User 3</p>
            </li>
            <li className="card">
              <h3>User 3</h3>
              <p>Description for User 3</p>
            </li>
            <li className="card">
              <h3>User 3</h3>
              <p>Description for User 3</p>
            </li>
            <li className="card">
              <h3>User 3</h3>
              <p>Description for User 3</p>
            </li>
            <li className="card">
              <h3>User 3</h3>
              <p>Description for User 3</p>
            </li>
            <li className="card">
              <h3>User 3</h3>
              <p>Description for User 3</p>
            </li>
            <li className="card">
              <h3>User 3</h3>
              <p>Description for User 3</p>
            </li>
            <li className="card">
              <h3>User 3</h3>
              <p>Description for User 3</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
