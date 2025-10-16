import { useRef } from "react";
import { useDispatch } from "react-redux";

import { addItem } from '../store/listSlice';

function Aggiungi() {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const handleAddItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita l' azione predefinita
    if(ref.current === null) return;
    const newItem = ref.current.value;
    dispatch(addItem(newItem));
    ref.current.value = '';
  }

  return  <div className='p-2'>
    Inserisci un elemento alla lista:
    <input className="form-control m-2 d-inline" type="text" ref={ref} />
    <button className="btn btn-primary m-2 d-inline" onClick={handleAddItem}>Aggiungi</button>
  </div>
}

export default Aggiungi
