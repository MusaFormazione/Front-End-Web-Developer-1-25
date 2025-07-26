import { useState, useEffect } from 'react'

import './App.css'

function App () {
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      }, (error) => {
        console.error('Errore nel recupero della posizione:', error)
      })
    } else {
      console.error('Geolocalizzazione non supportata dal browser')
    }
  }, [])

  return <div className="container">
      <h1>Geolocation</h1>
      <p>Latitudine: <b>{latitude}</b></p>
      <p>Longitudine: <b>{longitude}</b></p>
    </div>
}

export default App
