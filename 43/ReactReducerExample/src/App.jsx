
import { useReducer } from 'react'
import './App.css'

function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      // possiamo implementare logiche + avanzate ad esempio non far andare il counter < 0
      return { count: state.count > 0 ? state.count - 1 : 0 };
    default:
      return state
  }
}

const personaggi = [
  { name: 'Paperino', animale: 'Papera'},
  { name: 'Topolino', animale: 'Topo'},
  { name: 'Pippo', animale: 'Cane'}
]

function Personaggio({ personaggio, isPreferito, preferitiDispatch }) {
  const { name, animale } = personaggio;
  return <div className='p-3 m-3'>
    <h2>{name}</h2>
    <p>Animale: {animale}</p>
    {isPreferito && <span>❤️</span>}
    {isPreferito && <button className='btn btn-danger'
      onClick={() => preferitiDispatch({ type: "elimina-preferito", id: name })}>
        Rimuovi dai preferiti
      </button>
    }
    {!isPreferito && <button className='btn btn-primary'
      onClick={() => preferitiDispatch({ type: "aggiungi-preferito", id: name })}>
      Aggiungi ai preferiti
    </button>}
  </div>
}

function personaggioPreferitoReducer(state, action) {
  if(action.type === "elimina-preferito") {
    return state.filter(p => p !== action.id)
  }
  if(action.type === "aggiungi-preferito" && !state.includes(action.id)) {
    return [...state,action.id]
  }
  if(action.type === "elimina-tutti" ) {
    return []
  }
}

function App() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  const [preferitiState, preferitiDispatch] = useReducer(personaggioPreferitoReducer, [])

  return <div className="container">
    <h1>React Reducer</h1>
    <p>Contatore: {state.count}</p>
    <button className="btn btn-secondary m-2" onClick={() => dispatch({ type: 'increment' })}>Incrementa</button>
    <button className="btn btn-secondary m-2" onClick={() => dispatch({ type: 'decrement' })}>Decrementa</button>
    { personaggi.map(p => <Personaggio
      personaggio={p}
      isPreferito={preferitiState.includes(p.name)}
      preferitiDispatch={preferitiDispatch} />) }
    <button className='btn btn-danger' onClick={() => preferitiDispatch({ type: "elimina-tutti" })}>Rimuovi tutti i preferiti</button>
  </div>
}

export default App
