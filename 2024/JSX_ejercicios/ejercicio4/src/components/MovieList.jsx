import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="container text-center align-items-center">
      <div className="row">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
