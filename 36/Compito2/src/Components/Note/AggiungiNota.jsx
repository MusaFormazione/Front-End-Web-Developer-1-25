
function AggiungiNota ({ handleAggiungi, notaRef }) {
  return (
    <div className='d-flex justify-content-between align-items-center'>
      <div>
        {/* Notare l'utilizzo di onKeyUp per aggiungere la nota con il tasto Invio */}
        <input
          className='form-control'
          onKeyUp={e => e.key === 'Enter' && handleAggiungi()}
          ref={notaRef}
          placeholder='inserisci una nuova nota' />
      </div>
      <div>
        <button className='btn btn-primary' onClick={handleAggiungi}>
            aggiungi <i className='bi bi-plus-circle' />
        </button>
      </div>
    </div>
  )
}

export default AggiungiNota
