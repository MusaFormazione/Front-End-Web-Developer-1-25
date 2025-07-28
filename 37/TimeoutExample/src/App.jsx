import { useEffect, useState } from 'react'
import './App.css'



function Interval({children, setIntervalMsg}) {

    useEffect(() => {
      const intervalId = setInterval(() => {
        setIntervalMsg(prev => prev + 'Tick ')
        console.log('Interval tick')
      }, 1000)

      return () => {
        console.log('Compenente smontato, pulizia dell\'intervallo') // in inglese unmount
        clearInterval(intervalId) // Importante togliere l'intervallo se il componente viene smontato
      }
    }, [])

    return  <p>{children}</p>
  }

function App () {
  const [timeoutMsg, setTimeoutMsg] = useState('')
  const [intervalMsg, setIntervalMsg] = useState('')
  const [intervalHidden, setIntervalHidden] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTimeoutMsg('Timeout triggerato!')
    }, 8000)
    return () => clearTimeout(timeoutId) // Importante togliere il timeout se il componente viene smontato prima che scada
  }, [])


  return <div className="container">
      <h1>Timeout Example</h1>
      <p>{timeoutMsg ? timeoutMsg : 'Aspettando il timeout...'}</p>
      {!intervalHidden && (
        <Interval setIntervalMsg={setIntervalMsg}>
          {intervalMsg ? intervalMsg : 'Aspettando l\'intervallo...'}
        </Interval>
      )}
      <button className="btn btn-primary m-1" onClick={() => setIntervalHidden(prev => !prev)}>
        {intervalHidden ? 'Mostra Intervallo' : 'Nascondi Intervallo'}
      </button>
    </div>
}

export default App
