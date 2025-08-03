import { useState, useEffect, useRef } from 'react'

import { Nota, AggiungiNota } from './Components/Note'
import './App.css'


function App () {
  const [note, setNote] = useState([])
  const notaRef = useRef(null)

  const rimuovi = (id) => {
    setNote(prev => prev.filter(nota => nota.id !== id))
    notaRef.current.focus() // notare il focus
  }

  const aggiungi = (testo) => {
    if (!testo || testo.trim() === '') {
      return // NOTA Non aggiungiamo note vuote
    }
    const id = note.length ? note[note.length - 1].id + 1 : 0// Notare come calcoliamo il nuovo nuovoId
    setNote(prev => ([...prev, { id, testo }])) // Notare l'utilizzo diretto di ID e TESTO
  }

  const handleAggiungi = () => {
    if (notaRef.current) {
      const testo = notaRef.current?.value
      aggiungi(testo)
    }
    notaRef.current.value = '' // resettiamo il valore della nuova nota
    notaRef.current.focus() // notare il focus
  }

  useEffect(() => console.log('note modificate'), [note])

  useEffect(() => {
    notaRef.current.focus() // focus iniziale sul campo di input
  }, [])

  return (
    <div className='container'>
      <h1>Compito 36: Lista Note</h1>
      <ul className='list-group col-6'>
        {note && note.map(nota => <Nota key={nota.id} nota={nota} rimuovi={rimuovi} />)}
        <li className='list-group-item'>
          <AggiungiNota handleAggiungi={handleAggiungi} notaRef={notaRef} />
        </li>
      </ul>
    </div>
  )
}

export default App
