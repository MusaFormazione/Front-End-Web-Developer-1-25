import styled from '@emotion/styled'
import { WeatherCode } from "./WeatherCode";

const Image = styled.img`
  width: 120px;
  height: 120px;
  vertical-align: middle;
`;

function WeatherImage({ weather_code }) {
  const weather = WeatherCode(weather_code);
  return <Image className="justify-content-center rounded-5 shadow" alt={weather.description} title={weather.description} src={weather.image} />
}

export default WeatherImage
