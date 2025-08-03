
function Nota ({ nota, rimuovi }) {
  const btnClassName = 'm-2 btn btn-outline-danger btn-sm'
  return (
    <li key={nota.id} className='list-group-item'>
      {nota.testo}
      <button className={btnClassName} onClick={() => rimuovi(nota.id)}>
        rimuovi <i class='bi bi-trash ml-1' />
      </button>
    </li>
  )
}

export default Nota
