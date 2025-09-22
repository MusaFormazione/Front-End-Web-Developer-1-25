import styled from '@emotion/styled'

// Stile per il pulsante di reset
const Button = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 15px;
  transition: transform 0.2s, background-color 0.3s;

  &:hover {
    background-color: #218838;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`

// Componente per il pulsante di reset
function ResetButton({ onReset, testid }) {
  return (
    <Button
      onClick={onReset}
      data-testid={`reset-button${testid ? `-${testid}` : ''}`}
    >
      Gioca di nuovo
    </Button>
  )
}

export default ResetButton
