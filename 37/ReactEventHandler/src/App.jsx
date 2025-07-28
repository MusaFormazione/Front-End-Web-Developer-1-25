import  { useState } from 'react'

import './App.css'

const listaBottoni = ['rosso', 'giallo', 'verde']

function Button({ children, onClick }) {
  return <button className="btn btn-secondary m-1" onClick={onClick}>{children}</button>
}

function App () {
  const [lastKey, setLastKey] = useState('')
  // const [lastEvent, setLastEvent] = useState(null) <== versione con "spreco" di memoria
  const [lastButton, setLastButton] = useState('')

  const handleButtonClick = (event) => {
    if (event.target) {
      setLastButton(event.target.textContent)
    }
  }

  return <div className="container">
      <h1>Compito 37: React Event Handler</h1>
      <div className="row">
        <div className="col-6 p-3">
          <input type="text" className="form-control " placeholder="Scrivi..." onKeyUp={e => setLastKey(e.key)} />
          {/* <input type="text" className="form-control " placeholder="Scrivi..." onKeyUp={setLastEvent} /> */}
        </div>
        <div className="col-6 p-3">
          <p>Ultimo tasto premuto: <b>{lastKey}</b></p>
          {/* <b>{lastEvent.key}</b> */}
      </div>
      <div className="row">
        <div className="col-6">
          {listaBottoni.map((bottone) => (
            <Button key={bottone} onClick={handleButtonClick}>
              {bottone}
            </Button>
          ))}
        </div>
        <div className="col-6">
          <p>Ultimo bottone premuto: <b>{lastButton}</b></p>
        </div>
      </div>
    </div>
  </div>
}

export default App
