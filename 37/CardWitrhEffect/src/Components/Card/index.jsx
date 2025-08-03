import './style.css'

function Card({ title, description, imageUrl }) {
  return (
    <div className="card m-2 shadow" style={{ width: '18rem' }}>
      <img src={imageUrl} className="card-img-top image-with-effect" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">Azione</a>
      </div>
    </div>
  );
}

export default Card;
