import { useState, useEffect } from 'react'

import TabellaGiocatori from './Components/TabellaGiocatori.jsx'
import MediaPuntiGiocatori from './Components/MediaPuntiGiocatore.jsx'


import './App.css'

const giocatori = [
  { nome: 'Pippo', punti: 15, squadra: 'Squadra A' },
  { nome: 'Paperino', punti: 22, squadra: 'Squadra B' },
  { nome: 'Topolino', punti: 8, squadra: 'Squadra A' },
  { nome: 'Minnie', punti: 30, squadra: 'Squadra B' },
  { nome: 'Clarabella', punti: 5, squadra: 'Squadra A' },
  { nome: 'Pluto', punti: 1, squadra: 'Squadra A' },
  { nome: 'Gastone', punti: 25, squadra: 'Squadra B' }
]

const sommaPunti = giocatori.reduce(
  (acc, giocatore) => acc + giocatore.punti,
  0
)

const mediaPunti = sommaPunti / giocatori.length


function App () {
  const [mostraSoloPuntiAlti, setMostraSoloPuntiAlti] = useState(false)
  const [statoGiocatori, setStatoGiocatori] = useState(giocatori)
  const [mediaPuntiStato, setMediaPuntiStato] = useState(mediaPunti)
  const handleStatoGiocatori = (maggiore) => {
    if (maggiore) {
      setStatoGiocatori( giocatori.filter(giocatore => giocatore.punti > 20 ))
    } else {
      setStatoGiocatori(giocatori)
    }
  }

  useEffect(() => {
    setStatoGiocatori( giocatori.filter(giocatore => mostraSoloPuntiAlti? giocatore.punti > 20 : true))
  }, [mostraSoloPuntiAlti])

  useEffect(() => {
    const sommaPuntiStato = statoGiocatori.reduce(
      (acc, giocatore) => acc + giocatore.punti,
      0
    )
    setMediaPuntiStato(sommaPuntiStato / statoGiocatori.length)
  }, [statoGiocatori])

  return (
    <div className='container'>
      <h1>Esercizio Giocatori</h1>
      <div>
        <button className="btn btn-primary mb-2 me-2"
          onClick={() => setMostraSoloPuntiAlti(!mostraSoloPuntiAlti)}>
          Mostra i giocatori con più di 20 punti
        </button>
        <button className="btn btn-secondary mb-2 me-2"
          onClick={() => handleStatoGiocatori(true)}>
          Giocatori con più di 20 punti
        </button>
        <button className="btn btn-secondary mb-2"
          onClick={() => handleStatoGiocatori(false)}>
          Tutti i giocatori
        </button>
      </div>
      <TabellaGiocatori data={statoGiocatori} key={'tabella-stato'}> Giocatori da Stato</TabellaGiocatori>
      <TabellaGiocatori data={giocatori} mostraSoloPuntiAlti={mostraSoloPuntiAlti} key={'tabella-const'}>Giocatori da Const</TabellaGiocatori>
      <MediaPuntiGiocatori media={mediaPunti} />
      <MediaPuntiGiocatori media={mediaPuntiStato} />
    </div>
  )
}

export default App
