import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";

const UpcomingMoviesPage = () => {
  const [movies, setMovies] = useState([]);

  // This function will handle adding movies to favorites, similar to your HomePage.
  const addToFavorites = (movieId) => {
    // Implementation will be similar to the one in HomePage.
  };

  useEffect(() => {
    // Fetch upcoming movies from the TMDB API.
    getUpcomingMovies().then(upcomingMovies => {
      setMovies(upcomingMovies);
    });
  }, []);

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      selectFavorite={addToFavorites}
    />
  );
};

export default UpcomingMoviesPage;