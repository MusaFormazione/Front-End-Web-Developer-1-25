import { useRef, useState } from 'react'

import Todo from './Todo'

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
      <div className="row">
        <div className="m-1 m-md-3 col-12 col-md-6">
          <label htmlFor="todo-text" className="form-label">todo</label>
          <input type="text" className="form-control" id="todo-text" ref={todoInputRef} />
          <div className="form-text">Inserisci la nuova todo</div>
          <button className='btn btn-primary' onClick={handleAddTodo}>Aggiungi Todo</button>
        </div>
        <ul className="list-group m-1 m-md-3 col-12 col-md-6">
          {todos.map((todo, index) => (
            <Todo key={index}
              todo={todo}
              index={index}
              toggleTodoCompletion={toggleTodoCompletion}
              handleDeleteTodo={handleDeleteTodo} />
          ))}
        </ul>
      </div>
    </div>
}

export default App
