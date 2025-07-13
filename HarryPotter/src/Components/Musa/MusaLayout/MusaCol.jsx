// Qui esportiamo il componente MusaCol che rappresenta una colonna in un layout Bootstrap.
// Utilizziamo le classi di Bootstrap per gestire le dimensioni delle colonne in base to le dimensioni dello schermo.
// Le classi sono dinamiche e si adattano alle props
function MusaCol ({ children, className = '', xs = 12, sm = 12, md = 12, lg = 12, xl = 12 }) {
  // Costruiamo la classe dinamicamente in base alle props
  const classes = `col-${xs} col-sm-${sm} col-md-${md} col-lg-${lg} col-xl-${xl} ${className}`

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export default MusaCol
