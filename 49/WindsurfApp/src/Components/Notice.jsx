function Notice({ message, type }) {
  if (message === '') return <></>
  return <div className="d-flex justify-content-center m-3">
    <div className={`alert alert-${type} w-50 text-center`} role="alert">
      {message}
    </div>
  </div>
}
export default Notice
