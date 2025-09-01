import Card from './Card'
import './App.scss'

const cardData = [
  {
    title: 'Sole',
    description: 'Tema solare, luminoso e caldo.',
    icon: '☀️',
    theme: 'light'
  },
  {
    title: 'Luna',
    description: 'Tema lunare, scuro e rilassante.',
    icon: '🌙',
    theme: 'dark'
  },
]

function App () {
  return (
    <div className="container">
      <h1>Ex Theme</h1>
      <div className="cards">
        {cardData.map((data, idx) => (
          <Card key={idx} {...data} className={`${data.title.toLowerCase()}`} theme={data.theme} />
        ))}
      </div>
    </div>
  )
}

export default App
