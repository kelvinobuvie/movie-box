// src/components/TopMovies.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard'; // If you have a MovieCard component

const TopMovies = ({ apiKey }) => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const fetchTopMovies = async () => {
      try {
        const apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&language=en-US&page=1`;

        const response = await axios.get(apiUrl);
        const top10Movies = response.data.results.slice(0, 8); // Get the top 10 movies

        setTopMovies(top10Movies);
      } catch (error) {
        console.error('Error fetching top movies:', error);
      }
    };

    fetchTopMovies();
  }, [apiKey]);
  

  return (
    <div>
      <div className="top-movies-container">
        {topMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default TopMovies;
