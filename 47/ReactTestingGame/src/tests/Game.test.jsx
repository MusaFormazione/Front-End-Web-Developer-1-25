import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

import Game from '../components/Game'


describe('Game Component', () => {
  it('renderizza correttamente il titolo del gioco', () => {
    render(<Game testid={'0'}/>)
    expect(screen.getByText('Indovina il Numero')).toBeInTheDocument()
  })

  it('inizializza il contatore di tentativi a 0', () => {
    render(<Game testid={'1'}/>)
    expect(screen.getByTestId('attempts-counter-1')).toHaveTextContent('Tentativi: 0')
  })

  it('non mostra il pulsante di reset all\'inizio del gioco', () => {
    render(<Game testid={'2'} />)
    expect(screen.queryByTestId('reset-button-2')).not.toBeInTheDocument()
  })
})
