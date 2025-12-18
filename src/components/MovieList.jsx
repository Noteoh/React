import MovieCard from './MovieCard';
function MovieList({ movies, onAddReview, onRateMovie, onDeleteMovie }) { if (movies.length === 0) {
return <div className="no-movies">Aucun film pour le moment. Ajoutez-en un!</div>;
}
  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onAddReview={onAddReview}
          onRateMovie={onRateMovie}
          onDeleteMovie={onDeleteMovie}
/> ))}
</div> );
}
export default MovieList;