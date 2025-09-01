import React, { useState } from 'react'
import './App.scss'

function Card({ title, description, icon, theme }) {
  const [currentTheme, setCurrentTheme] = useState(theme)
  const toggleTheme = () => setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')

  return (
    <div className={`card card--${currentTheme}`}>
      <span className="card__icon" aria-label="icon">{icon}</span>
      <h2 className="card__title">{title}</h2>
      <p className="card__desc">{description}</p>
      <button className="card__btn" onClick={toggleTheme}>
        Cambia Stile
      </button>
    </div>
  )
}

export default Card
