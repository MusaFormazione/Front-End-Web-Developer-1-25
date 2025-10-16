import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchQuotes } from './store/quoteSlices'
import './App.css'

function App () {
  const dispatch = useDispatch()
  const { quote, loading, error } = useSelector(state => state.quotes)

  useEffect(() => {
    console.log('Componente montato')
  }, [])

  useEffect(() => {
    dispatch(fetchQuotes())
  }, [dispatch])

  const handleFetchQuote = () => {
    dispatch(fetchQuotes())
  }

  return <div className="container">
      <h1>Esempio Redux Thunk</h1>
      { loading && <p className='alert-warning'>Caricamento</p> }
      { error && <p className='alert-danger'>Error: {error}</p> }
      { quote && <p className='alert-info'>{quote.quote}</p>}
      <button className='btn btn-primary' onClick={handleFetchQuote} disabled={loading}>
        Recupera Citazione
      </button>
    </div>
}

export default App
