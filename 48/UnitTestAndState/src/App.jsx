import './App.css'
import ClickCounter from './components/ClickCounter'

function App () {
  return (
    <div className="container">
      <h1 className="text-center my-4">Unit Test And State</h1>
      <p className="lead text-center mb-5">
        Esempio di componente React con useState e testing
      </p>
      <ClickCounter />
    </div>
  )
}

export default App
