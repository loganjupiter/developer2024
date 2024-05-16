import React from "react";

function Movies({ movies }) {
  return (
    <div className="container">
      <div className="row">
        <>
          {movies.map((movie) => (
            <div className="card col-3" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
            </div>
          ))}
        </>
      </div>
    </div>
  );
}

export default Movies;
