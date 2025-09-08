import CityCard from '../components/CityCard'

// Pagina Home che mostra l'elenco delle città
function HomePage({ cities, favorites, toggleFavorite }) {

  return (
    <div className="container">
      <h1>Esplora le città italiane</h1>
      <p>Seleziona una città per scoprire informazioni e curiosità</p>

      <div className="city-grid">
        {cities.map(city => (
          <CityCard
            key={city.id}
            city={city}
            isFavorite={favorites.includes(city.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  )
}

export default HomePage
