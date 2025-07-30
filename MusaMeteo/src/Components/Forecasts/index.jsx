import Hourly from "./Hourly";
import Daily from "./Daily";

function Forecasts({ weather }) {
  return <>
    <h3>Forecasts</h3>
    <table className="table table-bordered d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
      <thead>
        <tr>
          <th>Time</th>
          <th>Precipitation (mm)</th>
          <th>Temperature (C)</th>
        </tr>
      </thead>
      <tbody>
        {weather.hourly.map((data, index) => <Hourly key={index} hourly={data} /> )}
      </tbody>
    </table>
    <div className="d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
      <Daily weather={weather} />
    </div>
  </>
}

export default Forecasts
