// Musa Meteo - Open Meteo Service
// https://open-meteo.com/en/docs?hourly=precipitation,apparent_temperature&forecast_days=1&latitude=45.0705&longitude=7.6868

// ATTENZIONE: da installare il pacchetto openmeteo con il comando:
// npm install openmeteo
import { fetchWeatherApi } from 'openmeteo';


const OPEN_METEO_API_URL = "https://api.open-meteo.com/v1/forecast";

async function updateWeatherData({ latitude, longitude }, setWeather) {
  const paramsHourly = {
    "latitude": latitude,
    "longitude": longitude,
    "hourly": ["rain", "temperature_2m", "snowfall","cloud_cover", "weather_code"],
    "timezone": "Europe/Berlin",
    "forecast_days": 1
  };
  const paramsDaily = {
    "latitude": latitude,
    "longitude": longitude,
    "daily": ["temperature_2m_max", "temperature_2m_min", "weather_code"],
    "timezone": "Europe/Berlin",
    "forecast_days": 7
  };
  const responsesHourly = await fetchWeatherApi(OPEN_METEO_API_URL, paramsHourly);
  const responsesDaily = await fetchWeatherApi(OPEN_METEO_API_URL, paramsDaily);

  // equivale a:
  // const [ response ] = await fetchWeatherApi(OPEN_METEO_API_URL, params);
  const hourlyData = responsesHourly[0];
  const dailyData = responsesDaily[0];

  const hourly = hourlyData.hourly();
  const daily = dailyData.daily();

  const hourlyPrecipitations = hourly.variables(0).valuesArray()
  const hourlyApparentTemperatures = hourly.variables(1).valuesArray()
  const hourlyCloudCoverValues = hourly.variables(3).valuesArray()
  const hourlyWeatherCodes = hourly.variables(4).valuesArray()


  const dailyTemperaturesMax = daily.variables(0).valuesArray();
  const dailyTemperaturesMin = daily.variables(1).valuesArray();
  const dailyWeatherCodes = daily.variables(2).valuesArray();
console.dir(
  {
    dailyTemperaturesMax: dailyTemperaturesMax,
    dailyTemperaturesMin: dailyTemperaturesMin,
    dailyWeatherCodes: dailyWeatherCodes
  }
)
  const weatherData = {
    hourly: [],
    daily: []
  }

  for (let i = 0; i < hourlyPrecipitations.length; i++) {
    weatherData.hourly.push({
      hour: i + 1 > 12 ? `${i - 12} PM` : `${i} AM`, // Conversione in formato 12 ore
      precipitation: hourlyPrecipitations[i],
      temperature: hourlyApparentTemperatures[i],
      cloudCover: hourlyCloudCoverValues[i],
      weather_code: hourlyWeatherCodes[i]

    });
  }

  for (let i = 0; i < dailyTemperaturesMax.length; i++) {
    weatherData.daily.push({
      day: i + 1,
      temperature_max: dailyTemperaturesMax[i],
      temperature_min: dailyTemperaturesMin[i],
      weather_code: dailyWeatherCodes[i]
    });
  }

  setWeather(weatherData);
}

export default updateWeatherData;
