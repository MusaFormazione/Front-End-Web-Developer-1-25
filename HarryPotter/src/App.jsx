import { useState, useEffect } from 'react'
import { getBooks }  from './Services/Characters'

import { MusaContainer, MusaRow } from './Components/MusaLayout/' // notare import da index.jsx
// DA EVITARE ma equivalente a:
// import MusaLayout from './Components/MusaLayout'
// const { MusaContainer, MusaRow } = MusaLayout
import MusaTitle from './Components/MusaTitle'
import HPBook from './Components/HPBook'

import './App.css'

function App() {
  const [ loading, setLoading ] = useState(true)
  const [books, setBooks] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBooks = async () => {
        await getBooks('it', setBooks, setError)
        setLoading(false) // Imposta il caricamento a false dopo aver ottenuto i dati
    }

    fetchBooks()
  }, [])

  return <MusaContainer>
    <MusaRow>
      <MusaTitle>Harry Potter</MusaTitle>
    </MusaRow>
    <MusaRow>1
      {books && books.map( book => <HPBook key={book.index} book={book} /> )}
      {loading && <h2>Loading...</h2>}
    </MusaRow>
    {error && <p className='alert alert-danger'>Error: {error}</p>}
  </MusaContainer>
}

export default App
