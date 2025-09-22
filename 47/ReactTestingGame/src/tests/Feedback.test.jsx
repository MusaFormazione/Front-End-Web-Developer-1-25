import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

import Feedback from '../components/Feedback'

describe('Feedback Component', () => {
  it('mostra correttamente il messaggio passato come prop', () => {
    const testMessage = 'Questo è un messaggio di test'
    render(<Feedback message={testMessage} gameOver={false} testid={'1'}/>)

    const feedbackElement = screen.getByTestId('feedback-message-1')
    expect(feedbackElement).toHaveTextContent(testMessage)
  })

  it('applica lo stile corretto quando il gioco è finito', () => {
    render(<Feedback message="Hai indovinato!" gameOver={true} testid={'2'}/>)

    const feedbackElement = screen.getByTestId('feedback-message-2')

    // Verifichiamo che lo stile sia appropriato per un feedback di vittoria
    // Poiché gli stili vengono applicati direttamente, dobbiamo verificare
    // le proprietà di stile tramite getComputedStyle o direttamente sul DOM
    expect(feedbackElement).toHaveStyle('background-color: rgb(212, 237, 218)')
    expect(feedbackElement).toHaveStyle('color: #155724')
  })

  it('applica lo stile corretto per il messaggio "troppo alto"', () => {
    render(<Feedback message="Troppo alto!" gameOver={false} testid={'3'}/>)

    const feedbackElement = screen.getByTestId('feedback-message-3')

    expect(feedbackElement).toHaveStyle('background-color: rgb(248, 215, 218)')
    expect(feedbackElement).toHaveStyle('color: rgb(114, 28, 36)')
  })

  it('applica lo stile corretto per il messaggio "troppo basso"', () => {
    render(<Feedback message="Troppo basso!" gameOver={false} testid={'4'}/>)

    const feedbackElement = screen.getByTestId('feedback-message-4')

    expect(feedbackElement).toHaveStyle('background-color: rgb(204, 229, 255)')
    expect(feedbackElement).toHaveStyle('color: rgb(0, 64, 133)')
  })
})
