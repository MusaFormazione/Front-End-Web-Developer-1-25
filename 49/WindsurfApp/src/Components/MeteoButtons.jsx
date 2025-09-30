import styled from "@emotion/styled"
import { css } from "@emotion/react"

const baseUnit = 8

const meteoButtonBase = () => css`
  cursor: pointer;
  transition: all 0.3s ease;
  margin: ${baseUnit * 2}px;
`

const SunButton = styled.button`
  ${meteoButtonBase}
  background-color:  #f1c40f;
  border-color: #f1c40f;

  &:hover {
    background-color: #e67e22;
    border-color: #e67e22;
  }

  &[data-musa-meteo-sun=true] {
    box-shadow: 0 0 16px rgba(249, 177, 62, 0.85);
  }
`;

const RainButton = styled.button`
  ${meteoButtonBase}
  background-color: #5dade2;
  border-color: #5dade2;

  &:hover {
    background-color: #2980b9;
    border-color: #2980b9;
  }

  &[data-musa-meteo-rain=true] {
    box-shadow: 0 0 16px rgba(62, 84, 249, 0.85);
  }
`;


const CloudButton = styled.button`
  ${meteoButtonBase}
  background-color: #bdc3c7;
  border-color: #bdc3c7;

  &:hover {
    background-color: #7f8c8d;
    border-color: #7f8c8d;
  }
  /** make active state glow */
  &[data-musa-meteo-cloud=true] {
    box-shadow: 0 0 16px rgba(93, 93, 93, 0.85);
  }
`;

function MeteoButtons({ meteo, setMeteo }) {
  return <div className="justify-content-center d-flex d-row d-sm-row d-md-column d-lg-column d-xl-column d-xxl-column">
    <SunButton
      className='btn btn-secondary'
      data-musa-meteo-sun={meteo === 'sun'}
      onClick={() => setMeteo('sun')}>
      Soleggiato
    </SunButton>
    <RainButton
      className='btn btn-secondary'
      data-musa-meteo-rain={meteo === 'rain'}
      onClick={() => setMeteo('rain')}>
      Piovoso
    </RainButton>
    <CloudButton
      className='btn btn-secondary'
      data-musa-meteo-cloud={meteo === 'cloud'}
      onClick={() => setMeteo('cloud')}>
      Nuvoloso
    </CloudButton>
  </div>
}

export default MeteoButtons
