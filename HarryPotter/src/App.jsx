import { useState, useEffect } from 'react'

import { getBooks } from './Services/Books'
import { getCharacters } from './Services/Characters'

import MusaTitle from './Components/Musa/MusaTitle'
import MusaNavbar from './Components/Musa/MusaNavbar'
import MusaGhostCardList from './Components/Musa/MusaGhostCardList'
import { MusaAlert } from './Components/Musa/MusaAlert'
import { MusaContainer, MusaRow, MusaCol } from './Components/Musa/MusaLayout/' // notare import da index.jsx
// DA EVITARE ma equivalente a:
// import MusaLayout from './Components/MusaLayout'
// const { MusaContainer, MusaRow } = MusaLayout

import HPBookList from './Components/HP/HPBookList'
import HPCharacterList from './Components/HP/HPCharactersList'

import './App.css'

const CHARACTERS = 'characters'
const BOOKS = 'books'
const SPELLS = 'spells'
const HOUSES = 'houses'

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
  // Inizializza lo stato per le pagine attive
  // NOTA: questa struttura è dichiarata dentro il componente App per evitare
  // di dover gestire il setPageList come parametro di updatePageList
  const initialPageListState = [
    { id: CHARACTERS, label: 'Personaggi', action: () => updatePageList(CHARACTERS), active: true },
    { id: BOOKS, label: 'Libri', action: () => updatePageList(BOOKS), active: false },
    { id: SPELLS, label: 'Incantesimi', action: () => updatePageList(SPELLS), active: false },
    { id: HOUSES, label: 'Case', action: () => updatePageList(HOUSES), active: false }
  ]

  const intialErrorState = [
    { id: CHARACTERS, error: null },
    { id: BOOKS, error: null },
    { id: SPELLS, error: null },
    { id: HOUSES, error: null }
  ]

  const [loading, setLoading] = useState(true)
  const [books, setBooks] = useState([])
  const [characters, setCharacters] = useState([])
  const [error, setError] = useState(intialErrorState)
  const [pageList, setPageList] = useState(initialPageListState)
  const [esempio, setEsempio] = useState('') // Esempio di stato aggiuntivo

  // Aggiorna lo stato della lista delle pagine attive
  // NOTA: questa funzione è definita dentro il componente App per poter accedere a
  // setPageList senza doverlo passare come parametro
  const updatePageList = (activePage) => {
    setEsempio('Ciao') // Esempio di aggiornamento di uno stato aggiuntivo
    setEsempio(prev => prev + ' Mondo')
    console.log('Updating page list setting active:', activePage)
    setPageList(prevList => prevList.map(item => ({
      ...item, // Destruttura l'oggetto esistente aggiungendo (forzando) la proprietà active
      active: item.id.toLowerCase() === activePage.toLowerCase() // active true SOLO se activePage
    })
    )
    )
  }

  const updateErrorState = (id, error) => {
    setError(prev => prev.map(i => {
      if (i.id === id) {
        return { ...i, error } // Aggiorna l'errore per l'elemento specifico
      }
      return i // Mantieni gli altri errori invariati
    }))
  }

  useEffect(() => {
    fetchBooks(setBooks, (error) => updateErrorState(BOOKS, error), setLoading)
    fetchCharacters(setCharacters, (error) => updateErrorState(CHARACTERS, error), setLoading)
  }, [])

  // Utilizzo di un approccio non dichiarativo ma imperativo alla visualizzazione
  // dei personaggi
  // const charactersElement= pageList.find(i => i.id === CHARACTERS)
  // const charactersActive = charactersElement?.active
  return (
    <MusaContainer>
      <MusaRow>
        <MusaTitle>Harry Potter</MusaTitle>
      </MusaRow>
      <MusaRow>
        <MusaCol className='p-3'>
          <MusaNavbar items={pageList} title='Harry Potter' />
        </MusaCol>
      </MusaRow>
      <MusaRow>
        {/* charactersActive && <p> elenco dei personaggi</p> */}
        {pageList.find(i => i.id === CHARACTERS)?.active &&
          <HPCharacterList
            characters={characters} loading={loading}
            error={error.find(i => i.id === CHARACTERS)?.error}
          />}
        {pageList.find(i => i.id === BOOKS)?.active &&
          <HPBookList
            books={books} loading={loading}
            error={error.find(i => i.id === BOOKS)?.error}
          />}
        {pageList.find(i => i.id === SPELLS)?.active &&
          <MusaGhostCardList message='Magie ancora da implementare' />}
        {pageList.find(i => i.id === HOUSES)?.active &&
          <MusaAlert>Case da implementare</MusaAlert>}
      </MusaRow>
    </MusaContainer>
  )
}

export default App
