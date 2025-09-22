import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

import GuessForm from '../components/GuessForm'

describe('GuessForm Component', () => {
  it('renderizza correttamente il form di input', () => {

    render(
      <GuessForm
        userGuess=""
        setUserGuess={() => {}}
        onGuess={() => {}}
        disabled={false}
        testid={'1'}
      />
    )

    // Verifico che l'input e il pulsante siano presenti
    const inputElement = screen.getByTestId('guess-input-1')
    const buttonElement = screen.getByTestId('guess-button-1')

    expect(inputElement).toBeInTheDocument()
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveTextContent('Prova')
  })

  it('disabilita correttamente il campo input quando il gioco è finito', () => {

    render(
      <GuessForm
        userGuess=""
        setUserGuess={() => {}}
        onGuess={() => {}}
        disabled={true}
        testid={'2'}
      />
    )

    const inputElement = screen.getByTestId('guess-input-2')
    expect(inputElement).toBeDisabled()
  })

  it('disabilita correttamente il pulsante quando il form è vuoto', () => {

    render(
      <GuessForm
        userGuess=""
        setUserGuess={() => {}}
        onGuess={() => {}}
        disabled={false}
        testid={'3'}
      />
    )

    const buttonElement = screen.getByTestId('guess-button-3')
    expect(buttonElement).toBeDisabled()
  })
})
