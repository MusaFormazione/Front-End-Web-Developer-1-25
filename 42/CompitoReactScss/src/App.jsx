import { useState, useEffect } from 'react'

import MemeBug from './assets/meme-bug.png'
import MemeDeploy from './assets/meme-deploy.png'
import MemeBuild from './assets/meme-build.png'

import './App.scss'

// Array di meme divertenti
const memeList = [
  {
    id: 1,
    img: MemeDeploy,
    text: 'Quando il deploy va a buon fine',
    emoji: '🚀'
  },
  {
    id: 2,
    img: MemeBug,
    text: 'Quando scopri un bug in produzione',
    emoji: '🐞'
  },
  {
    id: 3,
    img: MemeBuild,
    text: 'Quando la build fallisce',
    emoji: '💥'
  }
]

// Stato iniziale dei voti per ogni meme.
// Per ogni meme mappiamo un oggetto con id e voto iniziale a 0
const initialState = memeList.map(meme => ({ id: meme.id, vote: 0 }))

function App() {
  // Stato dei voti per ogni meme
  const [votes, setVotes] = useState(initialState)
  // Stato per il vincitore
  const [winnerIdx, setWinnerIdx] = useState(null)

  // Funzione per votare un meme
  const handleVote = idx => {
    // Aggiorna i voti in modo funzionale
    setVotes(v => v.map((item, i) => i === idx ? { ...item, vote: item.vote + 1 } : item))
  }

  // Aggiorna l'indice del vincitore ogni volta che cambiano i voti
  useEffect(() => {
    // Trova il massimo dei voti
    const maxVote = Math.max(...votes.map(item => item.vote))
    // Trova l'indice del primo meme con il massimo dei voti
    const idx = votes.findIndex(item => item.vote === maxVote && maxVote > 0)
    setWinnerIdx(idx >= 0 ? idx : null)
  }, [votes])

  return <div className="container">
    <h1>Meme Card Game</h1>
    <div className="meme-grid">
      {memeList.map((meme, idx) => (
        <div
          key={meme.id}
          className={`meme-card${idx === winnerIdx ? ' meme-card--winner' : ''}`}
          onClick={() => handleVote(idx)}
        >
          <img src={meme.img} alt={meme.text} className="meme-img" />
          <div className="meme-text">{meme.text} {meme.emoji}</div>
          <div className="meme-votes">Voti: {votes[idx].vote}</div>
        </div>
      ))}
    </div>
    {winnerIdx !== null && votes[winnerIdx].vote > 10 && <div className="funny-msg">Hai scatenato la potenza dei meme! 😂</div>}
  </div>
}

export default App
