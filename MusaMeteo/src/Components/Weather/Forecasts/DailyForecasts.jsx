import WeatherImage from "./WeatherImage"

function DailyForecasts({ weather }) {
  console.log(weather)
  return <table>
    <thead>
      <tr>
        <th>Lunedì</th>
        <th>Martedì</th>
        <th>Mercoledì</th>
        <th>Giovedì</th>
        <th>Venerdì</th>
        <th>Sabato</th>
        <th>Domenica</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        {weather.daily?.map((data, index) => {
          console.log('data:', data);
          return <td key={index}>
          <WeatherImage code={data.weather_code} />
          <div>Max: {data.temperature_max.toFixed(2)} °C</div>
          <div>Min: {data.temperature_min.toFixed(2)} °C</div>
        </td>})}
      </tr>
    </tbody>
  </table>
}
export default DailyForecasts
