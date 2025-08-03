import { useState } from 'react'

import { MusaContainer, MusaCol, MusaRow } from './Components/MusaLayout'
import MusaTitle from './Components/MusaTitle'
import MusaButton from './Components/MusaButton'

import './App.css'
import ColorDiv from './Components/ColorDiv'

function App () {
  const [colore, setColore] = useState('red')

  return (
    <>
      <MusaTitle>Compito</MusaTitle>
      <MusaContainer>
        <MusaRow>
          <MusaCol>
            <ColorDiv color={colore} />
          </MusaCol>
        </MusaRow>
        <MusaRow>
          <MusaCol>
            <MusaButton variant='secondary' onClick={() => setColore('red')}>Rosso</MusaButton>
            <MusaButton variant='secondary' onClick={() => setColore('green')}>Verde</MusaButton>
            <MusaButton variant='secondary' onClick={() => setColore('blue')}>Blu</MusaButton>
          </MusaCol>
        </MusaRow>
      </MusaContainer>
    </>
  )
}

export default App
