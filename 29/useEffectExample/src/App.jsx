import { useState } from 'react'
import './App.css'

function App () {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  return (
    <>
      <h1>Esempio useEffect</h1>
      <button onClick={() => setCount(count + 1)}>
        Contatore: {count}
      </button>
      <button onClick={() => setName('Mario')}>
        Imposta nome a Mario
      </button>
      <h1>{name.length ? `Ciao ${name}` : 'Nessun nome impostato'}</h1>
    </>
  )
}

export default App
