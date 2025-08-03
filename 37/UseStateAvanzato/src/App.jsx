import { useState } from 'react'

import './App.css'

function App () {
  const [cnt, setCnt] = useState(0)
  const [cntDue, setCntDue] = useState(0)

  // ATTENZIONE: questo codice non funziona come ci si aspetta
  const incrementaDue = () => {
    setCntDue(cntDue + 1)
    setCntDue(cntDue + 1)
    setCntDue(cntDue + 1)
  }

  const incrementa = () => {
    setCnt(prev => prev + 1)
    setCnt(prev => prev + 1)
    setCnt(prev => prev + 1)
  }

  return <div className="container">
      <h1>Use State Avanzato</h1>
      <p>Contatore 1: <b>{cnt}</b> </p>
      <p>Contatore 2: <b>{cntDue}</b> </p>
      <button className="btn btn-primary m-1" onClick={incrementa}>
        Incrementa Contatore 1
      </button>
      <button className="btn btn-primary m-1" onClick={incrementaDue}>
        Incrementa Contatore 2
      </button>
    </div>
}

export default App
