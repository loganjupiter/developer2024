import { useState } from "react";
import ProductsList from "./components/ProductsList";
import products from "./data/products";
/* import ShoppingCart from "./components/ShoppingCart"; */
import "./App.css";

function App() {
  return (
    <div className="container m-5">
      <h1> Productos Disponibles</h1>
      <div className="row">
        <div className="col-6">
          <ul>
            {products.map((item) => {
              return <ProductsList name={item.name} price={item.unitPrice} />;
            })}
          </ul>
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
}

export default App;
