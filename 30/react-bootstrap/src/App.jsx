import Button from './Button'
import './App.css'

function App () {
  return (
    <div class='container'>
      <h1>Lezione 30</h1>
      <h3>React +  Bootstrap</h3>
      <Button type='primary'>Sono un bottone primario</Button>
      <Button type='secondary'>Sono un bottone secondario</Button>
      <Button type='success'>Sono un bottone di successo</Button>
      <Button type='danger'>Sono un bottone pericoloso</Button>
      <Button type='warning'>Sono un bottone di avviso</Button>
      <Button type='info'>Sono un bottone informativo</Button>
      <Button type='light'>Sono un bottone chiaro</Button>
      <Button type='dark'>Sono un bottone scuro</Button>
    </div>
  )
}

export default App
