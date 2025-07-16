import { useState, useEffect } from 'react'

import { getBooks } from './Services/Books'
import { getCharacters } from './Services/Characters'

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

const fetchCharacters = async (setCharacters, setError, setLoading) => {
  setLoading(true) // Imposta il caricamento a true prima di iniziare la richiesta
  console.log('Fetching characters...')
  await getCharacters('it', setCharacters, setError)
  setLoading(false) // Imposta il caricamento a false dopo aver ottenuto i dati
}

function App () {
  const [loading, setLoading] = useState(true)
  const [books, setBooks] = useState([])
  const [characters, setCharacters] = useState([])
  const [error, setError] = useState(null)
  const [charactersPageActive, setCharactersPageActive] = useState(false)
  const [booksPageActive, setBooksPageActive] = useState(true)
  const [spellPageActive, setSpellPageActive] = useState(false)
  const [housesPageActive, setHousesPageActive] = useState(false)

  useEffect(() => {
    fetchBooks(setBooks, setError, setLoading)
    fetchCharacters(setCharacters, setError, setLoading)
  }, [])

  const handleActivePage = (page) => {
    if (page === 'characters') {
      setCharactersPageActive(true)
      setBooksPageActive(false)
      setSpellPageActive(false)
      setHousesPageActive(false)
    } else if (page === 'books') {
      setCharactersPageActive(false)
      setBooksPageActive(true)
      setSpellPageActive(false)
      setHousesPageActive(false)
    } else if (page === 'spells') {
      setCharactersPageActive(false)
      setBooksPageActive(false)
      setSpellPageActive(true)
      setHousesPageActive(false)
    } else if (page === 'houses') {
      setCharactersPageActive(false)
      setBooksPageActive(false)
      setSpellPageActive(false)
      setHousesPageActive(true)
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
            variant={spellPageActive ? 'primary' : 'secondary'}
            onClick={() => handleActivePage('spells')}>
              Magie
          </MusaButton>
          <MusaButton variant={housesPageActive ? 'primary' : 'secondary'}
            onClick={() => handleActivePage('houses')}>
            Casate
          </MusaButton>
          <MusaButton
            variant={charactersPageActive ? 'primary' : 'secondary'}
            onClick={() => handleActivePage('characters')}>
              Personaggi
          </MusaButton>
          <MusaButton
            variant={ booksPageActive ? 'primary' : 'secondary'}
            onClick={() => handleActivePage('books')}>
              Libri
          </MusaButton>
        </MusaCol>
      </MusaRow>
      <MusaRow>
        { charactersPageActive && characters.map((character, i) => <p key={i}>{character.fullName}</p>) }
        { booksPageActive && <HPBookList books={books} loading={loading} error={error} /> }
        { spellPageActive && <p>Magie da implementare</p> }
        { housesPageActive && <p>Casate da implementare</p> }
      </MusaRow>
    </MusaContainer>
  )
}

export default App
