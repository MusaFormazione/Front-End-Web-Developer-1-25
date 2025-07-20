import { useState, useEffect, useRef } from 'react'

import './App.css'

function Nota ({nota, rimuovi}) {
  return <li key={nota.id}>
    { nota.testo }
    <button className='m-2 btn btn-small btn-secondary' onClick={() => rimuovi(nota.id)}>rimuovi</button>
  </li>
}

function App() {
  const [note, setNote] = useState([])
  const nota = useRef(null)

  const rimuovi = (id) => {
    setNote( prev => prev.filter( nota => nota.id !== id ) )
  }

  const aggiungi = (testo) => {
    const id = note.length ? note[note.length-1].id + 1 : 0// Notare come calcoliamo il nuovo nuovoId
    console.log(note)
    setNote( prev => ([...prev, { id, testo }]))  // Notare l'utilizzo diretto di ID e TESTO
  }

  const handleAggiungi = () => {
    if ( nota.current ) {
      const testo = nota.current?.value
      aggiungi(testo)
    }
    nota.current.value = ''  // resettiamo il valore della nuova nota
    nota.current.focus() // notare il focus
  }

  useEffect( () => console.log('note modificate') , [note] )

  return <div className='container'>
    <h1>Compito 36: Lista Note</h1>
    <ul>
      { note && note.map( nota => <Nota key={nota.id} nota={nota} rimuovi={rimuovi} /> ) }
    </ul>
    <div className='d-flex g-2'>
      <input className='form-control' ref={nota} placeholder='inserisci una nuova nota'/>
      <button className='m-2 btn btn-primary' onClick={handleAggiungi}>aggiungi</button>
    </div>
  </div>
}

export default App
