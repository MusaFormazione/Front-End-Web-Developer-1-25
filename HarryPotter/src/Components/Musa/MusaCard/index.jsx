import './style.css'

// image: { src, portrait = false }
// action: { label, callback }
function MusaCard ({ children, title, image, action }) {
  return (
    <div className='card shadow m-1'>
      {!image.portrait && <img src={image.src} className='img-card-top' alt={title} />}
      <div className='card-body'>
        <h5 className={`card-title ${image.portrait && 'portrait'}`}>
          {image.portrait && <div className='portrait'>
            <img src={image.src} className='portrait' alt={title} />
          </div>}
          <span className='h2'>{title}</span>
        </h5>
        <p className='card-text'>{children}</p>
        {action && <a onClick={action.callback} className='btn btn-primary'>{action.label}</a>}
      </div>
    </div>
  )
}

export default MusaCard
