import Card from './Components/Card'

import './App.css'

const imageList = [
  'https://picsum.photos/340/340?random=1',
  'https://picsum.photos/340/340?random=2',
  'https://picsum.photos/340/340?random=3',
  'https://picsum.photos/340/340?random=4',
];

function App() {
  return <div className="container">
    <h1>Compito 37: Card With Effect</h1>
    <div className="d-flex flex-wrap justify-content-center">
      {imageList.map((imageUrl, index) => (
        <Card
          key={index}
          title={`Card ${index + 1}`}
          description={`Descrizione di esempio per Card ${index + 1}`}
          imageUrl={imageUrl}
        />
      ))}
    </div>
  </div>
}

export default App
