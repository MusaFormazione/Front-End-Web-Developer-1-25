import MusaCard from "../../DesignSystem/MusaCard";

import RainImg from './assets/rain.png'
import SunImg from './assets/sun.png'
import CloudImg from './assets/cloud.png'
import { WeatherCode } from "./WeatherCode";

function getWeatherImage(weather_code) {
  if( weather_code === 0 ) {
    return SunImg
  }
  if( weather_code >= 1 && weather_code <= 3 ) {
    return CloudImg
  }
  if( weather_code <= 99) {
    return RainImg
  }
}


function WeatherCard({ daily, setDebug }) {
  console.dir(daily)
  setDebug(daily)
  if (!daily) return <></>

  const image = { src: getWeatherImage(daily[0].weather_code), portrait: false}
  return <MusaCard title="Previsioni" image={image} style={{ borderRadius: '8px', borderBottomLeftRadius: 0, borderBottomRightRadius: 0, maxWidth: '300px' }}>
    <p className="lh-lg">
      <b>{WeatherCode(daily[0].weather_code).description} {WeatherCode(daily[0].weather_code).emoji} </b><br />
      Temperatura max: <b>{daily[0].temperature_max}°C</b><br />
      Temperatura min: <b>{daily[0].temperature_min}°C</b><br />
    </p>
  </MusaCard>
}

export default WeatherCard;
