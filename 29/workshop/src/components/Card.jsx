function Card ({ title, description, imageUrl }) {
  return (
    <div className='card'>
      <img src={imageUrl} alt={title} className='card-image' />
      <h2 className='card-title'>{title}</h2>
      <p className='card-description'>{description}</p>
    </div>
  )
}

export default Card
