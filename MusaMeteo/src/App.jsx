import { useState, useEffect } from 'react';

import updateGeolocation from './Service/geolocalization'
import updateWeatherData from './Service/openmeteo'

import './App.css'
import Position from './Components/Position';
import Forecasts from './Components/Forecasts';
import Debug from './Components/Debug';

function App () {
  const [geolocation, setGeolocation] = useState({longitude: null, latitude: null});
  const [weather, setWeather] = useState([]);
  const [debug, setDebug] = useState(false);

  useEffect(() => {
    updateGeolocation(setGeolocation)
  }, []);

  useEffect(() => {
    if (geolocation.latitude && geolocation.longitude) {
      updateWeatherData(geolocation, setWeather);
    }
  }, [geolocation]);

  useEffect(() => {
    setDebug(weather)
  }, [weather]);

  return <div className="container">
      <h1 className='h2'>Musa Meteo</h1>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
          { weather && weather.hourly ?
            <Forecasts weather={weather} /> :
            <p className="alert alert-info">Caricamento...</p>
          }
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <Position geolocation={geolocation} />
        </div>
      </div>
      <Debug>{debug}</Debug>
    </div>
}

export default App
