import React, { useState } from 'react'

import './App.css'

function App () {
  const [mostraPrimaImmagine, setMostraPrimaImmagine] = useState(false)
  const [mostraSecondaImmagine, setMostraSecondaImmagine] = useState(false)

  const immagineLista = [
    'https://picsum.photos/id/80/200/300',
    'https://picsum.photos/id/81/200/300',
    'https://picsum.photos/id/82/200/300'
  ]

  const componenteImmagineLista = immagineLista.map((url, index) => (
    <img key={index} src={url} alt={`Random ${index}`} className='border' />
  ))

  const classNameNonAttivo = 'btn btn-secondary'
  const classNameAttivo = 'btn btn-primary'

  return (
    <>
      <h1>React rendering</h1>
      <h3>Conditional Rendering con tricondizione</h3>
      <div className='container p-4'>
        {mostraPrimaImmagine ? <img src='https://picsum.photos/id/23/200/300' alt='Random' /> : <p>Prima immagine</p>}
        <button
          className={mostraPrimaImmagine ? classNameAttivo : classNameNonAttivo}
          onClick={() => setMostraPrimaImmagine(!mostraPrimaImmagine)}
        >
          toggle prima immagine
        </button>
      </div>
      <h3>Conditional Rendering semplice</h3>
      <div className='container p-4'>
        {mostraSecondaImmagine && <img src='https://picsum.photos/id/6/200/300' alt='Random' />}
        <button
          className={mostraSecondaImmagine ? classNameAttivo : classNameNonAttivo}
          onClick={() => setMostraSecondaImmagine(!mostraSecondaImmagine)}
        >
          toggle seconda immagine
        </button>
      </div>
      <h3>List Rendering con </h3>
      <div className='container p-4'>
        {componenteImmagineLista}
      </div>
    </>
  )
}

export default App
