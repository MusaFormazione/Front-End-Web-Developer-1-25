import { useState, useEffect } from 'react';

function DailyForecast({ weather }) {
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

  return <div className="daily-forecast">
      <p>Temperatura Media: {Math.round(averageTemperature)} °C</p>
      <p>Precipitazioni Medie: {averagePrecipitation.toFixed(2)} mm</p>
    </div>
}
export default DailyForecast
