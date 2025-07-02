function createClassName(xs, sm, md, lg, xl) {
  let classes = ""
  if (xs) {
    classes += `col-${xs} `;
  }
  if (sm) {
    classes += `col-sm-${sm} `;
  }
  if (md) {
    classes += `col-md-${md} `;
  }
  if (lg) {
    classes += `col-lg-${lg} `;
  }
  if (xl) {
    classes += `col-xl-${xl} `;
  }
  return classes
}


// Qui esportiamo il componente MusaCol che rappresenta una colonna in un layout Bootstrap.
// Utilizziamo le classi di Bootstrap per gestire le dimensioni delle colonne in base to le dimensioni dello schermo.
// Le classi sono dinamiche e si adattano alle props
function MusaCol({ children, className = '', xs, sm, md, lg, xl }) {
  // Costruiamo la classe dinamicamente in base alle props
  const classes = createClassName(xs, sm, md, lg, xl) + className

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export default MusaCol
