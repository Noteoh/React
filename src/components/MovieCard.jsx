import RatingStars from './RatingStars';
function MovieCard({ movie, onAddReview, onRateMovie, onDeleteMovie }) {
   
const handleAddReview = () => {
const review = prompt('Votre critique:'); if (review && review.trim()) {
      onAddReview(movie.id, review);
    }
};
  const handleRate = (rating) => {
    onRateMovie(movie.id, rating);
};
  return (
    <div className="movie-card">
      <div className="movie-header">
        <h2>{movie.title}</h2>
        <button
className="delete-btn"
onClick={() => onDeleteMovie(movie.id)} title="Supprimer ce film"
>
x
        </button>
      </div>
<p className="movie-year">Annee: {movie.year}</p>
<p className="movie-director">Realisateur: {movie.director}</p> <p className="movie-description">{movie.description}</p>
      <RatingStars
        rating={movie.rating}
        onRatingChange={handleRate}
        interactive={true}
/>
<div className="review-section"> <h3>Critiques ({movie.reviews.length})</h3> {movie.reviews.length === 0 ? (
<p className="no-reviews">Aucune critique pour le moment</p> ):(
<ul className="reviews-list"> {movie.reviews.map((review, index) => (
<li key={index} className="review-item"> {review}
</li> ))}
</ul> )}
</div>
<button className="add-review-btn" onClick={handleAddReview}> Ajouter une critique
      </button>
    </div>
); }
export default MovieCard;