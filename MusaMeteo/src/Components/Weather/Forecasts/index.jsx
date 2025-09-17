import Hourly from "./Hourly";
import Daily from "./Daily";
import MusaNavbar from "../../DesignSystem/MusaNavbar";
import WeatherCard from "./WeatherCard";

function Forecasts({ weather, setDebug, positionState}) {
  const { positionVisible, setPositionVisible } = positionState;
  return <>
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
    <div data-testid="meteo-navbar" id="meteo-navbar" className="d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block">
      <MusaNavbar title="Previsione" items={[
        { label: positionVisible ? 'nascondi posizione' : 'mostra posizione', action: () => { setPositionVisible(prev => !prev) }}]}/>
    </div>
    <WeatherCard daily={weather.daily} setDebug={setDebug} />
    <div className="d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
      <Daily weather={weather} />
    </div>
  </>
}

export default Forecasts
