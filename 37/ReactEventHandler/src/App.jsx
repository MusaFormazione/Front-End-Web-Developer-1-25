import  { useState } from 'react'

import './App.css'

const listaBottoni = ['primo', 'secondo', 'terzo', 'quarto', 'quinto']

function Button({ children, onClick }) {
  return <button className="btn btn-secondary m-1" onClick={onClick}>{children}</button>
}

function App () {
  const [lastKey, setLastKey] = useState('')
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
          <input type="text" className="form-control "
            placeholder="Type something..." onKeyUp={(e) => setLastKey(e.key)} />
        </div>
        <div className="col-6 p-3">
          <p>Ultimo tasto premuto: <b>{lastKey}</b></p>
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
