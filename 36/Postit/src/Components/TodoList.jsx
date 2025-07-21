function Remove ({ onClick, index }) {
  return <button onClick={() => onClick(index)}> x </button>
}

function TodoList ({ todoList, removeTodo }) {
  return (
    <>
      {todoList.map((todo, index) =>
        <div key={index} className='todo-item'>
          <span>{todo}</span>
          <Remove onClick={removeTodo} index={index} />
        </div>
      )}
    </>
  )
}
export default TodoList
