function Knots({ knots, setKnots }) {
  return <div className="justify-content-center d-flex">
    <div className="d-flex flex-column">
      <label htmlFor="knots" className="form-label">
        Nodi {knots}
      </label>
      <input type="range"
        className="form-range w-75"
        id="knots" value={knots}
        min={0} max={50}
        onChange={e => setKnots(e.target.value)} />
    </div>
  </div>
}

export default Knots
