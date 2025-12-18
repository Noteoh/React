
function RatingStars({ rating, onRatingChange, interactive = false }) { return (
    <div className="rating-stars">
      {[1, 2, 3, 4, 5].map((star) => (
<span
key={star}
className={`star ${star <= rating ? 'filled' : ''}`} onClick={() => interactive && onRatingChange(star)} style={{ cursor: interactive ? 'pointer' : 'default' }}
>
*
</span> ))}
<span className="rating-text">{rating}/5</span> </div>
); }
export default RatingStars;
