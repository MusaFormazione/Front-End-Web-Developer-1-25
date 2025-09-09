/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled"
import {css} from "@emotion/react"
import './App.css'

const BASE_SPACING = "16"
const base_button = {
  borderRadius: `${BASE_SPACING}px`,
}
const PinkBtn = styled.button(
  props => ( { backgroundColor: 'pink', ...base_button, padding: `${props.padding*BASE_SPACING}px` } )
)

const AzureBtn = styled.button(
  props => ( { backgroundColor: 'lightblue', ...base_button, padding: `${props.padding*BASE_SPACING}px` } )
)


const FlexyDiv = styled.div(props => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: `${BASE_SPACING/2}px`,
    gap: `${BASE_SPACING}px`,
    flexDirection: props.direction ?? 'row'
}))
const BASE_FONT_SIZE = 16
const base = css`
  color: hotpink;
  font-size: ${BASE_FONT_SIZE}px;
`

// ATTENZIONE Componente semplificato al minimo
const HotPink = () => <div
    css={css`
      ${base};
      font-weight: bold;
      background-color: #eee;
`}
  >
    This is hotpink.
</div>

function App () {
  return <div className="container">
      <h1>Emotion Example</h1>
      <p>Inserire qui il proprio codice</p>
      <FlexyDiv>
        <PinkBtn padding={1}>Pulsante con Emotion</PinkBtn>
        <PinkBtn padding={4}>Pulsante con Emotion piu padding</PinkBtn>
      </FlexyDiv>
      <FlexyDiv direction="column">
        <AzureBtn padding={1}>Pulsante con Emotion</AzureBtn>
        <AzureBtn padding={4}>Pulsante con Emotion piu padding</AzureBtn>
      </FlexyDiv>
      <HotPink />
    </div>
}

export default App
