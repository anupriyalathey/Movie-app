import React from "react";
import "./MovieList.css";
import { Movie } from "../../types";

interface IProps {
  movies: Movie[];
  handleFavouritesClick: (movie: Movie) => void;
  FavouriteComponent: React.ReactNode;
}

function MovieList({movies, handleFavouritesClick, FavouriteComponent}: IProps) {

  return (
    <div className="list">
      {movies.map((movie, index) => (
        <div key={index} className="poster">
          <img src={movie.Poster} alt="movie poster"></img>
          <div onClick={()=> handleFavouritesClick(movie)} className="overlay">         
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
