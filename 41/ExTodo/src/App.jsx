import { useRef, useState } from 'react'

import './App.scss'

function App () {
  const [todos, setTodos] = useState([]);
  const todoInputRef = useRef();

  const handleAddTodo = () => {
    const newTodo = todoInputRef.current.value;
    if (newTodo.trim() === '') return;
    setTodos([...todos, { text: newTodo, completed: false }]);
    todoInputRef.current.value = '';
  };

  const toggleTodoCompletion = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }


  return <div className="container">
      <h1>Ex Todo</h1>
      <div className="m-3 col-4">
        <label htmlFor="todo-text" className="form-label">todo</label>
        <input type="text" className="form-control" id="todo-text" ref={todoInputRef} />
        <div className="form-text">Inserisci la nuova todo</div>
        <button className='btn btn-primary' onClick={handleAddTodo}>Aggiungi Todo</button>
      </div>
      <ul className="list-group m-3 col-4">
        {todos.map((todo, index) => (
          <li key={index} className={`list-group-item todos fs-5 ${todo.completed ? 'completed' : ''}`}>
            {todo.text}
            <button
              className={`btn btn-sm float-end ${todo.completed ? 'btn-outline-success' : 'btn-success'}`}
              onClick={() => toggleTodoCompletion(index)}>
              completato
            </button>
            <button
              className={`btn btn-sm float-end me-2 ${todo.completed ? 'btn-outline-danger' : 'btn-danger'}`}
              onClick={() => handleDeleteTodo(index)}>
              elimina
            </button>
          </li>
        ))}
      </ul>
    </div>
}

export default App
