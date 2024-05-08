import MovieList from "./components/MovieList";
import MovieCard from "./components/MovieCard";
import "./App.css";

function App() {
  const movies = [
    {
      name: "Spider-Man",
      year: 2002,
      image:
        "https://dam.smashmexico.com.mx/wp-content/uploads/2018/03/femme-fatale-spider-man-homecoming-2-jessica-drew.jpg",
      score: "bueno",
    },
    {
      name: "Batman",
      year: 1989,
      image:
        "https://i.pinimg.com/originals/92/b4/a6/92b4a64312055fc4ade1e6254835d6bf.png",
      score: "regular",
    },
    {
      name: "Batman & Robin",
      year: 1997,
      image:
        "https://upload.wikimedia.org/wikipedia/en/3/37/Batman_%26_Robin_poster.jpg",
      score: "malo",
    },
  ];

  return (
    <div className="text-center">
      <h1>Listado de Películas</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
