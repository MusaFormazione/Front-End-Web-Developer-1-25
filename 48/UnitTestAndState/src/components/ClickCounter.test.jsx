import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

import ClickCounter from './ClickCounter'

describe('ClickCounter Component', () => {

  afterEach(() => {
    cleanup()
  })

  it('renderizza il componente con valore iniziale 0', () => {
    // Renderizza il componente
    render(<ClickCounter />)

    // Verifica che il valore iniziale sia 0
    const counterValue = screen.getByTestId('counter-value')
    expect(counterValue).toHaveTextContent('0')
  })

  it('incrementa il valore quando si clicca sul pulsante incrementa', () => {
    // Renderizza il componente
    render(<ClickCounter />)

    // Trova il pulsante di incremento
    const incrementButton = screen.getByTestId('increment-button')

    // Clicca il pulsante
    fireEvent.click(incrementButton)

    // Verifica che il valore sia stato incrementato a 1
    const counterValue = screen.getByTestId('counter-value')
    expect(counterValue).toHaveTextContent('1')
  })

  it('decrementa il valore quando si clicca sul pulsante decrementa', () => {
    // Renderizza il componente
    render(<ClickCounter />)

    // Trova il pulsante di decremento
    const decrementButton = screen.getByTestId('decrement-button')

    // Clicca il pulsante
    fireEvent.click(decrementButton)

    // Verifica che il valore sia stato decrementato a -1
    const counterValue = screen.getByTestId('counter-value')
    expect(counterValue).toHaveTextContent('-1')
  })

  it('resetta il valore a 0 quando si clicca sul pulsante reset', () => {
    // Renderizza il componente
    render(<ClickCounter />)

    // Incrementa il contatore prima di resettarlo
    const incrementButton = screen.getByTestId('increment-button')
    fireEvent.click(incrementButton)
    fireEvent.click(incrementButton)

    // Verifica che il valore sia stato incrementato
    const counterValue = screen.getByTestId('counter-value')
    expect(counterValue).toHaveTextContent('2')

    // Trova il pulsante di reset e clicca
    const resetButton = screen.getByTestId('reset-button')
    fireEvent.click(resetButton)

    // Verifica che il valore sia tornato a 0
    expect(counterValue).toHaveTextContent('0')
  })

  it('non incrementa oltre il valore massimo (10)', () => {
    // Renderizza il componente
    render(<ClickCounter />)

    // Trova il pulsante di incremento e il valore del contatore
    const incrementButton = screen.getByTestId('increment-button')
    const counterValue = screen.getByTestId('counter-value')

    // Clicca il pulsante 11 volte (dovrebbe fermarsi a 10)
    for (let i = 0; i < 11; i++) {
      fireEvent.click(incrementButton)
      expect(counterValue).toHaveTextContent(i+1 > 10 ? '10' : i+1 )
    }

    // Verifica che il valore sia stato limitato a 10
    expect(counterValue).toHaveTextContent('10')

    // Verifica che ci sia un messaggio di avviso
    const maxMessage = screen.getByText('Hai raggiunto il valore massimo!')
    expect(maxMessage).toBeInTheDocument()
  })

  it('non decrementa sotto il valore minimo (-10)', () => {
    // Renderizza il componente
    render(<ClickCounter />)

    // Trova il pulsante di decremento e il valore del contatore
    const decrementButton = screen.getByTestId('decrement-button')
    const counterValue = screen.getByTestId('counter-value')

    // Clicca il pulsante 11 volte (dovrebbe fermarsi a -10)
    for (let i = 0; i < 11; i++) {
      fireEvent.click(decrementButton)
    }

    // Verifica che il valore sia stato limitato a -10
    expect(counterValue).toHaveTextContent('-10')

    // Verifica che ci sia un messaggio di avviso
    const WRONGminMessage = screen.queryByText('Hai raggiunto il valore minimo!')
    expect(WRONGminMessage).not.toBeInTheDocument()
    const minMessage = screen.getByText('min value')
    expect(minMessage).toBeInTheDocument()
    
  })
})
