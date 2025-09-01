import MusaCard from "../../DesignSystem/MusaCard";

import RainImg from './assets/rain.png'
import SunImg from './assets/sun.png'

function WeatherCard({ daily, setDebug }) {
  setDebug(`weather
    ${JSON.stringify(daily, null, 2)}
  `)
  console.dir(daily)
  const image = daily.rainSum > 0 ?
    { src: RainImg, portrait: false} : { src: SunImg, portrait: false }
  return <MusaCard title="Previsioni" image={image} >
    Temperatura max: {daily.maxTemperature}°C<br />
    Temperatura min: {daily.minTemperature}°C<br />
    Pioggia media: {daily.rainSum}mm
  </MusaCard>
}

export default WeatherCard;
