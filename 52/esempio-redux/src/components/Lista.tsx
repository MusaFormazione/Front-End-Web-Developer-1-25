import { useSelector } from "react-redux"

function Lista() {
  const lista = useSelector(state => state.lista)

  return<ul>
      { lista.items.length > 0 ? lista.items.map((item:string, index:number) => <li key={index}>{item}</li>) : <li>Nessun elemento nella lista</li>}
    </ul>
}

export default Lista
