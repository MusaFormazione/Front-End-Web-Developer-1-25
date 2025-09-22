import styled from '@emotion/styled'

// Stile per il form
const StyledForm = styled.form`
  margin: 20px 0;
`

// Stile per il campo di input
const Input = styled.input`
  padding: 8px 12px;
  border: 2px solid #ced4da;
  border-radius: 4px;
  font-size: 16px;
  margin-right: 10px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #0d6efd;
  }
`

// Stile per il pulsante di invio
const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #0d6efd;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0b5ed7;
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`

// Componente form per i tentativi dell'utente
function GuessForm({ userGuess, setUserGuess, onGuess, disabled, testid }) {
  // Gestisce il cambio del valore dell'input
  const handleChange = (e) => {
    setUserGuess(e.target.value)
  }

  // Gestisce l'invio del form
  const handleSubmit = (e) => {
    e.preventDefault()
    if (userGuess.trim() !== '') {
      onGuess(userGuess)
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        type="number"
        min="1"
        max="100"
        value={userGuess}
        onChange={handleChange}
        placeholder="Inserisci un numero"
        disabled={disabled}
        data-testid={`guess-input${testid ? `-${testid}` : ''}`}
      />
      <SubmitButton
        type="submit"
        disabled={disabled || userGuess.trim() === ''}
        data-testid={`guess-button${testid ? `-${testid}` : ''}`}
      >
        Prova
      </SubmitButton>
    </StyledForm>
  )
}

export default GuessForm
