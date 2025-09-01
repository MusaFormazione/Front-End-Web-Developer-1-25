function Todo({ todo, index, toggleTodoCompletion, handleDeleteTodo }) {
  const { text, completed } = todo;
  return <li key={index} className={`list-group-item todos fs-5 ${completed ? 'completed' : ''}`}>
    {text}
    <button
      className={`btn btn-sm float-end ${completed ? 'btn-outline-success' : 'btn-success'}`}
      onClick={() => toggleTodoCompletion(index)}>
      completato
    </button>
    <button
      className={`btn btn-sm float-end me-2 ${completed ? 'btn-outline-danger' : 'btn-danger'}`}
      onClick={() => handleDeleteTodo(index)}>
      elimina
    </button>
  </li>
}

export default Todo
