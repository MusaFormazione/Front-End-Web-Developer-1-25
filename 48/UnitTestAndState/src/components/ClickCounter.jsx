import { useState } from 'react'

function MessaggioLimite({count, limite, children}) {
  return count === limite && <div className="text-danger mt-2 p-2">
    {children}
  </div>
}

/**
 * Componente ClickCounter - Un semplice contatore con funzionalità di incremento, decremento e reset
 *
 * @returns {JSX.Element} - Il componente renderizzato
 */
function ClickCounter() {
  // Stato per il contatore, inizializzato a 0
  const [count, setCount] = useState(0)

  // Valori minimi e massimi per il bonus
  const MIN_VALUE = -10
  const MAX_VALUE = 10

  /**
   * Incrementa il contatore di 1, ma non oltre il valore massimo
   */
  const increment = () => {
    setCount(prevCount => prevCount < MAX_VALUE ? prevCount + 1 : prevCount)
  }

  /**
   * Decrementa il contatore di 1, ma non sotto il valore minimo
   */
  const decrement = () => {
    setCount(prevCount => prevCount > MIN_VALUE ? prevCount - 1 : prevCount)
  }

  /**
   * Riporta il contatore al valore iniziale (0)
   */
  const reset = () => {
    setCount(0)
  }

  return (
    <div className="text-center my-5">
      <h2>Click Counter</h2>

      {/* Mostra il valore corrente del contatore */}
      <div className="my-4">
        <span
          className="display-4"
          data-testid="counter-value"
        >
          {count}
        </span>
      </div>

      {/* Gruppo di pulsanti per il controllo */}
      <div className="btn-group" role="group">
        <button
          className="btn btn-primary"
          onClick={decrement}
          data-testid="decrement-button"
        >
          <i className="bi bi-dash-lg"></i> Decrementa
        </button>

        <button
          className="btn btn-secondary mx-2"
          onClick={reset}
          data-testid="reset-button"
        >
          Reset
        </button>

        <button
          className="btn btn-primary"
          onClick={increment}
          data-testid="increment-button"
        >
          <i className="bi bi-plus-lg"></i> Incrementa
        </button>
      </div>

      {/* Messaggi limite (opzionali) */}
      <MessaggioLimite count={count} limite={MIN_VALUE}>
        min value
      </MessaggioLimite>
      <MessaggioLimite count={count} limite={MAX_VALUE}>
        Hai raggiunto il valore massimo!
      </MessaggioLimite>
    </div>
  )
}

export default ClickCounter
