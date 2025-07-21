import { useState, useEffect, useRef } from 'react'

import './App.css'

function Nota ({ nota, rimuovi }) {
  const btnClassName = 'm-2 btn btn-outline-danger btn-sm'
  return (
    <li key={nota.id} className='list-group-item'>
      {nota.testo}
      <button className={btnClassName} onClick={() => rimuovi(nota.id)}>
        rimuovi <i class='bi bi-trash ml-1' />
      </button>
    </li>
  )
}

function AggiungiNota ({ handleAggiungi, nota }) {
  return (
    <div className='d-flex justify-content-between align-items-center'>
      <div>
        {/* Notare l'utilizzo di onKeyUp per aggiungere la nota con il tasto Invio */}
        <input
          className='form-control'
          onKeyUp={e => e.key === 'Enter' && handleAggiungi()}
          ref={nota}
          placeholder='inserisci una nuova nota' />
      </div>
      <div>
        <button className='btn btn-primary' onClick={handleAggiungi}>
            aggiungi <i className='bi bi-plus-circle' />
        </button>
      </div>
    </div>
  )
}

function App () {
  const [note, setNote] = useState([])
  const nota = useRef(null)

  const rimuovi = (id) => {
    setNote(prev => prev.filter(nota => nota.id !== id))
    nota.current.focus() // notare il focus
  }

  const aggiungi = (testo) => {
    if (!testo || testo.trim() === '') {
      return // NOTA Non aggiungiamo note vuote
    }
    const id = note.length ? note[note.length - 1].id + 1 : 0// Notare come calcoliamo il nuovo nuovoId
    setNote(prev => ([...prev, { id, testo }])) // Notare l'utilizzo diretto di ID e TESTO
  }

  const handleAggiungi = () => {
    if (nota.current) {
      const testo = nota.current?.value
      aggiungi(testo)
    }
    nota.current.value = '' // resettiamo il valore della nuova nota
    nota.current.focus() // notare il focus
  }

  useEffect(() => console.log('note modificate'), [note])

  useEffect(() => {
    nota.current.focus() // focus iniziale sul campo di input
  }, [])

  return (
    <div className='container'>
      <h1>Compito 36: Lista Note</h1>
      <ul className='list-group col-6'>
        {note && note.map(nota => <Nota key={nota.id} nota={nota} rimuovi={rimuovi} />)}
        <li className='list-group-item'>
          <AggiungiNota handleAggiungi={handleAggiungi} nota={nota} />
        </li>
      </ul>
    </div>
  )
}

export default App
