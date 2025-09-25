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

function getHourOffsetFromNow(hourOffset) {
  const date = new Date();
  date.setHours(date.getHours() + hourOffset);
  const options = { hour: 'numeric', hour12: true };
  return date.toLocaleTimeString('it-IT', options);
}

function Weather({ code }) {
  const weather = WeatherCode(code);

  return <span>{weather.description}<WeatherEmoji> {weather.emoji}</WeatherEmoji></span>
}

function HourlyForecasts({ weather }) {
  const [averageTemperature, setAverageTemperature] = useState(0);

  useEffect(() => {
    if (weather && weather.hourly) {
      const totalTemperature = weather.hourly.reduce((acc, h) => acc + h.temperature, 0);
      setAverageTemperature(totalTemperature / weather.hourly.length);
    }
  }, [weather]);

  return <table className='table table-bordered table-hover bg-secondary-subtle w-75'>
    <thead>
      <tr className='table-secondary'>
        <th className='user-select-none p-2'>Ora</th>
        <th className='user-select-none p-2'>Previsione</th>
        <th className='user-select-none p-2'>Temperatura (C)</th>
      </tr>
    </thead>
    <tbody>
      {weather.hourly?.filter((_,i) => i < 10).map((data, index) => {
        return <tr key={index}>
          <td className='user-select-none'>{getHourOffsetFromNow(index)}</td>
          <td className='user-select-none'><Weather code={data.weather_code} /></td>
          <td className='user-select-none'>{parseFloat(data.temperature).toFixed(2)} °C</td>
        </tr>}
      )}
      <tr>
        <td><b>Media</b></td>
        <td></td>
        <td><b>{averageTemperature.toFixed(2)} °C</b></td>
      </tr>
    </tbody>
  </table>
}
export default HourlyForecasts
