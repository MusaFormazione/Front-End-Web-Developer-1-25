function TodoList({ todoList,  removeTodo }) {
  return <>
    { todoList.map( (todo, index) => <div key={index} className="todo-item">
        <span>{todo}</span>
        <button onClick={() => removeTodo(index)}> x </button>
      </div>
    )}
  </>
}
export default TodoList
