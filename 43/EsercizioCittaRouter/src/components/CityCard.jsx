import { Link } from 'react-router'

// Componente CityCard per mostrare le anteprime delle città nella Home
function CityCard({ city, isFavorite, onToggleFavorite }) {
  console.log('CityCard render ', city.name, isFavorite )
  return (
    <div className="city-card">
      <img
        src={city.image}
        alt={city.name}
        className="city-card__image"
      />
      <button
        className={`city-card__favorite ${isFavorite ? 'city-card__favorite--active' : ''}`}
        onClick={() => onToggleFavorite(city.id)}
        aria-label={isFavorite ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'}
      >
        {isFavorite && <i class="bi bi-balloon-heart-fill"></i>}
      </button>
      <div className="city-card__content">
        <h2 className="city-card__title">{city.name}</h2>
        <Link to={`/city/${city.id}`} className="city-card__link">
          Esplora
        </Link>
      </div>
    </div>
  )
}

export default CityCard
