function Remove ({ onClick, index }) {
  return <button onClick={() => onClick(index)}> x </button>
}

function TodoList ({ todoList, removeTodo, refNota }) {
  const handleRemove = (index) => {
    refNota.current.focus() // Nota importante: il focus deve essere impostato
    removeTodo(index)
  }

  return <>
      {todoList.map((todo, index) =>
        <div key={index} className='todo-item'>
          <span>{todo}</span>
          <Remove onClick={() => handleRemove(index )} />
        </div>
      )}
    </>
}
export default TodoList
