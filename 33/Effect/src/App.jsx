import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [postCount, setPostCount] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const result = await response.json()
        setData(result)
        setError(null) // Resetta l'errore se la chiamata ha successo
      } catch (error) {
        setError(error.message)
      } finally { // viene eseguito sia in caso di successo che di errore
        setLoading(false)
      }
    }

    fetchData()
  }, []) // L'array vuoto [] indica che l'effetto deve essere eseguito solo una volta
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true) // Imposta il caricamento a true prima di iniziare la chiamata
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + postCount)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const result = await response.json()
        setData(result)
        setError(null) // Resetta l'errore se la chiamata ha successo
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [postCount])

  return <div className='container p-4'>
    <h1>useEffect</h1>
    { loading && <h2>Loading...</h2> }
    { error && <p className='alert alert-danger'>Error: {error}</p> }
    { data && (
      <div className='container p-4'>
        <h2>{data.title}</h2>
        <h5>Post numero: {postCount}</h5>
        <p>{data.body}</p>
      </div>
    )}
    <p>Questo esempio mostra come utilizzare useEffect per effettuare una chiamata API al caricamento del componente.
    Il risultato viene memorizzato nello stato e visualizzato una volta che il caricamento è completato.</p>
    <h2>useEffect con dipendenza</h2>
    <button className='btn btn-secondary' onClick={() => setPostCount(postCount + 1)}>Carica post {postCount + 1}</button>
  </div>
}

export default App
