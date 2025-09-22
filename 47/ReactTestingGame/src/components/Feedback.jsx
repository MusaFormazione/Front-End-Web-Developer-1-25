import styled from '@emotion/styled'

// Stile base per il messaggio di feedback
const FeedbackContainer = styled.div`
  padding: 15px;
  margin: 20px 0;
  border-radius: 6px;
  font-size: 18px;
  transition: all 0.3s ease;
`

// Componente per il feedback all'utente
function Feedback({ message, gameOver, testid }) {
  // Determina lo stile in base al contenuto del messaggio
  const getFeedbackStyle = () => {
    if (gameOver) {
      return {
        backgroundColor: '#d4edda',
        color: '#155724',
        transform: 'scale(1.05)'
      }
    } else if (message.includes('Troppo alto')) {
      return {
        backgroundColor: '#f8d7da',
        color: '#721c24'
      }
    } else if (message.includes('Troppo basso')) {
      return {
        backgroundColor: '#cce5ff',
        color: '#004085'
      }
    } else {
      return {
        backgroundColor: '#e2e3e5',
        color: '#383d41'
      }
    }
  }

  return (
    <FeedbackContainer
      style={getFeedbackStyle()}
      data-testid={`feedback-message${testid ? `-${testid}` : ''}`}
    >
      {message}
    </FeedbackContainer>
  )
}

export default Feedback
