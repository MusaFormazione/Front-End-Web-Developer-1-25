import { useEffect, useState } from 'react'

import './App.css'

const statoIniziale = [
  { color: 'red', count: 0 },
  { color: 'blue', count: 0 },
  { color: 'green', count: 0 }
]

function App () {
  const [listaBottoni, setListaBottoni] = useState(statoIniziale)
  const [logMessage, setLogMessage] = useState('')

  const aggiornaContatore = color => {
    setListaBottoni(listaPrecedente =>
      listaPrecedente.map(bottone =>
        bottone.color === color ? { ...bottone, count: bottone.count + 1 } : bottone
      )
    )
  }

  useEffect(() => {
    console.log('useEffect chiamato per aggiornare il contatore di colore')
    setLogMessage(
      `Contatori aggiornati: ${listaBottoni.map(bottone => `${bottone.color}: ${bottone.count}`).join(', ')}`
    )
  }, [listaBottoni])

  return (
    <div className='container'>
      <h1>Compito 36: useState avanzao</h1>
      <p>Elenco Bottone</p>
      <div>
        {
        listaBottoni.map((bottone, index) =>
          <button
            key={index} className='btn p-2 m-3 fw-bold'
            style={{ backgroundColor: bottone.color, color: 'white' }}
            onClick={() => aggiornaContatore(bottone.color)}
          >
            Numero click {bottone.count}
          </button>)
      }
      </div>
      {logMessage && <pre>{logMessage}</pre>}
    </div>
  )
}

export default App
