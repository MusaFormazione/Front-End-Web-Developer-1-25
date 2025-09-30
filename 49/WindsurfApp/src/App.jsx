import { useReducer } from 'react'

import MeteoButtons from './Components/MeteoButtons.jsx'

import './App.css'
import Knots from './Components/Knots.jsx'
import Notice from './Components/Notice.jsx'
import WindSurfing from './Components/WindSurfing.jsx'

const intialState = {
  meteo: 'sun',
  knots: 0,
  message: 'WindSurf non praticabile, poco vento',
  alertState: 'secondary'
}

function getWindConditionsMessage(knots) {
  console.log('knots', knots)
  if (knots < 12 ) {
    return 'WindSurf non praticabile, poco vento'
  }
  if (knots <= 24) {
    return 'Condizioni perfette per il windsurf'
  }
  return 'Condizioni da esperto'
}

function determineAlertState(knots) {
  return knots < 12 ? 'secondary' : knots <24 ? 'success' : 'warning'
}

function meteoReducer(state, action) {
  switch (action.type) {
    case 'SET_METEO':
      return { ...state, meteo: action.payload }
    case 'SET_KNOTS':
      return {
        ...state,
        knots: action.payload,
        message: getWindConditionsMessage(action.payload),
        alertState: determineAlertState(action.payload)
      }
    default:
      return state
  }
}

function App () {
  const [state, dispatch] = useReducer(meteoReducer, intialState)

  return <div className="container">
      <h1 className="text-center m-2 h3">Windsurf App</h1>
      <WindSurfing knots={state.knots} meteo={state.meteo} />
      <MeteoButtons meteo={state.meteo} setMeteo={payload => dispatch({ type: 'SET_METEO', payload })} />
      <Knots knots={state.knots} setKnots={payload => dispatch({ type: 'SET_KNOTS', payload })} />
      <Notice message={state.message} type={state.alertState} />
    </div>
}

export default App
