import "./style.scss"

interface RowProps {
  children: React.ReactNode;
}

function Row({ children }: RowProps) {
  return <div className="row">{children}</div>;
}

interface ColProps {
  children: React.ReactNode;
  cols?: number;
  offset?: number;
  style?: React.CSSProperties;
}

function Col({ children, cols, offset, style }: ColProps) {
  const colClass = cols ? `col-${cols}` : '';
  const offsetClass = offset ? `col-${offset}` : '';

  return <>
    {(offset && offset > 0) && <div className={offsetClass}></div>}
    <div className={`${offsetClass} ${colClass}`} style={style}>
      {children}
    </div>
  </>;

}

interface ContainerProps {
  children: React.ReactNode;
}

function Container ({ children }: ContainerProps) {
  // Errore fatto a lezione, la riga originale era
  // <div className="mds-container">
  // dove evdientemente mancava il return come in questa corretta
  return <div className="mds-container">
    {children}
  </div>
}


export { Row, Col, Container };
