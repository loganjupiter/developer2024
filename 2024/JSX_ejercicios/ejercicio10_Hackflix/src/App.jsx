import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Rating from "./components/Rating";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&page=1&sort_by=popularity.desc",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGEzZDhjOGZlMjRlNzlkMmJjN2IyZjYyMmRlMDU2MyIsInN1YiI6IjY2NDUzYmFhYTE3ZjJiYzVkNjJkNzc1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C6hY6n2PKJhRMxLnv2n0Fp57fvRLTtX3bsEW_ipnANE",
          },
        }
      );
      const moviesObject = await response.json();
      setMovies(moviesObject.results);
    };

    getMovies();
  }, []);

  console.log(movies);
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="text-center m-5">
          <h1>¡Tus películas favoritas!</h1>
          <p>Suscribite para tener todos los beneficios</p>
        </div>
        <div className="d-flex justify-content-center">
          <Rating />
        </div>
        <div className="movies">
          <Movies movies={movies} />
        </div>
      </div>
    </>
  );
}

export default App;
