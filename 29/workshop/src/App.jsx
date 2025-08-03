import './App.css'
import CardList from './components/CardList'
import Title from './components/Title'

const cards = [
  { id: 1, title: 'Lake Landscape', image: 'https://picsum.photos/id/81/200/300/' },
  { id: 2, title: 'Mountain Lakes', image: 'https://picsum.photos/id/221/200/300/' },
  { id: 3, title: 'City Lights', image: 'https://picsum.photos/id/83/200/300/' },
  { id: 4, title: 'Desert Dunes', image: 'https://picsum.photos/id/104/200/300/' },
  { id: 5, title: 'Forest Path', image: 'https://picsum.photos/id/55/200/300/' },
  { id: 6, title: 'Ocean Waves', image: 'https://picsum.photos/id/229/200/300/' },
  { id: 7, title: 'Snowy Peaks', image: 'https://picsum.photos/id/227/200/300/' },
  { id: 8, title: 'Sunset Glow', image: 'https://picsum.photos/id/18/200/300/' }
]

function App () {
  return (
    <>
      <Title>Galleria di Immagini</Title>
      <CardList cards={cards} />
    </>
  )
}

export default App
