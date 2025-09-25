import HourlyForecasts from "./HourlyForecasts";
import DailyForecasts from "./DailyForecasts";
import WeatherCard from "./WeatherCard";

function Forecasts({ weather, showDaily, setDebug }) {
  return <>
    <div className="d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none mt-3">
      <WeatherCard daily={weather.daily} setDebug={setDebug} />
    </div>
    <div className="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
      {showDaily ? <DailyForecasts weather={weather} setDebug={setDebug} /> : <HourlyForecasts weather={weather} setDebug={setDebug} />}
    </div>
  </>
}

export default Forecasts
