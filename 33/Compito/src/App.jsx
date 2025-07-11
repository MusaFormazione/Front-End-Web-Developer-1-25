import React, { useState } from 'react'

import './App.css'

function App() {
  const [immagine, setImmagine] = useState(0)

  const immagineList = [
    "https://picsum.photos/id/13/300/300",
    "https://picsum.photos/id/22/300/300",
    "https://picsum.photos/id/34/300/300"
  ]

  return <>
    <h1>Compito</h1>
    <h3>galleria</h3>
    <div className='d-flex  justify-content-center'>
        <img src={immagineList[immagine]} alt={`Random ${immagine}`} title={`Immagine casuale ${immagine}`}/>
    </div>
    {/* <div className='d-flex  justify-content-center'>
        <img src={immagineList[immagine]} alt={`Random ${immagine}`} title={`Immagine casuale ${immagine}`}/>
    </div> */}
    <div className='d-flex  justify-content-center'>
        <img src={`https://picsum.photos/id/${immagine+1}/200/300`} alt={`Random ${immagine}`} title={`Immagine casuale ${immagine}`}/>
    </div>
    <div className='d-flex justify-content-center gap-2 mt-4'>
        <button className="btn btn-secondary" onClick={() => setImmagine(0)}>prima</button>
        <button className="btn btn-secondary" onClick={() => setImmagine(1)}>seconda</button>
        <button className="btn btn-secondary" onClick={() => setImmagine(2)}>terza</button>
      </div>
  </>
}

export default App
