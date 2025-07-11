import "./style.css"

function MusaButton ({ children, onClick, variant = 'primary' }) {
  const className = `musa-btn btn btn-${variant}`
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}

export default MusaButton
