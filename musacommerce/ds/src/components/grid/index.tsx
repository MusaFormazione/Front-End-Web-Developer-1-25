import "./style.scss"

interface RowProps {
  children: React.ReactNode;
}

function Row({ children }: RowProps) {
  return <div className="mds-row">{children}</div>;
}

interface ColProps {
  children: React.ReactNode;
  cols?: number;
  offset?: number;
  style?: React.CSSProperties;
}

function Col({ children, cols, offset, style }: ColProps) {
  const colClass = cols ? `col-${cols}` : '';
  const offsetClass = offset ? `offset-${offset}` : '';
  return <div className={`mds-col ${colClass} ${offsetClass}`} style={style}>
    {children}
  </div>;
}
export { Row, Col };
