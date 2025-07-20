import TodoList from './TodoList'
import InputTodo from './InputTodo'

function Postit({todoList, removeTodo, handleNewInput}) {

  return <div className="container">
    <div className="container-inner">
      <div class="sticky-outer">
        <div class="sticky">
          <div class="sticky-content">
            <TodoList todoList={todoList} removeTodo={removeTodo} />
            <InputTodo handleNewInput={handleNewInput} />
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Postit
