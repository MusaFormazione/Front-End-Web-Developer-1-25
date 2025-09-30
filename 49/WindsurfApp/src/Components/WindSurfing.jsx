import styled from "@emotion/styled"

import BeachSun from "./assets/beach-sun.png"
import BeachRain from "./assets/beach-rain.png"
import BeachCloud from "./assets/beach-cloud.png"
import BeachSunWindsurf from "./assets/beach-sun-windsurf.png"
import BeachRainWindsurf from "./assets/beach-rain-windsurf.png"
import BeachCloudWindsurf from "./assets/beach-cloud-windsurf.png"

const BeachImage = styled.img`
  width: 400px;
  height: auto;
  border-radius: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`

function getBeachImage(knots, meteo) {
  if( meteo === 'sun') {
    return knots < 12 ? BeachSun : BeachSunWindsurf
  }
  if( meteo === 'cloud') {
    return knots < 12 ? BeachCloud : BeachCloudWindsurf
  }
  if( meteo === 'rain') {
    return knots < 12 ? BeachRain : BeachRainWindsurf
  }
  return BeachSun
}

function WindSurfing({ knots, meteo }) {
  return <div className="d-flex justify-content-center m-3">
    <BeachImage src={getBeachImage(knots, meteo)} alt="Beach Windsurf" />
  </div>
}

export default WindSurfing
