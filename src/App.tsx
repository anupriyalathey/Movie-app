import "./App.css";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

// import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavourites from "./components/AddFavourites";
import RemoveFavourites from "./components/RemoveFavourites";
import { Movie } from "../types";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]); //
  const [searchValue, setSearchValue] = useState(""); // empty string to start with
  const [favourites, setFavourites] = useState<Movie[]>([]);

  const getMovieRequest = async (searchValue: string) => {
    const url =
      // "http://www.omdbapi.com/?i=tt3896198&apikey=9af97add&s=avengers";  hard code search(s) parameter
      `http://www.omdbapi.com/?i=tt3896198&apikey=9af97add&s=${searchValue}`; // search(s) parameter is dynamic; quotes changed to backtick

    const response = await fetch(url);
    const responseJson = await response.json();

    // console.log(responseJson);
    if (responseJson.Search) {
      // if responseJson.Search is true (i.e. not null)
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]); // when searchValue changes getMovieRequest() is called

  const addFavouriteMovie = (movie: Movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  }

  const removeFavouriteMovie = (movie: Movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavouriteList);
  }

  return (
    <div className="container-fluid">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList movies={movies} handleFavouritesClick={addFavouriteMovie} FavouriteComponent={AddFavourites} />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favourites" />
      </div>
      <div className="row">
        <MovieList movies={favourites} handleFavouritesClick={removeFavouriteMovie} FavouriteComponent={RemoveFavourites} />
      </div>    
    </div>
  );
}

export default App;
