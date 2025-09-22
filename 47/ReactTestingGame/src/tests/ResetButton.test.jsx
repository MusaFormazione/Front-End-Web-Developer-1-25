import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

import ResetButton from '../components/ResetButton'

describe('ResetButton Component', () => {
  it('renderizza correttamente il pulsante di reset', () => {
    const mockResetFn = vi.fn()
    render(<ResetButton onReset={mockResetFn} testid={'1'}/>)

    const buttonElement = screen.getByTestId('reset-button-1')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveTextContent('Gioca di nuovo')
  })

  it('ha uno stile visivamente riconoscibile', () => {
    const mockResetFn = vi.fn()
    render(<ResetButton onReset={mockResetFn} testid={'2'}/>)

    const buttonElement = screen.getByTestId('reset-button-2')
    expect(buttonElement).toHaveStyle('background-color: rgb(40, 167, 69)')
    expect(buttonElement).toHaveStyle('color: rgb(255, 255, 255)')
  })
})
