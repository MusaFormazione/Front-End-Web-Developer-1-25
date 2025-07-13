import { useState, useEffect } from 'react'

import { getBooks } from './Services/Books'

import { MusaContainer, MusaRow, MusaCol } from './Components/Musa/MusaLayout/' // notare import da index.jsx
// DA EVITARE ma equivalente a:
// import MusaLayout from './Components/MusaLayout'
// const { MusaContainer, MusaRow } = MusaLayout
import MusaTitle from './Components/Musa/MusaTitle'
import MusaButton from './Components/Musa/MusaButton'

import HPBookList from './Components/HP/HPBookList'

import './App.css'

const fetchBooks = async (setBooks, setError, setLoading) => {
  setLoading(true) // Imposta il caricamento a true prima di iniziare la richiesta
  console.log('Fetching books...')
  await getBooks('it', setBooks, setError)
  setLoading(false) // Imposta il caricamento a false dopo aver ottenuto i dati
}


function App () {
  const [loading, setLoading] = useState(true)
  const [books, setBooks] = useState([])
  const [characters, setCharacters] = useState([])
  const [error, setError] = useState(null)
  const [charactersPageActive, setCharactersPageActive] = useState(false)
  const [booksPageActive, setBooksPageActive] = useState(true)

  useEffect(() => {
    fetchBooks(setBooks, setError, setLoading)
  }, [])

  const handleActivePage = (page) => {
    if (page === 'characters') {
      setCharactersPageActive(true)
      setBooksPageActive(false)
    } else if (page === 'books') {
      setCharactersPageActive(false)
      setBooksPageActive(true)
    }
  }
  return (
    <MusaContainer>
      <MusaRow>
        <MusaTitle>Harry Potter</MusaTitle>
      </MusaRow>
      <MusaRow>
        <MusaCol>
          <MusaButton
            variant={charactersPageActive ? 'primary' : 'secondary'}
            onClick={() => handleActivePage('characters')}>
              Characters
          </MusaButton>
          <MusaButton
            variant={ booksPageActive ? 'primary' : 'secondary'}
            onClick={() => handleActivePage('books')}>
              Books
          </MusaButton>
        </MusaCol>
      </MusaRow>
      <MusaRow>
        { charactersPageActive && <p>Characters page is not implemented yet.</p> }
        { booksPageActive && <HPBookList books={books} loading={loading} error={error} /> }
      </MusaRow>
      {error && <p className='alert alert-danger'>Error: {error}</p>}
    </MusaContainer>
  )
}

export default App
