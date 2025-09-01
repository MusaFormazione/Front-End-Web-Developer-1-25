import Hourly from "./Hourly";
import Daily from "./Daily";
import WeatherCard from "./WeatherCard";

function Forecasts({ weather, setDebug }) {
  return <>
    <h3>Previsione Giornaliera</h3>
    {/* <table className="table table-bordered d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
      <thead>
        <tr>
          <th>Ora</th>
          <th>Precipitazioni (mm)</th>
          <th>Temperatura (C)</th>
        </tr>
      </thead>
      <tbody>
        {weather.hourly.map((data, index) => <Hourly key={index} hourly={data} /> )}
      </tbody>
    </table> */}
    <WeatherCard daily={weather.daily} setDebug={setDebug} />
    <div className="d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
      <Daily weather={weather} />
    </div>
  </>
}

export default Forecasts
