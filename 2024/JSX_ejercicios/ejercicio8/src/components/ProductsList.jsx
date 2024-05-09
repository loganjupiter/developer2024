export default function ProductsList({ name, price }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {" "}
      ⦿ {name}
      <span className="badge badge-primary badge-pill text-primary">
       ${price} c/u
      </span>
    </li>
  );
}
