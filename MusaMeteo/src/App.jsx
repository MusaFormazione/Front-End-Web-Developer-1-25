import { useState, useEffect } from 'react';

import updateGeolocation from './Services/geolocalization'
import updateWeatherData from './Services/openmeteo'


import Position from './Components/Weather/Position';
import Forecasts from './Components/Weather/Forecasts';
import Debug from './Components/Weather/Debug';

import MusaContainer from './Components/DesignSystem/MusaLayout/MusaContainer';
import MusaRow from './Components/DesignSystem/MusaLayout/MusaRow';
import MusaCol from './Components/DesignSystem/MusaLayout/MusaCol';
import MusaTitle from './Components/DesignSystem/MusaTitle';
import MusaNavbar from './Components/DesignSystem/MusaNavbar';
import { MusaLoading } from './Components/DesignSystem/MusaAlert';

import './App.css'

const initalGeolocation = {
  longitude: null,
  latitude: null,
  city: null
};

const ShowPosition = () => {
  return <i className="ms-3 bi bi-geo-alt-fill" data-bs-toggle="modal" data-bs-target="#positionModal"></i>
}

const HidePosition = () => {
  return <i className="ms-3 bi bi-geo-alt" data-bs-toggle="modal" data-bs-target="#positionModal"></i>
}


const ShowDaily = () => {
  return <span className='w-25'> Giornaliere <i className="bi bi-calendar-event ms-2"></i></span>
}

const ShowHourly = () => {
  return <span className='w-25'> Orarie <i className="bi bi-hourglass-split ms-2"></i></span>
}

function App () {
  const [geolocation, setGeolocation] = useState(initalGeolocation);
  const [weather, setWeather] = useState([]);
  const [positionVisible, setPositionVisible] = useState(false);
  const [showDaily, setShowDaily] = useState(true);
  const [debug, setDebug] = useState(false)

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
      <MusaRow className="mb-3 d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
          <MusaNavbar title="Previsioni" items={[
            {
              label: showDaily? <ShowDaily /> : <ShowHourly />,
              action: () => { setShowDaily(d => !d) }
            },
            {
              label: positionVisible? <HidePosition /> : <ShowPosition />,
              action: () => { setPositionVisible(p => !p) }
            }]}
          />
      </MusaRow>
      <MusaRow>
          { weather && weather.hourly ?
            <Forecasts weather={weather} showDaily={showDaily} setDebug={setDebug} /> :
            <MusaLoading>Caricamento in corso delle previsioni</MusaLoading>
          }
        <MusaCol xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
          <Position geolocation={geolocation} />
        </MusaCol>
      </MusaRow>
      <Debug>{debug}</Debug>
    </MusaContainer>
}

export default App
