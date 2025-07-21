function Button ({ children, type = 'primary' }) {
  return (
    <button className={`btn btn-${type}`} style={{ margin: '8px' }}>
      {children}
    </button>
  )
}

export default Button
