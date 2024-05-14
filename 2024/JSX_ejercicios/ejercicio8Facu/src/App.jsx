import Cart from "./components/Cart";
import Products from "./components/Products";

function App() {
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <div>
      <h1 className="text-center my-5">Carrito de compra</h1>
      <div className="container">
        <div className="row">
          <Products
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
          />
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
