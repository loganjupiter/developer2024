import { useState, useEffect } from "react";

function Movies({ rating }) {
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

  return (
    <div className="container">
      <div className="row">
        {movies.map((movie) => (
          <div className="card col-3 mx-0" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
