function Cart({ cartProducts, setCartProducts }) {
  const total = cartProducts
    .reduce(
      (accumulator, product) => accumulator + product.qty * product.unitPrice,
      0
    )
    .toFixed(2);
  const removeProduct = (product) => {
    if (product.qty < 2) {
      setCartProducts(cartProducts.filter((p) => p.id !== product.id));
    } else {
      setCartProducts(
        cartProducts.map((p) => {
          if (p.id === product.id) return { ...p, qty: p.qty - 1 };
          return p;
        })
      );
    }
  };
  return (
    <div className="col-6">
      <h3>Carrito de compras</h3>
      <ul className="list-unstyled">
        {cartProducts.map((product) => (
          <li key={product.id}>
            <button className="btn" onClick={() => removeProduct(product)}>
              <i className="bi bi-dash-circle me-2"></i>
              <span className="fw-bold me-1">{product.name}</span>
              <span className="me-1">(Cant: {product.qty})</span>
              <span>(${product.unitPrice} c/u)</span>
            </button>
          </li>
        ))}
      </ul>
      {cartProducts.length > 0 && (
        <div className="p-3 text-success-emphasis bg-success-subtle border border-success-subtle rounded-3 w-50">
          Total: ${total}
        </div>
      )}
    </div>
  );
}

export default Cart;
