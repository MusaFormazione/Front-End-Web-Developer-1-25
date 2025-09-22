import HourlyForecasts from "./HourlyForecasts";
import WeatherCard from "./WeatherCard";

function Forecasts({ weather, setDebug }) {
  return <>
    <div className="d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
      <WeatherCard daily={weather.daily} setDebug={setDebug} />
    </div>
    <div className="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
      <HourlyForecasts weather={weather} />
    </div>
  </>
}

export default Forecasts
