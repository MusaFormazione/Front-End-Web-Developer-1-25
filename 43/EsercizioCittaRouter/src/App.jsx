import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import CityDetail from './pages/CityDetail'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'
import cities from './data/cities'
import './styles/main.scss'

function App () {
  const [favorites, setFavorites] = useState([])

  const toggleFavorite = (cityId) => {
    setFavorites((prevFavorites) => {
      console.log('Add to favorites ', cityId)
      if (prevFavorites.includes(cityId)) {
        return prevFavorites.filter(id => id !== cityId)
      } else {
        return [...prevFavorites, cityId]
      }
    })
  }

  return (
    <Router>
      <div className="app">
        <NavBar />
        <main className="app__content">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  cities={cities}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                />
              }
            />
            <Route
              path="/city/:id"
              element={
                <CityDetail
                  cities={cities}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                />
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <footer className="app__footer">
          <p>CityExplorer - Esercizio React Router © {new Date().getFullYear()}</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
