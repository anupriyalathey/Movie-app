import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState(""); // empty string to start with

  const getMovieRequest = async () => {
    const url =
      "http://www.omdbapi.com/?i=tt3896198&apikey=9af97add&s=avengers"; // hard code search(s) parameter

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    setMovies(responseJson.Search);
  };

  useEffect(() => {
    getMovieRequest();
  }, []); // empty array to prevent infinite loop, request fires when the page loads
  return (
    <div className="container-fluid">
      <div className="row">
        <MovieListHeading heading="Movies" />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
