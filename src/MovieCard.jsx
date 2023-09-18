// src/components/MovieCard.js

import React from 'react';
import './App.css';

const MovieCard = ({ movie }) => {
  const posterPath = movie.poster_path // Get the first poster
console.log(posterPath);
console.log(movie);
  return (
    <div className="movie-card">
      <div className="poster-container">
        {posterPath ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
            alt={movie.title}
            className="movie-poster"
          />
        ) : (
          <p>No poster available</p>
        )}
      </div>
      <h2 className="movie-title">{movie.title}</h2>
      {/* <p className="movie-description">{movie.overview}</p> */}
      <div className="movie-details">
        <p>Release Date: {movie.release_date}</p>
        <p>Vote Average: {movie.vote_average}</p>
      </div>
    </div>
  );
};

export default MovieCard;
