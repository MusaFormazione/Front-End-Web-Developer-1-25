import { useEffect, useState } from 'react'
import './App.css'

function App () {
  const [timeoutMsg, setTimeoutMsg] = useState('')
  const [intervalMsg, setIntervalMsg] = useState('')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTimeoutMsg('Timeout triggerato!')
    }, 8000)
    return () => clearTimeout(timeoutId) // Importante togliere il timeout se il componente viene smontato prima che scada
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIntervalMsg(prev => prev + 'Tick ')
    }, 1000)

    return () => clearInterval(intervalId) // Importante togliere l'intervallo se il componente viene smontato
  }, [])


  return <div className="container">
      <h1>Timeout Example</h1>
      <p>{timeoutMsg ? timeoutMsg : 'Aspettando il timeout...'}</p>
      <p>{intervalMsg ? intervalMsg : 'Aspettando l\'intervallo...'}</p>
    </div>
}

export default App
