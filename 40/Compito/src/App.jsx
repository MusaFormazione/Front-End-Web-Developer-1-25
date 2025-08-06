import React from 'react'
import UserInfoCard from './components/UserInfoCard'

import './App.scss'

function App () {
  const user = {
    name: 'Mario Rossi',
    email: 'mario.rossi@example.com',
    bio: 'Sviluppatore web con la passione per React e le nuove tecnologie.'
  }

  return (
    <div className='App'>
      <h1>Esercizio 1: Variabili e Nesting</h1>
      <UserInfoCard user={user} />
    </div>
  )
}

export default App
