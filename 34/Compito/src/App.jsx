import MusaTitle from './Components/MusaTitle'

import { MusaContainer, MusaRow, MusaCol } from './Components/MusaLayout'

import './App.css'
import Mese from './Mese'

const mesi = [
  'Gennaio',
  'Febbraio',
  'Marzo',
  'Aprile',
  'Maggio',
  'Giugno',
  'Luglio',
  'Agosto',
  'Settembre',
  'Ottobre',
  'Novembre',
  'Dicembre'
]

function App () {
  return (
    <MusaContainer>
      <MusaRow>
        <MusaCol sm={12}>
          <MusaTitle>Compito: calendario</MusaTitle>
        </MusaCol>
      </MusaRow>
      <MusaRow>
        {mesi.map((mese, index) => {
          // const colore = `hsl(${index * 30}, 70%, 80%)` // sistema di colorazione HSL (Hue, Saturation, Lightness)
          const red = Math.floor(index * 255 / 11)
          const colore = `rgb(${red} 120 120)` // sistema di colorazione RGB (Red, Green, Blue)
          return (
            <Mese key={index} colore={colore}>
              <h2>{mese}</h2>
            </Mese>
          )
        })}
      </MusaRow>
    </MusaContainer>
  )
}

export default App
