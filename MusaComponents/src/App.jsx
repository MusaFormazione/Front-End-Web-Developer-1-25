// Prima importare i componenti "tecnici" come react o altre librerie, qui solo per esempio
// import React from 'react'
// import { useState } from 'react'

// Importiamo poi i nostri componenti
import MusaButton from './Components/MusaButton' // Notare l'import  da una folder se index.jsx non serve tutto il percorso
import MusaTitle from './Components/MusaTitle' // Importiamo il componente MusaTitle
import MusaCard from './Components/MusaCard'
import { MusaRow, MusaCol, MusaContainer } from './Components/MusaLayout' // Importiamo i componenti di layout dall'index.jsx della cartella MusaLayout
import { MusaAlert, MusaError, MusaLoading } from './Components/MusaAlert'

import MusaGhostCardList from './Components/MusaGhostCardList'
import MusaNavbar from './Components/MusaNavbar'

// Infine importiamo i componenti di stile
import './App.css'

function sayHello () {
  console.log('Hello, World!')
}

function App () {
  const immaginePortait = { src: 'https://picsum.photos/id/64/350/500', portrait: true }
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
          <MusaNavbar
            items={[
              { label: 'Home', action: () => console.log('Home clicked'), active: true },
              { label: 'About', action: () => console.log('About clicked'), active: false }
            ]} title='Musa Navbar'
          />
        </MusaCol>
      </MusaRow>
      <MusaRow>
        <MusaCol lg={6} xl={4}>
          <MusaCard
            title='titolo'
            image={{ src: 'https://picsum.photos/200/200?random=1' }}
            action={{ callback: () => console.log('sono la callback'), label: 'azione' }}
          >
            Questo è un esempio di card con titolo e azione
          </MusaCard>
        </MusaCol>
        <MusaCol lg={6} xl={4}>
          <MusaCard
            title='titolo'
            image={immaginePortait}
            action={{
              callback: () => { const time = new Date(); console.log('eseguito al ' + time) },
              label: 'azione'
            }}
          >
            Questo è un esempio di card con titolo e azione con portrait
          </MusaCard>
        </MusaCol>
        <MusaCol lg={6} xl={4}>
          <MusaCard
            title='titolo'
            image={{ src: 'https://picsum.photos/200/200?random=2' }}
          >
            Questo è un esempio di card con titolo e semplice testo
          </MusaCard>
        </MusaCol>
        <MusaGhostCardList loading />
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
        <MusaCol>
          <MusaAlert>Sono un alert</MusaAlert>
          <MusaError>Sono un errore</MusaError>
          <MusaLoading>elemento</MusaLoading>
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
