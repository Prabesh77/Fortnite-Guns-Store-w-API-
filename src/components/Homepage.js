import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <div className="homepage">
        <div className="contents">
          <h1>Welcome To my Gun Store</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus totam
            ipsam odit, unde numquam officia sed itaque blanditiis alias quaerat
            temporibus eaque ex repellendus maiores, voluptatibus nihil iusto
            laudantium. Quibusdam, consequatur. Quaerat voluptatibus autem
            perferendis quibusdam sit quasi recusandae eligendi temporibus aut
            reprehenderit labore aliquid quos consequuntur vero, eveniet
            accusamus?
          </p>
          <Link to="/products">
            <button>Buy Guns</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
