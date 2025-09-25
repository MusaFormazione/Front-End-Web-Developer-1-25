import WeatherImage from "./WeatherImage"

function getDayOfWeekFromDay(dayOffset) {
  const date = new Date();
  date.setDate(date.getDate() + dayOffset);
  const options = { weekday: 'long' };
  return date.toLocaleDateString('it-IT', options);
}

function DailyForecasts({ weather }) {
  return <table className="bg-secondary-subtle p-1 shadow-lg rounded w-75">
    <thead>
      <tr>
        <th className="text-center py-2">{getDayOfWeekFromDay(1)}</th>
        <th className="text-center py-2">{getDayOfWeekFromDay(2)}</th>
        <th className="text-center py-2">{getDayOfWeekFromDay(3)}</th>
        <th className="text-center py-2">{getDayOfWeekFromDay(4)}</th>
        <th className="text-center py-2">{getDayOfWeekFromDay(5)}</th>
        <th className="text-center py-2">{getDayOfWeekFromDay(6)}</th>
        <th className="text-center py-2">{getDayOfWeekFromDay(7)}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        {weather.daily?.map((data, index) => {
          return <td key={index} className="text-center p-2">
            <WeatherImage weather_code={data.weather_code} />
            <div className='p-2 text-wrap'>
              <p>{weather.description}</p>
              <p>Max: {data.temperature_max.toFixed(2)} °C</p>
              <p>Min: {data.temperature_min.toFixed(2)} °C</p>
            </div>
        </td>})}
      </tr>
    </tbody>
  </table>
}
export default DailyForecasts
