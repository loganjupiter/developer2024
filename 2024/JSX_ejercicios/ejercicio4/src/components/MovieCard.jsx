const MovieCard = ({ movie }) => {
  const { name, year, image, score } = movie;

  return (
    <div className="col-4 border border-dark p-0 h-100">
      <div className="text-light bg-dark">
        <p>
          {name} ({year}){" "}
        </p>
      </div>
      <div className="text-light bg-success">
        <p>Score: {score}</p>
      </div>
      <div className="imgDiv">
        <img className="imgMovie" src={image} alt={name} />
      </div>
    </div>
  );
};

export default MovieCard;
