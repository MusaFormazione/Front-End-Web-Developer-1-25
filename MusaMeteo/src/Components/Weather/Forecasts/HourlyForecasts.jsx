import { useState, useEffect } from 'react';
import { WeatherCode } from './WeatherCodeEmojii';

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
    console.dir(weather.hourly);
    console.dir(weather.daily);
  }, [weather]);

  return <table className='table table-bordered table-striped table-hover'>
    <thead>
      <tr className='table-primary'>
        <th>Ora</th>
        <th>Previsione</th>
        <th>Precipitazioni (mm)</th>
        <th>Temperatura (C)</th>
      </tr>
    </thead>
    <tbody>
      {weather.hourly?.map((data, index) => <tr key={index}>
        <td>{data.hour}</td>
        <td>{WeatherCode({ code: data.weather_code }).description} {WeatherCode({ code: data.weather_code }).emoji}</td>
        <td>{data.precipitation.toFixed(2)}</td>
        <td>{data.temperature.toFixed(2)}</td>
      </tr>)}
      <tr>
        <td><b>Media</b></td>
        <td><b>{averagePrecipitation.toFixed(2)}</b></td>
        <td><b>{averageTemperature.toFixed(2)}</b></td>
      </tr>
    </tbody>
  </table>
}
export default HourlyForecasts
