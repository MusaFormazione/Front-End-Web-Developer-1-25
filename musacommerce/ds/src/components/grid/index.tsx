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
    {offset > 0 && <div className={offsetClass}></div>}
    <div className={`${offsetClass} ${colClass}`} style={style}>
      {children}
    </div>
  </>;

}



export { Row, Col };
