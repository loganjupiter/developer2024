import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState("");

  const calcularMultiplicacion = () => {
    if (num1 === "" || num2 === "") {
      setResultado("Por favor complete todos los campos.");
    } else {
      const resultadoMultiplicacion = num1 * num2;
      setResultado(
        `El resultado de la multiplicación es: ${resultadoMultiplicacion}`
      );
    }
  };

  return (
    <div className="container text-center mt-5">
      <h1>Calculadora de Multiplicación</h1>
      <div className="d-flex justify-content-center">
        <input
          className="form-control w-25 mx-2 mt-3"
          type="number"
          placeholder="Número 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          className="form-control w-25 mx-2 mt-3"
          type="number"
          placeholder="Número 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <button className="btn btn-success mt-4" onClick={calcularMultiplicacion}>
        Multiplicar
      </button>
      <p className="mt-4">{resultado}</p>
    </div>
  );
}

export default App;
