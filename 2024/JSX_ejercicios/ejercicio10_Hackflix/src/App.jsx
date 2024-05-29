import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Rating from "./components/Rating";
import axios from "axios";
import YouTube from "react-youtube";
import Poster from "./components/Posters";

function App() {
  const [rating, setRating] = useState(0);
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Loading Movies" });
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="text-center m-5">
          <h1>¡Tus películas favoritas!</h1>
          <p>100% gratis y sin registro</p>
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
