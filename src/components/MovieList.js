import React from "react";
import './MovieList.css';
function MovieList(props) {
  return (
    <div className="list">
      {props.movies.map((movie, index) => (
        <div className="poster">
          <img src={movie.Poster} alt="movie poster"></img>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
