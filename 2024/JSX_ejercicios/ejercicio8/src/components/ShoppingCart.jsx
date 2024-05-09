export default function ShoppingCart({ name, price }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {" "}
        ⦿ {name}{" "}
        <span
          className="badge badge-primary badge-pill text-primary"
          onClick={() => setCount((count) => count + 1)}
        >
          {count} ${price} c/u
        </span>
      </li>

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>{count}</button>
      </div> */}
    </>
  );
}
