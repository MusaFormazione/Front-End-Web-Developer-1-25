// function Position({ geolocation }) {
//    const { latitude, longitude } = geolocation;
// //=> equivale a:
function Position({ geolocation: { latitude, longitude } }) {
  return <div className="modal fade" data-bs-backdrop="static" tabIndex={-1} id="positionModal">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Posizione</h2>
        </div>
        <div className="modal-body">
          <p>Latitudine: <b>{latitude}</b></p>
          <p>Longitudine: <b>{longitude}</b></p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
        </div>
      </div>

    </div>
  </div>
}
export default Position;
