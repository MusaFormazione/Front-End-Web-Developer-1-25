import { useState, useRef } from 'react'
import './App.css'

// Esempio di implementazione di useState
// let state
// const updateState = (val) =>{
//   state = val
// }
// const gabState = (val) => {
//   return [state, gabUpdateState]
// }

// const [giocatore, setGiocatore] = gabState('Gabriele');

function App () {
  const nameRef = useRef(null)
  const [name, setName] = useState('') // Useremo lo stato per aggiornare il saluto

  const handleChange = () => { // Ogni volta che l'input cambia, aggiorniamo lo stato 'name'
    if (nameRef.current) {
      setName(nameRef.current.value)
    }
  }

  return (
    <>
      <input type='text' ref={nameRef} placeholder='Nome' onChange={handleChange} />
      <p>Ciao {name}</p>
    </>
  )
}

export default App
