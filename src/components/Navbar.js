import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav style={navStyle}>
        <div className="logo" style={logoStyle}>
          <Link to="/">
            <h2>My Store</h2>
          </Link>
        </div>
        <ul style={ulStyle}>
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/products">
            <li>Products</li>
          </Link>

          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

const navStyle = {
  height: "60px",
  width: "100%",
  display: "flex",
  background: "#444",
  justifyContent: "space-around",
  alignItems: "center",
  color: "#ddd"
};

const ulStyle = {
  listStyle: "none",
  display: "flex",
  width: "40%",
  justifyContent: "space-around"
};

const logoStyle = {
  color: " rgb(199, 117, 224)"
};

export default Navbar;
