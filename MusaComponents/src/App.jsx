import { MusaCol, MusaContainer, MusaRow } from './Components/MusaLayout'
import MusaTitle from './Components/MusaTitle'
import './App.css'

function App() {

  return <MusaContainer>
    <MusaRow>
      <MusaCol><MusaTitle>Musa Components</MusaTitle></MusaCol>
    </MusaRow>
    <MusaRow>
      <MusaCol className="musa-bordered"  xs={1}>
        1
      </MusaCol>
      <MusaCol className="musa-bordered"  xs={1}>
        1
      </MusaCol>
      <MusaCol className="musa-bordered"  xs={1}>
        1
      </MusaCol>
      <MusaCol className="musa-bordered"  xs={1}>
        1
      </MusaCol>
      <MusaCol className="musa-bordered"  xs={1}>
        1
      </MusaCol>
          <MusaCol className="musa-bordered"  xs={1}>
        1
      </MusaCol>
            <MusaCol className="musa-bordered"  xs={1}>
        1
      </MusaCol>
            <MusaCol className="musa-bordered"  xs={1}>
        1
      </MusaCol>
            <MusaCol className="musa-bordered"  xs={1}>
        1
      </MusaCol>
            <MusaCol className="musa-bordered"  xs={1}>
        1
      </MusaCol>
            <MusaCol className="musa-bordered"  xs={1}>
        1
      </MusaCol>
            <MusaCol className="musa-bordered"  xs={1}>
        1
      </MusaCol>
    </MusaRow>
    <MusaRow>
      <MusaCol className="musa-bordered"  xs={3}>
        3
      </MusaCol>
      <MusaCol className="musa-bordered"  xs={3}>
        3
      </MusaCol>
      <MusaCol className="musa-bordered"  xs={3}>
        3
      </MusaCol>
      <MusaCol className="musa-bordered"  xs={3}>
        3
      </MusaCol>
    </MusaRow>
    <MusaRow>
      <MusaCol className="musa-bordered"  xs={6}>
        6
      </MusaCol>
      <MusaCol className="musa-bordered"  xs={6}>
        6
      </MusaCol>
    </MusaRow>
  </MusaContainer>

}

export default App
