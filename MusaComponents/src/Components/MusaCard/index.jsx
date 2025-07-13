function MusaCard({ children, title, image, action }) {
  const imgWidth = 'w-70 w-sm-70 w-md-70 w-lg-40 w-xl-40'
  const imgDisplay = 'd-block d-sm-block d-md-block d-lg-inline d-xl-inline'
  const imgSpacing = 'p-4 mx-auto'
  const imgRoundedClassName = `rounded-circle ${imgWidth} ${imgDisplay} ${imgSpacing}`
  return <div className="card shadow m-1">
      {!image.portrait && <img src={image.src} className='img-card-top' alt={title} />}
      <div className="card-body">
        <h5 className="card-title">
          {image.portrait && <img src={image.src} className={imgRoundedClassName} alt={title} /> }
          <span className="h2">{title}</span>
        </h5>
        <p className="card-text">{children}</p>
        {action && <a onClick={action.callback} className="btn btn-primary">{action.label}</a>}
      </div>
    </div>;
}

export default MusaCard;
