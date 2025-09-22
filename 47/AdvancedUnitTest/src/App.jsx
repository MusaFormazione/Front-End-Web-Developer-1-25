import { useState, useEffect } from 'react'

import './App.css'
import { Button, Input, Message, Title } from './Components'

const Action = {
  execute: (param) => {
    console.log('Eseguo azione con parametro:', param)
  }
}

function App ({closeApp}) {
  const [value, setValue] = useState('')
  const [count, setCount] = useState(0)
  const action = Action
  useEffect(() => () => closeApp && closeApp(), []);

  const handleValue = e => setValue(e.target.value)
  const handleCounter = () => setCount(c => c + 1)

  return <div className="container">
      <Title>Esempi Testing Avanzato</Title>
      <Message>Testo inserito: {value || 'Inserisci il testo'}</Message>
      <Input placeholder="Inserisci testo" value={value} onChange={handleValue}>Scrivi qualcosa...</Input>
      <Button dataTestId="counter-button" onClick={handleCounter}>Contatore:{count}</Button>
      <Button dataTestId="reset-button" btnType="btn-primary" onClick={() => setCount(0)}>Resetta Contatore</Button>
      <Button btnType="btn-secondary" onClick={() => action.execute('ciao')}>Azione</Button>
    </div>
}

export { Action }

export default App
