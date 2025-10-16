import { useDispatch } from 'react-redux';

import { clearList } from './store/listSlice';

import Lista from './components/Lista';

import './App.css'
import Aggiungi from './components/Aggiungi';

function App () {
  const dispatch = useDispatch();

  return <div className="container">
      <h1>Esempio Redux</h1>
      <Aggiungi />
      <Lista />
      <div className='p-2'>
        <button className="btn btn-danger"
          onClick={() => dispatch(clearList())}>
          Pulisci la lista
        </button>
      </div>
    </div>
}

export default App
