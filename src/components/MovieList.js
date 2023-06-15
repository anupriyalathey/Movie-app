import React from "react";
import "./MovieList.css";
function MovieList(props) {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <div className="list">
      {props.movies.map((movie, index) => (
        <div className="poster">
          <img src={movie.Poster} alt="movie poster"></img>
          <div className="overlay"></div>
          <FavouriteComponent />
        </div>
      ))}
    </div>
  );
}

export default MovieList;
