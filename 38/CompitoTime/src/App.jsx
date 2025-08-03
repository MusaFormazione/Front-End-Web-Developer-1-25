import { useEffect, useState } from 'react'

import './App.css'

function App () {
  const [msgHidden, setMsgHidden] = useState(false)
  const [intervalId, setIntervalId] = useState(null)
  const [count, setCount] = useState(0)

  const startCounter = () => {
    if (intervalId) {
      clearInterval(intervalId)
    }
    const id = setInterval(() => {
      setCount(prevCount => prevCount + 1)
    }, 1000)
    setIntervalId(id)
  }

  const stopCounter = () => {
    console.log('Counter stopped', intervalId)
    if (intervalId) {
      clearInterval(intervalId)
      setIntervalId(null)
    }
  }

  useEffect(() => {
    const id = setTimeout(() => {
      setMsgHidden(true)
    }, 5000)

    return () => clearInterval(id)
  }, [])

  return <div className="container">
      <h1>Compito Time</h1>
      <p>contatore {count}</p>
      <button className="btn btn-success m-2" onClick={startCounter}>
        Start
      </button>
      <button className="btn btn-danger m-2" onClick={stopCounter}>
        Stop
      </button>
      { !msgHidden && <div className="alert alert-info m-2"> Ciao sono un messaggio che scompare dopo 5 secondi</div> }

    </div>
}

export default App
