
import { useReducer, useEffect } from 'react'
import styled from '@emotion/styled'

import './App.css'
import History from './History'

// Stati d'animo disponibili
const MOODS = [
  {id:0, label: '😊 Felice', value: 'Felice', backgroundColor: 'darkcyan' },
  {id:1, label: '😐 Neutro', value: 'Neutro', backgroundColor: 'lightsteelblue' },
  {id:2, label: '😞 Triste', value: 'Triste' , backgroundColor: 'darkslategray' }
]

// Stato iniziale per il reducer
const initialState = {
  mood: null,
  dailyMood: null, // Extra: umore medio
  history: [] // Extra: storico delle scelte
}

// EXTRA: calcola l'umore più frequente nello storico
function calculateDailyMood(history) {
  if (history.length === 0) return null;
  const moodCounts = history.reduce((acc, mood) => {
    acc[mood.id] = (acc[mood.id] || 0) + 1;
    return acc;
  }, [0, 0, 0]); // Inizializza con 0 per ogni umore [Felice, Neutro, Triste]
  const maxCount = Math.max(...moodCounts);
  return MOODS[moodCounts.indexOf(maxCount)].value; // Restituisci il valore dell'umore più frequente
}

// Reducer per gestire lo stato dell'umore
// action.type può essere 'SET_MOOD', 'RESET', 'REMOVE_HISTORY'
// action.payload contiene i dati necessari per l'azione, possono esser diversi a seconda del tipo di azione
function moodReducer(state, action) {
  switch (action.type) {
    case 'SET_DAILY_MOOD':
      return {
        ...state,
        dailyMood: action.payload
      };
    case 'SET_MOOD':
      return {
        ...state,
        mood: action.payload,
        history: [...state.history, action.payload]
      };
    case 'REMOVE_HISTORY':
      return {
        ...state,
        history: state.history.filter((_, index) => index !== action.payload)
      };
    case 'RESET':
      return initialState;
  }
}

const calculateTextColor = (backgroundColor) => {
  // Funzione che calcola il colore del testo in base al colore di sfondo
  return backgroundColor === 'darkslategray' ? 'white' : 'black';
}

const ThemedButton = styled.button`
  background-color: ${props => (props.backgroundColor || '#ccc')};
  color: ${props => calculateTextColor(props.backgroundColor)};
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
`

const MoodButton = ({mood, onClick}) => (
  <ThemedButton
    className="btn btn-light"
    backgroundColor={MOODS[mood.id].backgroundColor}
    onClick={onClick}
    aria-label={mood.value}
  >
    {mood.label}
  </ThemedButton>
)

const ResetButton = ({onClick}) => (
  <button
    className="btn btn-outline-danger ms-3"
    onClick={onClick}
  >
    Reset <i className="bi bi-arrow-clockwise"></i>
  </button>
)

function App() {
  // useReducer per gestire lo stato
  const [state, dispatch] = useReducer(moodReducer, initialState)

  useEffect(() => {
    // Calcola l'umore medio quando cambia lo storico
    const dailyMood = calculateDailyMood(state?.history);
    dispatch({ type: 'SET_DAILY_MOOD', payload: dailyMood });
  }, [state?.history]);

  return (
    <div className="container py-4">
      <h1 className="mb-4">Mood Tracker</h1>
      <p className="lead">Come ti senti oggi?</p>
      <div className="mb-3 d-flex gap-2">
        {/* Pulsanti per scegliere l'umore */}
        {MOODS.map(mood => (<MoodButton key={mood.id} mood={mood} onClick={() => dispatch({ type: 'SET_MOOD', payload: mood })} />))}
        {/* Pulsante per resettare lo stato */}
        <ResetButton onClick={() => dispatch({ type: 'RESET' })} />
      </div>

      {/* Mostra l'umore scelto */}
      <div className="mb-4">
        {state?.mood  &&
          <div className={`alert alert-${state.dailyMood === 'Felice' ? 'success' : state?.mood.value === 'Neutro' ? 'info' : 'danger'}`}>
            Ora ti senti: <strong>{state.mood.label}</strong><br />
            Oggi ti sei sentito più spesso: <strong>{state.dailyMood}</strong>
          </div>
        }
      </div>

      {/* Extra: storico delle scelte */}
      <History history={state?.history} dispatch={dispatch} />
    </div>
  )
}

export default App
