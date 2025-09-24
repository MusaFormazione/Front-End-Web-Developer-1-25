import { useState, useEffect } from 'react';
import styled from '@emotion/styled'

import { WeatherCode } from './WeatherCode';

const WeatherEmoji = styled.span`
  padding: 4px;
  background-color: #f0f0f0;
  border-radius: 4px;
  font-size: 1.4em;
  margin-left: 8px;
`;

const Weather = ({code}) => {
  const weather = WeatherCode({ code: code });
  return <span>{weather.description}<WeatherEmoji> {weather.emoji}</WeatherEmoji></span>
}

function HourlyForecasts({ weather }) {
  const [averageTemperature, setAverageTemperature] = useState(0);
  const [averagePrecipitation, setAveragePrecipitation] = useState(0);

  useEffect(() => {
    if (weather && weather.hourly) {
      const totalTemperature = weather.hourly.reduce((acc, h) => acc + h.temperature, 0);
      const totalPrecipitation = weather.hourly.reduce((acc, h) => acc + h.precipitation, 0);
      setAverageTemperature(totalTemperature / weather.hourly.length);
      setAveragePrecipitation(totalPrecipitation / weather.hourly.length);
    }
  }, [weather]);

  return <table className='table table-bordered table-hover'>
    <thead>
      <tr className='table-primary'>
        <th className='user-select-none'>Ora</th>
        <th className='user-select-none'>Previsione</th>
        <th className='user-select-none'>Precipitazioni (mm)</th>
        <th className='user-select-none'>Temperatura (C)</th>
      </tr>
    </thead>
    <tbody>
      {weather.hourly?.map((data, index) => <tr key={index}>
        <td className='user-select-none'>{data.hour}</td>
        <td className='user-select-none'><Weather code={data.weather_code} /></td>
        <td className='user-select-none'>{data.precipitation.toFixed(2)} mm</td>
        <td className='user-select-none'>{data.temperature.toFixed(2)} °C</td>
      </tr>)}
      <tr>
        <td><b>Media</b></td>
        <td></td>
        <td><b>{averagePrecipitation.toFixed(2)} mm</b></td>
        <td><b>{averageTemperature.toFixed(2)} °C</b></td>
      </tr>
    </tbody>
  </table>
}
export default HourlyForecasts
