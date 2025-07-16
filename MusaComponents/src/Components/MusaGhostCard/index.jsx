function MusaGhostCard() {
  return <div className="card shadow" aria-hidden="true">
  <div style={{ backgroundColor: "lightgrey", minHeight: "300px"}}
    className="card-img-top" alt="placeholder" title="placeholder"/>
  <div className="card-body">
    <h5 className="card-title placeholder-glow">
      <span className="placeholder col-4"></span>
    </h5>
    <p className="card-text placeholder-glow">
      <span className="placeholder col-3"></span>
      <span className="placeholder col-6"></span>
      <span className="placeholder col-4"></span>
      <span className="placeholder col-4"></span>
      <span className="placeholder col-6"></span>
      <span className="placeholder col-8"></span>
    </p>
    <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
  </div>
</div>
}

export default MusaGhostCard
