import React from "react";
import { Link } from "react-router-dom";

const Products = ({ products }) => {
  return (
    <div className="products-page">
      <div className="products-container">
        {products.map(data => (
          <Link to={`/products/${data.identifier}`} key={data.identifier}>
            <div className="product-box">
              <h3>{data.name}</h3>
              <img src={data.image} alt="" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
