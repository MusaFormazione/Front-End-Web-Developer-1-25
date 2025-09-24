import styled from '@emotion/styled'
import { WeatherCode } from "./WeatherCode";

const Image = styled.img`
  width: 120px;
  height: 120px;
  vertical-align: middle;
`;

function WeatherImage({ weather_code }) {
  const weather = WeatherCode({ code: weather_code });
  return <div>
    <Image className="justify-content-center" alt={weather.description} title={weather.description} src={weather.image} />
    <div>{weather.description}</div>
  </div>
}

export default WeatherImage
