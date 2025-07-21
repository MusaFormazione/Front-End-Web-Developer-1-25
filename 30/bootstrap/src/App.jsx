// Prima importare i componenti "tecnici" come react o altre librerie, qui solo per esempio
// import React from 'react'
// import { useState } from 'react'

// Importiamo poi i nostri componenti
import MusaButton from './Components/MusaButton' // Notare l'import  da una folder se index.jsx non serve tutto il percorso
import MusaTitle from './Components/MusaTitle' // Importiamo il componente MusaTitle
import { MusaRow, MusaCol, MusaContainer } from './Components/MusaLayout' // Importiamo i componenti di layout dall'index.jsx della cartella MusaLayout

// Infine importiamo i componenti di stile
import './App.css'

function sayHello () {
  console.log('Hello, World!')
}

function App () {
  return (
    <MusaContainer> {/* Container è il componente di bootstrap che serve per racchiudere il contenuto */}
      <MusaRow> {/* MusaRow è il componente di bootstrap che serve per creare una riga */}
        <MusaCol> {/* MusaCol è il componente di bootstrap che serve per creare una MusaColonna */}
          <MusaTitle>
            Musa Bootstrap
          </MusaTitle>
        </MusaCol>
      </MusaRow>
      <MusaRow>
        <MusaCol>
          <MusaButton variant='primary' size='lg'>
            Bootstrap Button
          </MusaButton>
          <MusaButton variant='secondary' size='lg'>
            Musa Button
          </MusaButton>
          <MusaButton variant='success' size='lg'>
            Musa Button Success
          </MusaButton>
        </MusaCol>
      </MusaRow>
      <MusaRow>
        <MusaCol>
          <MusaButton variant='danger' size='lg' onClick={sayHello}>
            Click Me
          </MusaButton>
        </MusaCol>
      </MusaRow>
      <MusaRow>
        <MusaCol lg={6}>
          <p>Prova</p>
        </MusaCol>
        <MusaCol lg={6}>
          <p>Prova</p>
        </MusaCol>
      </MusaRow>
      <MusaRow>
        <MusaCol lg={3}>
          <p>Prova</p>
        </MusaCol>
        <MusaCol lg={3}>
          <p>Prova</p>
        </MusaCol>
        <MusaCol lg={3}>
          <p>Prova</p>
        </MusaCol>
        <MusaCol lg={3}>
          <p>Prova</p>
        </MusaCol>
      </MusaRow>
      <MusaRow>
        <MusaCol xl={4} className='bordered'>
          Sidebar
        </MusaCol>
        <MusaCol xl={8} className='bordered'>
          contenuto
        </MusaCol>
      </MusaRow>
    </MusaContainer>
  )
}

export default App
