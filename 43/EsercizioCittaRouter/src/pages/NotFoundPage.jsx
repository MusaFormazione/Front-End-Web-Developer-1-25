function NotFoundPage() {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404 - Pagina non trovata</h1>
      <div className="not-found__content">
        <p>Oops! La pagina che stai cercando non esiste.</p>
        <p>Ti sei perso durante l'esplorazione delle città? Utilizza il menu di navigazione per tornare a una pagina esistente.</p>
      </div>
      <div className="not-found__image">
        <img src="https://placehold.co/600x400?text=Città+sconosciuta" alt="Città sconosciuta" />
      </div>
    </div>
  )
}

export default NotFoundPage
