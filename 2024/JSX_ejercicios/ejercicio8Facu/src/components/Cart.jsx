function Cart({ cartProducts, setCartProducts }) {
  return (
    <div className="col-6">
      <h3>Carrito de compras</h3>
      <ul className="list-unstyled">
        {cartProducts.map((product) => (
          <li key={product.id}>
            <button className="btn">
              <i className="bi bi-dash-circle me-2"></i>
              <span className="fw-bold me-1">{product.name}</span>
              <span className="me-1">(Cant: {product.qty})</span>
              <span>(${product.unitPrice} c/u)</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
