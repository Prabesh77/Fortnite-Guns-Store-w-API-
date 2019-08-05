import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Products from "./components/Products";
import Homepage from "./components/Homepage";
import ProductDetail from "./components/ProductDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // -------------------------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------------------------

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetch(
        "https://fortnite-api.theapinetwork.com/weapons/get",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "a724a281bafd3bd8d5c0858d22f8b9f8"
          }
        }
      ).then(async response => {
        let jsonData = await response.json();
        return jsonData;
      });
      // const singleProduct = products.data.entries[0];
      let allTwelve = [];
      for (let i = 0; i < 30; i++) {
        let newData = products.data.entries[i];
        allTwelve.push(newData);
      }
      setFetchedData(allTwelve);
    };
    getProducts();
  }, []);
  const [fetchedData, setFetchedData] = useState([]);

  // =======================================================================================================

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" component={About} />
          <Route
            path="/products"
            exact
            render={props => <Products {...props} products={fetchedData} />}
          />
          <Route
            path="/products/:id"
            render={props => (
              <ProductDetail {...props} productItems={fetchedData} />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
