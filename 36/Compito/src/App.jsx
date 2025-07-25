import { useEffect, useState } from 'react'

import './App.css'

const statoIniziale = [
  { color: 'red', count: 0, colorName: 'Rosso' },
  { color: 'blue', count: 0 , colorName: 'Blu' },
  { color: 'green', count: 0, colorName: 'Verde' },
]

function App () {
  const [listaBottoni, setListaBottoni] = useState(statoIniziale)
  const [logMessage, setLogMessage] = useState('')

  const aggiornaContatore = color => {
    setListaBottoni(listaPrecedente =>
      listaPrecedente.map(bottone =>
        bottone.color === color ? { ...bottone, count: bottone.count + 1 } : bottone
        // equivlente a:
        // bottone.color === color ? {color: bottone.color, count: color.count, count: bottone.count + 1 } : bottone
        // Ovviamente non servirebbe scrivere due volte bottone.color
        // bottone.color === color ? {color: bottone.color, count: bottone.count + 1 } : bottone
        // usando lo spread operator simuliamo il comportamento di cui sopra
        // ATTENZIONE: se modifichiamo il bottone senza usare lo spread operator, perderemmo le altre proprietà del bottone
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
