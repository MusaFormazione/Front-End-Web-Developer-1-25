function History({ history, dispatch }) {
  if (!history) return null;
  return <div>
    <h5>Storico della giornata</h5>
    <ul className="list-group mb-3">
      {history.map((m, i) => (
          <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
            {m.label}
            <button
              className="btn btn-sm btn-outline-danger"
              title="Rimuovi"
              onClick={() => dispatch({type: 'REMOVE_HISTORY', payload: i })}
            >
              <i className="bi bi-trash"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
}

export default History;
