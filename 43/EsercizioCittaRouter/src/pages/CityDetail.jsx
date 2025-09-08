import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router'


// Pagina dettaglio di una città specifica
function CityDetail({ cities, favorites, toggleFavorite }) {
  const { id } = useParams() // Recupera l'id della città dall'URL
  const [_, setEasterEggClicks]  = useState(0)
  const [showEasterEgg, setShowEasterEgg] = useState(false)

  // Trova la città corrispondente
  const city = cities.find(c => c.id === id)

  // Gestisce il click per l'easter egg
  const handleEasterEggClick = () => {
    setEasterEggClicks(prevCount => {
      const newCount = prevCount + 1
      if (newCount >= 3) {
        setShowEasterEgg(true)
      }
      return newCount
    })
  }

  // Reset dell'easter egg dopo un certo tempo
  useEffect(() => {
    if (showEasterEgg) {
      const timer = setTimeout(() => {
        setShowEasterEgg(false)
        setEasterEggClicks(0)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [showEasterEgg])

  // Se la città non esiste, mostra un messaggio
  if (!city) {
    return (
      <div className="container">
        <div className="city-detail">
          <h1>Città non trovata</h1>
          <p>La città che stai cercando non esiste.</p>
          <Link to="/" className="city-detail__back">Torna alla Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="city-detail">
        <div className="city-detail__header">
          <h1 className="city-detail__title">{city.name}</h1>
          <Link to="/" className="city-detail__back">Torna alla Home</Link>
        </div>

        <img
          src={city.image}
          alt={city.name}
          className="city-detail__image"
          onClick={handleEasterEggClick}
        />

        <div className="city-detail__description">
          <p>{city.description}</p>
        </div>

        <div className="city-detail__fun-fact">
          <h3>Lo sapevi?</h3>
          <p>{city.funFact}</p>
        </div>

        {showEasterEgg && (
          <div className="city-detail__easter-egg easter-egg-active">
            <h3>Hai trovato l'easter egg!</h3>
            <p>Hai cliccato l'immagine 3 volte. Sei un vero esploratore!</p>
          </div>
        )}

        <div className="city-detail__actions">
          <button
            className={`favorite-button ${favorites.includes(id) ? 'favorite-button--active' : ''}`}
            onClick={() => toggleFavorite(id)}
          >
            {favorites.includes(id) ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CityDetail
