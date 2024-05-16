import { useState } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <div>
      <h1 className="text-center my-5">Lista de compras</h1>
      <div className="container">
        <div className="row">
          <Products
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
          />
          <Cart cartProducts={cartProducts} setCartProducts={setCartProducts} />
        </div>
      </div>
    </div>
  );
}

export default App;
