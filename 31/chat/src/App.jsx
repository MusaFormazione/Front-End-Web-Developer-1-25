import { useState, useRef } from 'react'

import './App.css'

function Chat ({ messaggi }) {
  if (!messaggi || messaggi.length === 0) {
    return <div className='chat' />
  }
  return (
    <div className='chat'>
      {messaggi.map((m, i) => <p key={i}>{m}</p>)}
    </div>
  )
}

function App () {
  const [messaggi, setMessaggi] = useState([''])
  const messaggio = useRef(null)

  const addMessaggio = () => {
    if (messaggio.current && messaggio.current.value) {
      const nuovoMessaggio = messaggio.current.value
      setMessaggi([...messaggi, nuovoMessaggio])
      messaggio.current.value = ''
    }
  }

  return (
    <>
      <Chat messaggi={messaggi} />
      <div className='messaggio'>
        <input type='text' ref={messaggio} />
        <button onClick={addMessaggio}>Invia</button>
      </div>
    </>
  )
}

export default App
