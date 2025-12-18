import { useState } from 'react';
function MovieForm({ onAddMovie }) {
const [formData, setFormData] = useState({
    title: '',
    year: new Date().getFullYear(),
    director: '',
    description: ''
});
const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
[name]: name === 'year' ? parseInt(value) : value });
};
const validateForm = () => {
const newErrors = {};
if (!formData.title.trim()) newErrors.title = 'Le titre est requis';
if (!formData.director.trim()) newErrors.director = 'Le realisateur est requis';
if (!formData.description.trim()) newErrors.description = 'La description est requise';
if (formData.year < 1900 || formData.year > 2100) {
newErrors.year = 'L\'annee doit etre entre 1900 et 2100'; }
    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
}
    onAddMovie(formData);
    setFormData({
      title: '',
      year: new Date().getFullYear(),
      director: '',
      description: ''
});
    setErrors({});
  };
return (
<form className="movie-form" onSubmit={handleSubmit}>
      <h2>Ajouter un film</h2>
      <div className="form-group">
        <label>Titre du film</label>
<input
type="text"
name="title"
value={formData.title} onChange={handleChange}
placeholder="Ex: Inception" className={errors.title ? 'input-error' : ''}
/>
{errors.title && <span className="error">{errors.title}</span>} </div>
      <div className="form-group">
        <label>Realisateur</label>
        <input
type="text"
name="director"
value={formData.director} onChange={handleChange}
placeholder="Ex: Christopher Nolan" className={errors.director ? 'input-error' : ''}
/>
{errors.director && <span className="error">{errors.director}</span>}
</div>
      <div className="form-group">
        <label>Annee</label>
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
          min="1900"
max="2100"
className={errors.year ? 'input-error' : ''} />
{errors.year && <span className="error">{errors.year}</span>} </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
name="description"
value={formData.description} onChange={handleChange}
placeholder="Resume du film..."
rows="4"
className={errors.description ? 'input-error' : ''}
/>
{errors.description && <span className="error">{errors.description}</span>}
</div>
<button type="submit" className="submit-btn"> Ajouter le film
      </button>
    </form>
); }
export default MovieForm;