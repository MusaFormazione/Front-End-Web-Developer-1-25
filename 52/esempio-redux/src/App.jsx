import { useDispatch, useSelector} from 'react-redux';

import './App.css'
import { useRef } from 'react';
import { addItem, clearList } from './store/listSlice';

function App () {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const lista = useSelector(state => state.list)
  const handleAddItem = (e) => {
    e.preventDefault(); // Evita l' azione predefinita
    const newItem = ref.current.value;
    if (newItem) {
      dispatch(addItem(newItem));
      ref.current.value = '';
    }
  }

  return <div className="container">
      <h1>Esempio Redux</h1>
      <div className='p-2'>
        Inserisci un elemento alla lista:
        <input className="form-control m-2 d-inline" type="text" ref={ref} />
        <button className="btn btn-primary m-2 d-inline" onClick={handleAddItem}>Aggiungi</button>
      </div>
      <ul>
        { lista.items.map((item, index) => <li key={index}>{item}</li>) }
      </ul>
      <div className='p-2'>
        <button className="btn btn-danger"
          onClick={() => dispatch(clearList())}>
          Pulisci la lista
        </button>
      </div>
    </div>
}

export default App
