export function Title({ children }) {
  return <h2>{children}</h2>
}

export function Input({ value, placeholder, label, onChange }) {
  return <>
    <label className="form-label">{label}</label>
    <input className="form-control" type="text" value={value} onChange={onChange} placeholder={placeholder} />
  </>
}

export function Button({ onClick, children, btnType, dataTestId }) {
  const className = `m-2 btn ${btnType || 'btn-secondary'}`;
  return <button className={className} onClick={onClick} data-testid={dataTestId}>
    {children}
  </button>
}

export function Message({ children }) {
  return <p className="py-2 shadow">{children}</p>
}
