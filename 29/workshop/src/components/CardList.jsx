import Card from './Card'

function CardList ({ cards }) {
  return (
    <div className='card-list'>
      {cards.map(card => (
        <Card key={card.id} title={card.title} imageUrl={card.image} />
      ))}
    </div>
  )
}

export default CardList
