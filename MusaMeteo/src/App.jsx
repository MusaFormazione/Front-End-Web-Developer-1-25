import { useState, useEffect } from 'react';

import updateGeolocation from './Service/geolocalization'
import updateWeatherData from './Service/openmeteo'

import './App.css'
import Position from './Components/Position';
import Forecasts from './Components/Forecasts';

function App () {
  const [geolocation, setGeolocation] = useState({longitude: null, latitude: null});
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    updateGeolocation(setGeolocation)
  }, []);

  useEffect(() => {
    if (geolocation.latitude && geolocation.longitude) {
      updateWeatherData(geolocation, setWeather);
    }
  }, [geolocation]);

  return <div className="container">
      <h1 className='h2'>Musa Meteo</h1>
      <div className="row">
        <div className="col-8">
          <Forecasts weather={weather} />
        </div>
        <div className="col-4">
          <Position geolocation={geolocation} />
        </div>
      </div>
    </div>
}

export default App
