import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import GuessForm from './GuessForm'
import Feedback from './Feedback'
import ResetButton from './ResetButton'

// Container principale del gioco con stile Emotion
const GameContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

// Titolo del gioco
const GameTitle = styled.h2`
  color: #343a40;
  margin-bottom: 20px;
`

// Contatore dei tentativi
const AttemptsCounter = styled.p`
  font-size: 18px;
  color: #495057;
  margin-top: 20px;
`

// Componente principale del gioco
function Game({ testid}) {
  // Stato per il numero da indovinare
  const [targetNumber, setTargetNumber] = useState(0)
  // Stato per il numero di tentativi
  const [attempts, setAttempts] = useState(0)
  // Stato per il numero inserito dall'utente
  const [userGuess, setUserGuess] = useState('')
  // Stato per il messaggio di feedback
  const [feedback, setFeedback] = useState('')
  // Stato per determinare se il gioco è finito
  const [gameOver, setGameOver] = useState(false)

  // ESERCIZIO EXTRA: provare a modificare questa lista di stati in un unico reducer

  // Funzione per generare un nuovo numero casuale tra 1 e 100
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1
  }

  // Funzione per inizializzare il gioco, definita all'interno dell'effetto per evitare dipendenze
  useEffect(() => {
    // Inizializzazione del gioco
    const initGame = () => {
      const newNumber = generateRandomNumber()
      setTargetNumber(newNumber)
      setAttempts(0)
      setUserGuess('')
      setFeedback('Indovina un numero tra 1 e 100')
      setGameOver(false)
    }

    initGame()
  }, [])

  // Funzione per gestire il tentativo dell'utente
  const handleGuess = (guess) => {
    const numberGuess = parseInt(guess, 10)

    // Controllo se è un numero valido
    if (isNaN(numberGuess)) {
      setFeedback('Per favore inserisci un numero valido!')
      return
    }

    // Incremento il contatore di tentativi
    setAttempts(prevAttempts => prevAttempts + 1)

    // Controllo se il numero è corretto
    if (numberGuess === targetNumber) {
      setFeedback('Hai indovinato!')
      setGameOver(true)
    } else if (numberGuess > targetNumber) {
      setFeedback('Troppo alto!')
    } else {
      setFeedback('Troppo basso!')
    }

    // Resetto l'input
    setUserGuess('')
  }

  // Funzione per resettare il gioco
  const resetGame = () => {
    setTargetNumber(generateRandomNumber())
    setAttempts(0)
    setUserGuess('')
    setFeedback('Indovina un numero tra 1 e 100')
    setGameOver(false)
  }

  return (
    <GameContainer>
      <GameTitle>Indovina il Numero</GameTitle>

      <Feedback message={feedback} gameOver={gameOver} />

      {/* Form per l'inserimento del tentativo */}
      <GuessForm
        userGuess={userGuess}
        setUserGuess={setUserGuess}
        onGuess={handleGuess}
        disabled={gameOver}
      />

      <AttemptsCounter data-testid={`attempts-counter${testid ? `-${testid}` : ''}`}>
        Tentativi: {attempts}
      </AttemptsCounter>

      {/* Pulsante per resettare il gioco */}
      {gameOver && <ResetButton onReset={resetGame} />}
    </GameContainer>
  )
}

export default Game
