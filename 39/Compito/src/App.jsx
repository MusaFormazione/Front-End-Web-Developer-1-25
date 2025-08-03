import { useState } from 'react'
import './App.css'

const giocatori = [
  { nome: 'Pippo', punti: 15, squadra: 'Squadra A' },
  { nome: 'Paperino', punti: 22, squadra: 'Squadra B' },
  { nome: 'Topolino', punti: 8, squadra: 'Squadra A' },
  { nome: 'Minnie', punti: 30, squadra: 'Squadra B' },
  { nome: 'Clarabella', punti: 5, squadra: 'Squadra A' },
  { nome: 'Gastone', punti: 25, squadra: 'Squadra B' }
]

function App () {
  // SUGGERIMENTO: creare uno stato per tenere traccia se il filtro è attivo o meno
  // const [filtroAttivo, setFiltroAttivo] = useState(false)

  // SUGGERIMENTO: calcolare la media dei punti di tutti i giocatori
  // const mediaPunti = ...

  // SUGGERIMENTO: creare una variabile che contenga i giocatori da visualizzare
  // let giocatoriDaVisualizzare = giocatori

  // SUGGERIMENTO: se il filtro è attivo, filtrare i giocatori con più di 20 punti
  // if (filtroAttivo) {
  //   giocatoriDaVisualizzare = ...
  // }

  return (
    <div className='App'>
      <h1>Esercizio Giocatori</h1>

      {/* SUGGERIMENTO: visualizzare la media dei punti */}
      {/* <p>Media Punti: {mediaPunti}</p> */}

      {/* SUGGERIMENTO: creare un checkbox o un pulsante per attivare/disattivare il filtro */}
      {/* <div className='form-check'>
        <input
          className='form-check-input'
          type='checkbox'
          // checked={filtroAttivo}
          // onChange={() => setFiltroAttivo(!filtroAttivo)}
        />
        <label className='form-check-label'>
          Mostra solo giocatori con più di 20 punti
        </label>
      </div> */}

      {/* SUGGERIMENTO: creare una tabella per visualizzare i giocatori */}
      {/* <table className='table table-striped'>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Punti</th>
            <th>Squadra</th>
          </tr>
        </thead>
        <tbody>
          {giocatoriDaVisualizzare.map((giocatore) => (
            <tr key={giocatore.nome}>
              <td>{giocatore.nome}</td>
              <td>{giocatore.punti}</td>
              <td>{giocatore.squadra}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  )
}

export default App