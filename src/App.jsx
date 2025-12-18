import { useState, useEffect } from 'react';
import './App.css';

import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Charger les films depuis localStorage au démarrage
  useEffect(() => {
    const savedMovies = localStorage.getItem('movies');

    if (savedMovies) {
      setMovies(JSON.parse(savedMovies));
    } else {
      const defaultMovies = [
        {
          id: 1,
          title: 'Inception',
          year: 2010,
          director: 'Christopher Nolan',
          description:
            "Un braqueur qui se spécialise dans l'extraction de secrets à partir de rêves.",
          rating: 5,
          reviews: ["Chef-d'œuvre du cinéma moderne"],
        },
        {
          id: 2,
          title: 'Interstellar',
          year: 2014,
          director: 'Christopher Nolan',
          description:
            "Une équipe d'astronautes voyage à travers un trou de ver.",
          rating: 4,
          reviews: [],
        },
      ];

      setMovies(defaultMovies);
    }
  }, []);

  // Sauvegarder les films à chaque changement
  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  const handleAddMovie = (movieData) => {
    const newMovie = {
      id: Date.now(),
      ...movieData,
      rating: 0,
      reviews: [],
    };

    setMovies([newMovie, ...movies]);
    alert('Film ajouté avec succès !');
  };

  const handleAddReview = (movieId, review) => {
    setMovies(
      movies.map((movie) =>
        movie.id === movieId
          ? { ...movie, reviews: [...movie.reviews, review] }
          : movie
      )
    );
  };

  const handleRateMovie = (movieId, rating) => {
    setMovies(
      movies.map((movie) =>
        movie.id === movieId ? { ...movie, rating } : movie
      )
    );
  };

  const handleDeleteMovie = (movieId) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce film ?')) {
      setMovies(movies.filter((movie) => movie.id !== movieId));
    }
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.director.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>CineReview - Critique Cinématographique</h1>

      <div className="container">
        <MovieForm onAddMovie={handleAddMovie} />
      </div>

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <div style={{ color: 'white', marginBottom: '10px' }}>
        {filteredMovies.length} film
        {filteredMovies.length !== 1 ? 's' : ''} trouvé
        {filteredMovies.length !== 1 ? 's' : ''}
      </div>

      <MovieList
        movies={filteredMovies}
        onAddReview={handleAddReview}
        onRateMovie={handleRateMovie}
        onDeleteMovie={handleDeleteMovie}
      />
    </div>
  );
}

export default App;
