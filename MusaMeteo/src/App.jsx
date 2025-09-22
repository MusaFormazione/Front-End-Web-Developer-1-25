import { useState, useEffect } from 'react';

import updateGeolocation from './Service/geolocalization'
import updateWeatherData from './Service/openmeteo'

import Position from './Components/Weather/Position';
import Forecasts from './Components/Weather/Forecasts';
import Debug from './Components/Weather/Debug';

import MusaContainer from './Components/DesignSystem/MusaLayout/MusaContainer';
import MusaRow from './Components/DesignSystem/MusaLayout/MusaRow';
import MusaCol from './Components/DesignSystem/MusaLayout/MusaCol';
import MusaTitle from './Components/DesignSystem/MusaTitle';
import MusaNavbar from './Components/DesignSystem/MusaNavbar';
import { MusaAlert } from './Components/DesignSystem/MusaAlert';


import './App.css'

const initalGeolocation = {
  longitude: null,
  latitude: null,
  city: null
};

function App () {
  const [geolocation, setGeolocation] = useState(initalGeolocation);
  const [weather, setWeather] = useState([]);
  const [positionVisible, setPositionVisible] = useState(false);
  const [debug, setDebug] = useState(null);

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

  return <MusaContainer>
      <MusaTitle>Musa Meteo</MusaTitle>
      <MusaRow>
        <div className="mb-3">
          <MusaNavbar title="Previsioni" items={[
            { label: positionVisible ? 'nascondi posizione' : 'mostra posizione',
              action: () => { setPositionVisible(prev => !prev) }}
            ]}/>
        </div>
      </MusaRow>
      <MusaRow>
          { weather && weather.hourly ?
            <Forecasts weather={weather} setDebug={setDebug} positionState={{ setPositionVisible, positionVisible }} /> :
            <MusaCol xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}><MusaAlert>Caricamento...</MusaAlert> </MusaCol>
          }
        <MusaCol xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
          {positionVisible && <Position geolocation={geolocation} />}
        </MusaCol>
      </MusaRow>
      <Debug>{debug}</Debug>
    </MusaContainer>
}

export default App
