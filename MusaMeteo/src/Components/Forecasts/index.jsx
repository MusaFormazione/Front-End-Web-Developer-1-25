import Hourly from "./Hourly";
function Forecasts({ weather }) {
  console.log('Weather data:', weather);
  return <>
    <h3>Forecasts</h3>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Time</th>
          <th>Precipitation (mm)</th>
          <th>Temperature (C)</th>
        </tr>
      </thead>
      <tbody>
        { weather && weather.map((data, index) => <Hourly key={index} hourly={data} /> )}
      </tbody>
    </table>
  </>
}

export default Forecasts
