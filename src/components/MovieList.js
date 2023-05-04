import React from "react";

function MovieList(props) {
  return (
    <div>
      <h1>Movie List</h1>
      {props.movies.map((movie, index) => (
        <div>
          <img src={movie.Poster} alt="movie poster"></img>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
