import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Rating from "./components/Rating";

function App() {
  const [rating, setRating] = useState(0);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="text-center m-5">
          <h1>¡Tus películas favoritas!</h1>
          <p>Suscribite para tener todos los beneficios</p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <span className="mx-2">Filtra las películas por el rating</span>
          <Rating rating={rating} setRating={setRating} />
        </div>
        <div className="movies">
          <Movies rating={rating} />
        </div>
      </div>
    </>
  );
}

export default App;
