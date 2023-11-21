import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const UpcomingMoviesPage = () => {
    const [movies, setMovies] = useState([]);

  const addToFavorites = (movieId) => {
  };

  useEffect(() => {
    // Fetch upcoming movies from the TMDB API.
    getUpcomingMovies().then(upcomingMovies => {
      setMovies(upcomingMovies);
    });
  }, []);

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />
      }}
    />
  );
};

export default UpcomingMoviesPage;