import Card from './Card'
import './App.scss'

const cardData = [
  {
    title: 'Calcio',
    description: 'Sport seguito da milioni di persone in tutto il mondo.',
    icon: '⚽',
    theme: 'light'
  },
  {
    title: 'Pallavolo',
    description: 'Sport di squadra molto popolare, praticato nel il mondo.',
    icon: '🏐',
    theme: 'dark'
  },
  {
    title:'Climbing',
    description: 'Sport che consiste nell\'arrampicarsi su pareti rocciose o strutture artificiali.',
    icon: '🧗‍♂️',
    theme: 'light'
  }
]

function App () {
  return (
    <div className="container">
      <h1>Ex Theme</h1>
      <div className="cards">
        {cardData.map((data, idx) => (
          <Card key={idx} {...data} className={`${data.title.toLowerCase()}`} />
        ))}
      </div>
    </div>
  )
}

export default App
