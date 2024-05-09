import { useState } from "react";
import ProductsList from "./components/ProductsList";
import products from "./data/products";
/* import ShoppingCart from "./components/ShoppingCart"; */
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container m-5">
      <div className="text-center">
        <h1 className="mt-5 text-info ">Almacén "PAQUITA LA DEL BARRIO"</h1>
        <p className="text-secondary">OFERTAS MÁS DULCES QUE EL AZÚCAR</p>
      </div>
      <div className="row">
        <div className="col-6 my-5">
          <h2> Productos Disponibles</h2>
          <ul className="list-group mt-5">
            {products.map((item) => {
              return <ProductsList name={item.name} price={item.unitPrice} />;
            })}
          </ul>
        </div>

        <div className="col-6 my-5">
          <h2> Carrito de compras </h2>
          <p className="text-secondary">
            Por favor, seleccione uno o más productos para agregar a su carrito
          </p>
          <ul className="list-group">
            {products.map((item) => {
              return <ProductsList name={item.name} price={item.unitPrice} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
