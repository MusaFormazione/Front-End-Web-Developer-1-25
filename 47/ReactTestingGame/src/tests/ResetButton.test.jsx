import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

import ResetButton from '../components/ResetButton'

describe('ResetButton Component', () => {
  it('renderizza correttamente il pulsante di reset', () => {
    render(<ResetButton onReset={() => {}} testid={'1'}/>)

    const buttonElement = screen.getByTestId('reset-button-1')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveTextContent('Gioca di nuovo')
  })

  it('ha uno stile visivamente riconoscibile', () => {
    render(<ResetButton onReset={() => {}} testid={'2'}/>)

    const buttonElement = screen.getByTestId('reset-button-2')
    expect(buttonElement).toHaveStyle('background-color: rgb(40, 167, 69)')
    expect(buttonElement).toHaveStyle('color: rgb(255, 255, 255)')
  })
})
