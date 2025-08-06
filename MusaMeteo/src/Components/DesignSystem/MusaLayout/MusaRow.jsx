function MusaRow ({ children, className = '' }) { // esponiamo anche una classe opzionale
  return (
    <div className={`row ${className}`}>
      {children}
    </div>
  )
}

export default MusaRow
