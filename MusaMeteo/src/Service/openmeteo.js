// Musa Meteo - Open Meteo Service
// https://open-meteo.com/en/docs?hourly=precipitation,apparent_temperature&forecast_days=1&latitude=45.0705&longitude=7.6868

// ATTENZIONE: da installare il pacchetto openmeteo con il comando:
// npm install openmeteo
import { fetchWeatherApi } from 'openmeteo';


const OPEN_METEO_API_URL = "https://api.open-meteo.com/v1/forecast";

async function updateWeatherData({ latitude, longitude }, setWeather) {
    const params = {
    "latitude": latitude,
    "longitude": longitude,
    "daily": ["temperature_2m_max", "temperature_2m_min", "rain_sum", "cloud_cover_mean"],
    "hourly": ["rain", "temperature_2m", "snowfall","cloud_cover"],
    "timezone": "Europe/Berlin",
    "forecast_days": 1
  };
  const responses = await fetchWeatherApi(OPEN_METEO_API_URL, params);

  const response = responses[0];

  const hourly = response.hourly();
  const daily = response.daily();

  const precipitation = hourly.variables(0).valuesArray()
  const apparentTemperature = hourly.variables(1).valuesArray()

  const weatherData = {
    hourly: [],
    daily: {
      maxTemperature: daily.variables(0).valuesArray(),
      minTemperature: daily.variables(1).valuesArray(),
      rainSum: daily.variables(2).valuesArray(),
      cloudCoverMean: daily.variables(3).valuesArray()
    }
  }

  for (let i = 0; i < precipitation.length; i++) {
    weatherData.hourly.push({
      hour: i + 1 > 12 ? `${i - 12} PM` : `${i} AM`, // Conversione in formato 12 ore
      precipitation: precipitation[i],
      temperature: apparentTemperature[i]
    });
  }

  setWeather(weatherData);
}

export default updateWeatherData;
